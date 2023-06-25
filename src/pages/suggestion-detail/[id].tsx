import Suggestion from "@/components/home/Suggestion"
import React from "react"
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
  NewCommentWrapper,
  PostComment,
  Text,
  UserInformations,
  Username,
} from "./styles"
import { CaretLeft } from "phosphor-react"
import Link from "next/link"
import Image from "next/image"

const mockData = {
  id: "aaaa",
  title: "Teste",
  category: "UX",
  description: "AAAAAAAAAAAAAAAAAAA",
  upVotes: 2,
}

const SuggestionDetail = () => {
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

        <Suggestion data={mockData} />

        <MiddleSection>
          <CommentSectionWrapper>
            <CommentQuantity>4 Comments</CommentQuantity>
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
          </CommentSectionWrapper>

          <NewCommentContainer>
            <p>Add Comment</p>

            <textarea placeholder="Type your comment here!" />

            <PostComment>
              <p>255 characters left</p>

              <button>Post Comment</button>
            </PostComment>
          </NewCommentContainer>
        </MiddleSection>
      </CommentsWrapper>
    </CommentsContainer>
  )
}

export default SuggestionDetail
