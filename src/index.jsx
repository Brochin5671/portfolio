// Must be the first import
//import "preact/debug"

import { render } from "preact"
import "./style.css"
import { Box, Container, Divider, Grid, Typography } from "@mui/material"
import { experienceData } from "./data/experienceData"
import { educationData } from "./data/educationData"
import { ItemList } from "./components/ItemList"
import { ProjectCard } from "./components/ProjectCard"
import { projectData } from "./data/projectData"

export function App() {
  return (
    <>
      <Container>
        <h1>Hey, I'm Max👋</h1>
        <Divider />
        <section>
          <h2>About Me</h2>
          <Typography>
            I attend the University of Guelph for the Computer Science Co-op
            program, finishing off my 5th and last year!
          </Typography>
          <br />
          <Typography>
            I have a good amount of experience with web-development, languages
            and technologies include: JavaScript, TypeScript, React, HTML/CSS,
            GraphQL, SQL, MongoDB, Express, Node and Docker. I also have
            experience with Python, C and Java through personal projects and
            coding challenges.
          </Typography>
          <br />
          <Typography>
            My favorite hobby is Astrophotography, really beautiful what sights
            reside in the night-sky!
          </Typography>
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
        <Typography variant="subtitle2" padding={2} textAlign="center">
          © 2023 Maxim Brochin
        </Typography>
      </footer>
      <Divider sx={{ marginBottom: "2em" }} variant="middle" />
    </>
  )
}

render(<App />, document.getElementById("app"))
