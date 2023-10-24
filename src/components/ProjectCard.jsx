import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkIcon from "@mui/icons-material/Link"

export const ProjectCard = ({ data }) => {
  const {
    name,
    desc,
    srcLink,
    link,
    imgsrc = "/assets/previews/missing.jpg",
  } = data

  return (
    <Grid>
      <Card sx={{ maxWidth: 345, margin: "1em" }}>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          loading="lazy"
          image={imgsrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          {srcLink && (
            <IconButton
              href={srcLink}
              target="_blank"
              aria-label="Source code link"
            >
              <GitHubIcon />
            </IconButton>
          )}
          {link && (
            <IconButton href={link} target="_blank" aria-label="Website link">
              <LinkIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}
