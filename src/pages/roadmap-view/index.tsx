import React, { Fragment, useContext, useState } from "react"
import {
  ColumnsWrapper,
  GoBackWrapper,
  MenuButtonWrapper,
  MobileSubmenu,
  NewfeedbackButtonWrapper,
  RoadmapContainer,
  RoadmapWrapper,
  SubmenuWrapper,
  Topbar,
  TopbarWrapper,
} from "./styles"
import { CaretLeft } from "phosphor-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { GlobalContext } from "@/context/globalContext"
import { useIsMobile } from "../../../hooks/useIsMobile"
import RoadmapViewColumns from "@/components/RoadmapViewColumns"

const RoadmapView = () => {
  const { suggestionsData, isLoading, filterGenerator } = useContext(GlobalContext)
  const [menuMobileCategory, setMenuMobileCategory] = useState("Planned")

  const route = useRouter()

  const isMobile = useIsMobile()

  const columns = [
    {
      id: 1,
      columnTitle: "Planned",
      description: "Ideas prioritized for research",
      status: filterGenerator("Planned", suggestionsData, "status"),
      color: "f49f85",
    },
    {
      id: 2,
      columnTitle: "In-Progress",
      description: "Currently being developed",
      status: filterGenerator("In-Progress", suggestionsData, "status"),
      color: "ad1fea",
    },
    {
      id: 3,
      columnTitle: "Live ",
      description: "Released features",
      status: filterGenerator("Live", suggestionsData, "status"),
      color: "62bcfa",
    },
  ]

  if (isLoading) return <></>

  return (
    <RoadmapContainer>
      <RoadmapWrapper>
        <Topbar>
          <TopbarWrapper>
            <GoBackWrapper>
              <span>
                <CaretLeft size={15} weight="bold" />
                <Link href="/">Go back</Link>
              </span>
              <p>Roadmap</p>
            </GoBackWrapper>

            <NewfeedbackButtonWrapper>
              <button onClick={() => route.push("/new-feedback")}>
                + Add Feedback
              </button>
            </NewfeedbackButtonWrapper>
          </TopbarWrapper>
        </Topbar>
        <MobileSubmenu>
          <SubmenuWrapper>
            {columns.map((menu) => {
              return (
                <MenuButtonWrapper
                  css={{
                    "--identification": `#${menu.color}`,
                  }}
                  className={
                    menuMobileCategory === menu.columnTitle ? "active" : "inactive"
                  }
                  key={menu.id}
                >
                  <button onClick={() => setMenuMobileCategory(menu.columnTitle)}>
                    {menu.columnTitle}
                  </button>
                </MenuButtonWrapper>
              )
            })}
          </SubmenuWrapper>
        </MobileSubmenu>
        <ColumnsWrapper>
          {columns.map((column) => {
            return (
              <Fragment key={column.id}>
                {isMobile && column.columnTitle === menuMobileCategory && (
                  <RoadmapViewColumns column={column} />
                )}

                {!isMobile && <RoadmapViewColumns column={column} />}
              </Fragment>
            )
          })}
        </ColumnsWrapper>
      </RoadmapWrapper>
    </RoadmapContainer>
  )
}

export default RoadmapView
