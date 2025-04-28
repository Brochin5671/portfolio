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
import InstagramIcon from "@mui/icons-material/Instagram"

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
          <IconButton
            href="https://www.instagram.com/astroprime0/"
            target="_blank"
            aria-label="Instagram astrophotography account link"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Typography>
        I am a Computer Science Honours graduate from the University of Guelph!
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
        My favorite hobby is Astrophotography🪐. After seeing Saturn in my
        eyepiece, I wanted to share the experience with others by photo. Below are
        images taken with my 8" telescope and a dedicated astrocam. Really
        amazing what great sights reside in the night-sky!
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
              A 41-minute rotation of Jupiter with the Great Red Spot on
              September 23rd, 2023. A day on Jupiter lasts about 10 hours.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "1em" }}>
          <CardMedia
            component="img"
            alt="Saturn and its moons"
            loading="lazy"
            image="/assets/about/saturn_moons.jpg"
            width="250"
            height="250"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Saturn and Moons
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A composite image of Saturn with its moons Titan, Tethys, Dione
              and Rhea (left to right). Taken on August 31st, 2023.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, margin: "1em" }}>
          <CardMedia
            component="img"
            alt="Trapezium Star Cluster"
            loading="lazy"
            image="/assets/about/trapezium_cluster.jpg"
            width="250"
            height="250"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Trapezium Cluster
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A star cluster located within Orion's Nebula hosting more than a
              thousand young stars, four light-years in diameter.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <br />
    </section>
  )
}
