import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export const AboutSection = () => {
  return (
    <section>
      <h2>About Me</h2>
      <Grid container alignItems="flex-end">
        <Grid>
          <Card sx={{ maxWidth: 250, margin: "1em", marginBottom: "2em" }}>
            <CardMedia
              component="img"
              alt="Picture of Max"
              loading="lazy"
              image="/assets/about/me.jpg"
              height="100%"
            />
          </Card>
        </Grid>
        <Grid marginBottom={3} marginLeft={1}>
          <IconButton
            href="https://github.com/brochin5671"
            target="_blank"
            aria-label="GitHub account link"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/maxim-brochin"
            target="_blank"
            aria-label="LinkedIn account link"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Typography>
        I attend the University of Guelph for the Computer Science Co-op
        program, finishing off my 5th and last year!
      </Typography>
      <br />
      <Typography>
        I had the privelege of working at several companies demonstrating a
        variety of technical knowledge and skills. I have a good amount of
        experience with web-development; most languages and technologies
        include: JavaScript, TypeScript, React, HTML/CSS, GraphQL, SQL, MongoDB,
        Express, Node and Docker. I also have experience with Python, C and Java
        through personal projects and coding challenges.
      </Typography>
      <br />
      <Typography>
        My favorite hobby is Astrophotography, really beautiful what sights
        reside in the night-sky!
      </Typography>
      <Grid container justifyContent="center">
        <Card sx={{ maxWidth: 250, margin: "1em" }}>
          <CardMedia
            component="img"
            alt="Jupiter rotating"
            loading="lazy"
            image="/assets/about/jupiter.gif"
            width="250"
            height="250"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Jupiter Rotation
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Captured with my 8" SCT and dedicated astrocam, rotation takes
              place over 41 minutes.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <br />
    </section>
  )
}
