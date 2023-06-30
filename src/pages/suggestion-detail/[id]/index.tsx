import Suggestion from "@/components/home/Suggestion"
import React, { Fragment, useRef, useState } from "react"
import {
  Comment,
  CommentImage,
  CommentInformations,
  CommentQuantity,
  CommentSectionWrapper,
  CommentWrapper,
  CommentsContainer,
  CommentsWrapper,
  Header,
  MiddleSection,
  NewCommentContainer,
  PostComment,
  Reply,
  ReplyArea,
  ReplyImage,
  ReplySectionContaner,
  Text,
  UserInformations,
  Username,
} from "./styles"
import { CaretLeft } from "phosphor-react"
import Link from "next/link"
import Image from "next/image"
import { GetServerSideProps } from "next"
import axios from "axios"
import { DataSchema } from "../../../../types"
import { ParsedUrlQuery } from "querystring"
import { useQuery } from "react-query"
import { useRouter } from "next/router"

interface DynamicStateValues {
  [key: string]: { value: string }
}

const SuggestionDetail = (props: { id: string }) => {
  const {
    data: postData,
    isLoading,
    refetch: refetchData,
  } = useQuery<DataSchema>("specificPost", getSuggestions)

  async function getSuggestions() {
    const { data } = await axios.get(`/api/posts/${props.id}`)

    return data
  }

  const route = useRouter()

  const [newComment, setNewComment] = useState("")
  const [openCommentReply, setOpenCommentReply] = useState<string[]>([])
  const [openRepliesReply, setOpenRepliesReply] = useState<string[]>([])
  const textAreaRef = useRef(null)

  const [replyCommentFieldValue, setReplyCommentFieldValue] =
    useState<DynamicStateValues>({})
  const [replyRepliesFieldValue, setReplyRepliesFieldValue] =
    useState<DynamicStateValues>({})

  const commentCount = postData?._count.comment

  const handleNewComment = async (id: number | undefined) => {
    if (newComment === "") {
      return alert("a")
    }

    await axios.post("/api/new-comment", { id, comment: newComment })

    refetchData()
    setNewComment("")
  }

  const handleNewCommentReply = async (
    commentId: string,
    stateManager: React.Dispatch<React.SetStateAction<{}>>
  ) => {
    const id = props.id

    await axios.patch(`/api/posts/${id}`, {
      reply:
        replyCommentFieldValue[commentId as keyof typeof replyCommentFieldValue]
          .value,
      commentRelation: commentId,
    })

    refetchData()

    stateManager((oldValue) => {
      return {
        ...oldValue,
        [commentId]: {
          value: "",
        },
      }
    })
  }

  const handleNewReplyOnReplies = async (
    commentId: string,
    replyId: string,
    stateManager: React.Dispatch<React.SetStateAction<{}>>
  ) => {
    const id = props.id

    await axios.patch(`/api/posts/${id}`, {
      reply:
        replyRepliesFieldValue[replyId as keyof typeof replyRepliesFieldValue].value,
      commentRelation: commentId,
    })

    refetchData()

    stateManager((oldValue) => {
      return {
        ...oldValue,
        [replyId]: {
          value: "",
        },
      }
    })
  }

  const handleOpenReplyModal = (
    id: string,
    state: string[],
    stateManager: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (state.includes(id)) {
      stateManager((oldVal) => oldVal.filter((replyDivs) => replyDivs !== id))
    } else {
      stateManager((oldVal) => [...oldVal, id])
    }
  }

  const handleSetDynamicInputValue = (
    id: string,
    value: string,
    stateManager: React.Dispatch<React.SetStateAction<{}>>
  ) => {
    stateManager((oldValue) => {
      return {
        ...oldValue,
        [id]: {
          value,
        },
      }
    })
  }

  if (isLoading) return <></>

  return (
    <CommentsContainer>
      <CommentsWrapper>
        <Header>
          <div>
            <CaretLeft size={15} color="#4661E6" weight="bold" />
            <Link href="/">Go Back</Link>
          </div>
          <div>
            <button type="button" onClick={() => route.push(`edit/${postData?.id}`)}>
              Edit Feedback
            </button>
          </div>
        </Header>

        {postData && <Suggestion data={postData} />}

        <MiddleSection>
          <CommentSectionWrapper>
            <CommentQuantity>
              {commentCount} Comment{!!commentCount && commentCount > 1 && "s"}
            </CommentQuantity>

            {/*             <CommentInformations>
              <CommentWrapper>
                <CommentImage>
                  <Image
                    width={40}
                    height={40}
                    alt="User profile"
                    src="https://i.postimg.cc/L8LCLyJd/image-elijah.jpg"
                  />
                </CommentImage>
                <Comment>
                  <UserInformations>
                    <Username>
                      <Text model="user">Elijah Moss</Text>
                      <Text model="username">@hexagon.bestagon</Text>
                    </Username>

                    <button
                      type="button"
                      onClick={() => setOpenCommentReply(!openCommentReply)}
                    >
                      Reply
                    </button>
                  </UserInformations>

                  <Text model="comment">
                    Also, please allow styles to be applied based on system
                    preferences. I would love to be able to browse Frontend Mentor in
                    the evening after my devices dark mode turns on without the
                    bright background it currently has.
                  </Text>
                  {openCommentReply && (
                    <ReplyArea>
                      <textarea placeholder="Type your reply here!" />
                      <button type="button">Reply</button>
                    </ReplyArea>
                  )}
                </Comment>
              </CommentWrapper>
              <ReplySectionContaner>
                <div>
                  <ReplyImage>
                    <Image
                      width={40}
                      height={40}
                      alt="User profile"
                      src="https://i.postimg.cc/L8LCLyJd/image-elijah.jpg"
                    />
                  </ReplyImage>
                  <Reply>
                    <UserInformations>
                      <Username>
                        <Text model="user">Elijah Moss</Text>
                        <Text model="username">@hexagon.bestagon</Text>
                      </Username>

                      <button>Reply</button>
                    </UserInformations>

                    <Text model="comment">
                      Also, please allow styles to be applied based on system
                      preferences. I would love to be able to browse Frontend Mentor
                      in the evening after my devices dark mode turns on without the
                      bright background it currently has.
                    </Text>
                    <ReplyArea>
                      <textarea placeholder="Type your reply here!" />
                      <button type="button">Reply</button>
                    </ReplyArea>
                  </Reply>
                </div>
              </ReplySectionContaner>
            </CommentInformations> */}

            <CommentInformations>
              {postData?.comment?.map((content) => {
                return (
                  <div className="comment-and-reply-wrapper" key={content.id}>
                    <CommentWrapper>
                      <CommentImage
                        css={{
                          "--has-reply": content.replies.length ? "''" : "",
                        }}
                      >
                        <Image
                          width={40}
                          height={40}
                          alt="User profile"
                          src={content.iconImage}
                        />
                      </CommentImage>
                      <Comment>
                        <UserInformations>
                          <Username>
                            <Text model="user">{content.name}</Text>
                            <Text model="username">{content.username}</Text>
                          </Username>

                          <button
                            type="button"
                            onClick={() =>
                              handleOpenReplyModal(
                                content.id,
                                openCommentReply,
                                setOpenCommentReply
                              )
                            }
                          >
                            Reply
                          </button>
                        </UserInformations>

                        <Text model="comment">{content.description}</Text>

                        {openCommentReply.includes(content.id) && (
                          <ReplyArea ref={textAreaRef}>
                            <textarea
                              value={
                                replyCommentFieldValue[
                                  content.id as keyof typeof replyCommentFieldValue
                                ]?.value
                              }
                              onChange={(e) =>
                                handleSetDynamicInputValue(
                                  content.id,
                                  e.target.value,
                                  setReplyCommentFieldValue
                                )
                              }
                              placeholder="Type your reply here!"
                            />
                            <button
                              onClick={() =>
                                handleNewCommentReply(
                                  content.id,
                                  setReplyCommentFieldValue
                                )
                              }
                              type="button"
                            >
                              Reply
                            </button>
                          </ReplyArea>
                        )}
                      </Comment>
                    </CommentWrapper>

                    {content.replies.map((reply) => {
                      return (
                        <ReplySectionContaner key={reply.id}>
                          <div>
                            <ReplyImage>
                              <Image
                                width={40}
                                height={40}
                                alt="User profile"
                                src="https://i.postimg.cc/mD8C6kTc/picture-profile-ic
                                on-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                              />
                            </ReplyImage>
                            <Reply>
                              <UserInformations>
                                <Username>
                                  <Text model="user">{reply.name}</Text>
                                  <Text model="username">{reply.username}</Text>
                                </Username>

                                <button
                                  type="button"
                                  onClick={() =>
                                    handleOpenReplyModal(
                                      reply.id,
                                      openRepliesReply,
                                      setOpenRepliesReply
                                    )
                                  }
                                >
                                  Reply
                                </button>
                              </UserInformations>

                              <Text model="comment">{reply.description}</Text>
                              {openRepliesReply.includes(reply.id) && (
                                <ReplyArea>
                                  <textarea
                                    value={
                                      replyRepliesFieldValue[
                                        reply.id as keyof typeof replyCommentFieldValue
                                      ]?.value
                                    }
                                    onChange={(e) =>
                                      handleSetDynamicInputValue(
                                        reply.id,
                                        e.target.value,
                                        setReplyRepliesFieldValue
                                      )
                                    }
                                    placeholder="Type your reply here!"
                                  />
                                  <button
                                    onClick={() =>
                                      handleNewReplyOnReplies(
                                        content.id,
                                        reply.id,
                                        setReplyRepliesFieldValue
                                      )
                                    }
                                    type="button"
                                  >
                                    Reply
                                  </button>
                                </ReplyArea>
                              )}
                            </Reply>
                          </div>
                        </ReplySectionContaner>
                      )
                    })}
                  </div>
                )
              })}
            </CommentInformations>
          </CommentSectionWrapper>

          <NewCommentContainer>
            <p>Add Comment</p>

            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Type your comment here!"
            />

            <PostComment>
              <p>255 characters left</p>

              <button type="button" onClick={() => handleNewComment(postData?.id)}>
                Post Comment
              </button>
            </PostComment>
          </NewCommentContainer>
        </MiddleSection>
      </CommentsWrapper>
    </CommentsContainer>
  )
}

export default SuggestionDetail

interface Params extends ParsedUrlQuery {
  id: string
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as Params

  return { props: { id } }
}
