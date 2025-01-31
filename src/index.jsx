// Must be the first import
//import "preact/debug"

import { render } from 'preact'
import './style.css'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { experienceData } from './data/experienceData'
import { educationData } from './data/educationData'
import { ItemList } from './components/ItemList'
import { ProjectCard } from './components/ProjectCard'
import { projectData } from './data/projectData'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { AboutSection } from './components/AboutSection'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
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
        <AboutSection />
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
      <Divider sx={{ marginTop: '2em' }} variant="middle" />
      <footer>
        <Typography variant="subtitle1" paddingTop={2} textAlign="center">
          © 2025 Maxim Brochin
        </Typography>
        <Typography variant="subtitle2" padding={2} textAlign="center">
          maximbrochin@gmail.com
        </Typography>
      </footer>
    </ThemeProvider>
  )
}

render(<App />, document.getElementById('app'))
