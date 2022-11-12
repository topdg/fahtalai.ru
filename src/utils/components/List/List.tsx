import React, { FC } from "react"
import { ListProps } from "./List.types"
import { cls } from "../../utils"

export const List : FC<ListProps> = ( {className = '', items, attributes} ) => {
  
  return (
    <ul className={cls(`list`, className)} {...attributes}>
      {
        items.map((el, i) => <li key={i}  className="list__item" dangerouslySetInnerHTML={ { __html: el } } />)
      }
    </ul>
  )
}