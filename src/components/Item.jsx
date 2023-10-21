import {
  Avatar,
  Collapse,
  Link,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  Unstable_Grid2 as Grid,
  Divider,
  List,
  ListItem,
} from "@mui/material"
import { useState } from "preact/hooks"

export function Item({ data, last = false }) {
  const [open, setOpen] = useState(false)
  const { title, subtitle, dateRange, imgsrc, points } = data

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItemButton onClick={handleClick} alignItems="flex-start">
        <Grid container padding={1}>
          {imgsrc && (
            <Grid>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  alt={imgsrc}
                  src={imgsrc}
                  sx={{ width: 50, height: 50 }}
                />
              </ListItemAvatar>
            </Grid>
          )}
          <Grid>
            <ListItemText
              primary={title}
              secondary={
                <Typography variant="subtitle2">{subtitle}</Typography>
              }
            />
          </Grid>
        </Grid>
        <ListItemText
          primary={dateRange}
          primaryTypographyProps={{ textAlign: "end" }}
        />
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ listStyleType: "disc", pl: 4, ml: 4 }}
        >
          {points?.map((point) => (
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText
                primary={<Typography variant="subtitle2">{point}</Typography>}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
      {!last && <Divider variant="middle" />}
    </>
  )
}
