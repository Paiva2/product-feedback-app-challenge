import Suggestion from "@/components/home/Suggestion"
import React, { useContext, useState } from "react"
import {
  Comment,
  CommentImage,
  CommentInformations,
  CommentQuantity,
  CommentSectionWrapper,
  CommentsContainer,
  CommentsWrapper,
  Header,
  MiddleSection,
  NewCommentContainer,
  PostComment,
  Text,
  UserInformations,
  Username,
} from "./styles"
import { CaretLeft } from "phosphor-react"
import Link from "next/link"
import Image from "next/image"
import { GetServerSideProps } from "next"
import axios from "axios"
import { DataSchema, IContext } from "../../../../types"
import { ParsedUrlQuery } from "querystring"
import { GlobalContext } from "@/context/globalContext"
import { useRouter } from "next/router"

interface PostSectionData extends DataSchema {
  _count: { comment: number }
  comment: [
    {
      id: string
      iconImage: string
      name: string
      username: string
      description: string
      postsId: number
      createdAt: string
    }
  ]
}

const SuggestionDetail = (props: PostSectionData) => {
  const [newComment, setNewComment] = useState("")
  const commentCount = props._count.comment

  const route = useRouter()

  const refreshData = () => route.replace(route.asPath)

  const handleNewComment = async (id: number) => {
    await axios.post("/api/new-comment", { id, comment: newComment })

    refreshData()
  }

  return (
    <CommentsContainer>
      <CommentsWrapper>
        <Header>
          <div>
            <CaretLeft size={15} color="#4661E6" weight="bold" />
            <Link href="/">Go Back</Link>
          </div>
          <div>
            <button>Edit Feedback</button>
          </div>
        </Header>

        <Suggestion data={props} />

        <MiddleSection>
          <CommentSectionWrapper>
            <CommentQuantity>
              {commentCount} Comment{commentCount > 1 && "s"}
            </CommentQuantity>

            <CommentInformations>
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

                  <button>Reply</button>
                </UserInformations>

                <Text model="comment">
                  Also, please allow styles to be applied based on system
                  preferences. I would love to be able to browse Frontend Mentor in
                  the evening after my devices dark mode turns on without the bright
                  background it currently has.
                </Text>
              </Comment>
            </CommentInformations>

            {props.comment.map((content) => {
              return (
                <CommentInformations key={content.id}>
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

                      <button>Reply</button>
                    </UserInformations>

                    <Text model="comment">{content.description}</Text>
                  </Comment>
                </CommentInformations>
              )
            })}
          </CommentSectionWrapper>

          <NewCommentContainer>
            <p>Add Comment</p>

            <textarea
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Type your comment here!"
            />

            <PostComment>
              <p>255 characters left</p>

              <button type="button" onClick={() => handleNewComment(props.id)}>
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

  const { data } = await axios.post("http://localhost:3000/api/posts", {
    id: Number(id),
  })

  return { props: data }
}
