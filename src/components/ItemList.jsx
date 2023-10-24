import { List } from "@mui/material"
import { Item } from "./Item"
import { useMemo } from "preact/hooks"

export const ItemList = ({ items }) => {
  const len = useMemo(() => items.length - 1, [items])

  return (
    <List>
      {items.map((item, i) =>
        i == len ? <Item data={item} last /> : <Item data={item} />
      )}
    </List>
  )
}
