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
} from "@mui/material"
import { useState } from "preact/hooks"

export function Item({ data, last = false }) {
  const [open, setOpen] = useState(false)
  const { title, subtitle, dateRange, imgsrc } = data

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <>
      <ListItemButton onClick={handleClick} alignItems="flex-start">
        <Grid container>
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
        <Link href="https://brochin5671.github.io">Link</Link>
      </Collapse>
      {!last && <Divider variant="middle" />}
    </>
  )
}
