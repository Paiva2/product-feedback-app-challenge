import Suggestion from "@/components/home/Suggestion"
import React, { Fragment, useState } from "react"
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
import { PostSectionData } from "../../../../types"
import { ParsedUrlQuery } from "querystring"
import { useQuery } from "react-query"
import { useRouter } from "next/router"

const SuggestionDetail = (props: { id: string }) => {
  const {
    data: postData,
    isLoading,
    refetch: refetchData,
  } = useQuery<PostSectionData>("specificPost", getSuggestions)

  async function getSuggestions() {
    const { data } = await axios.get(`/api/posts/${props.id}`)

    return data
  }

  const route = useRouter()

  const [newComment, setNewComment] = useState("")
  const [openCommentReply, setOpenCommentReply] = useState(false)
  const [openReplyReplies, setOpenReplyReplies] = useState(false)

  const [replyValue, setReplyValue] = useState("")

  const commentCount = postData?._count.comment

  const handleNewComment = async (id: number | undefined) => {
    await axios.post("/api/new-comment", { id, comment: newComment })

    refetchData()
  }

  const handleNewReply = async () => {
    const id = props.id

    await axios.patch(`/api/posts/${id}`, { reply: replyValue })

    refetchData()
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

            <CommentInformations>
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
              {/* reply */}
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
            </CommentInformations>

            <CommentInformations>
              {postData?.comment?.map((content) => {
                return (
                  <CommentWrapper key={content.id}>
                    <CommentImage>
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
                          onClick={() => setOpenCommentReply(!openCommentReply)}
                        >
                          Reply
                        </button>
                      </UserInformations>

                      <Text model="comment">{content.description}</Text>
                      {openCommentReply && (
                        <ReplyArea>
                          <textarea
                            onChange={(e) => setReplyValue(e.target.value)}
                            placeholder="Type your reply here!"
                          />
                          <button onClick={handleNewReply} type="button">
                            Reply
                          </button>
                        </ReplyArea>
                      )}
                    </Comment>
                  </CommentWrapper>
                )
              })}
              {postData.reply.map((replies) => {
                return (
                  <ReplySectionContaner key={replies.id}>
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
                          preferences. I would love to be able to browse Frontend
                          Mentor in the evening after my devices dark mode turns on
                          without the bright background it currently has.
                        </Text>
                        <ReplyArea>
                          <textarea placeholder="Type your reply here!" />
                          <button type="button">Reply</button>
                        </ReplyArea>
                      </Reply>
                    </div>
                  </ReplySectionContaner>
                )
              })}
            </CommentInformations>
          </CommentSectionWrapper>

          <NewCommentContainer>
            <p>Add Comment</p>

            <textarea
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
