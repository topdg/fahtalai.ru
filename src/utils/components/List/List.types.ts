import { ElementProps, ListItem } from "../../types/types"

export interface ListProps extends ElementProps<HTMLUListElement> {
  items: ListItem
}