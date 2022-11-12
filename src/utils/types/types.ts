import React, { PropsWithChildren} from "react"

export interface ElementProps<Tag> extends PropsWithChildren {
  attributes?: React.HTMLAttributes<Tag>
  className?: string
}

export type ListItem = string[]

export interface ItemIconWithText {
  icon: string
  text: string
}

export interface ItemIconWithTextAndTitle extends ItemIconWithText{
  title: string
}