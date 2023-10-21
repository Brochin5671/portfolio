import science_fetcher_preview from "../assets/previews/science_fetcher_preview.png"
import statusfer_preview from "../assets/previews/statusfer_preview.png"
import escape_fractal_viewer_preview from "../assets/previews/escape_fractal_viewer_preview.png"

export const projectData = [
  {
    name: "Statusfer",
    desc: "A real-time short-form blogging CRUD web-app that uses socket.io. User data encryption done with bcrypt and stored in a MongoDB collection.",
    imgsrc: statusfer_preview,
    srcLink: "https://github.com/Brochin5671/statusfer",
    link: "https://statusfer.fly.dev",
  },
  {
    name: "GPX File Viewer",
    desc: "A CRUD web-app that displays parsed XML files as GPS trail data, leveraging C FFI for parsing and storing data in a MySQL database.",
    imgsrc: null,
  },
  {
    name: "Science Fetcher",
    desc: "Site that uses a web-scraper to fetch the latest science articles from Google News to aggregate specific articles in one place.",
    imgsrc: science_fetcher_preview,
    srcLink: "https://github.com/Brochin5671/science-fetcher",
    link: "https://science-fetcher.fly.dev",
  },
  {
    name: "Escape Fractal Viewer",
    desc: "View escape fractals such as the Mandelbrot Set, Burning Ship fractal, Tricorn Set and the Multibrot Set along with respective Julia Sets.",
    imgsrc: escape_fractal_viewer_preview,
    srcLink: "https://github.com/Brochin5671/math-beauty",
    link: "https://escape-fractal-viewer.fly.dev/",
  },
  {
    name: "Blobbed",
    desc: "Grade 10 Computer Science final project using Python2 and Pygame. Avoid enemies and reach the portals to fight the final boss.",
    imgsrc: null,
    srcLink: "https://github.com/Brochin5671/blobbed-game",
  },
  {
    name: "Civilization Simulator",
    desc: "Grade 12 Computer Science final project that demonstrates OOP concepts as a Point & Click game. Using a genetic algorithm to evolve your civilization, you play as the humans who must go against monsters' and aliens' genes to survive.",
    imgsrc: null,
    srcLink: "https://github.com/Brochin5671/CivilizationSimulator",
  },
]
