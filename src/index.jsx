// Must be the first import
//import "preact/debug"

import { render } from "preact"
import "./style.css"
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material"
import { experienceData } from "./data/experienceData"
import { educationData } from "./data/educationData"
import { ItemList } from "./components/ItemList"
import { ProjectCard } from "./components/ProjectCard"
import { projectData } from "./data/projectData"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

export function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Typography variant="h1" marginBottom={2}>
          Hey, I'm Max👋
        </Typography>
        <Divider />
        <section>
          <h2>About Me</h2>
          <Grid container justifyContent="center">
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
          <Typography>
            I attend the University of Guelph for the Computer Science Co-op
            program, finishing off my 5th and last year!
          </Typography>
          <br />
          <Typography>
            I had the privelege of working at several companies demonstrating a
            variety of technical knowledge and skills. I have a good amount of
            experience with web-development; most languages and technologies
            include: JavaScript, TypeScript, React, HTML/CSS, GraphQL, SQL,
            MongoDB, Express, Node and Docker. I also have experience with
            Python, C and Java through personal projects and coding challenges.
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
        <Divider />
        <section>
          <h2>Education</h2>
          <Box width="90%" mx="auto">
            <ItemList items={educationData} />
          </Box>
        </section>
        <Divider />
        <section>
          <h2>Experience</h2>
          <Box width="90%" mx="auto">
            <ItemList items={experienceData} />
          </Box>
        </section>
        <Divider />
        <section>
          <h2>Projects</h2>
          <Grid container justifyContent="center">
            {projectData.map((item) => (
              <ProjectCard data={item} />
            ))}
          </Grid>
        </section>
      </Container>
      <Divider sx={{ marginTop: "2em" }} variant="middle" />
      <footer>
        <Typography variant="subtitle1" paddingTop={2} textAlign="center">
          © 2023 Maxim Brochin
        </Typography>
        <Typography variant="subtitle2" padding={2} textAlign="center">
          maximbrochin@gmail.com
        </Typography>
      </footer>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById("app"))
