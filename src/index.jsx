import { render } from "preact"
import "./style.css"

export function App() {
  return (
    <div>
      <h1>Hey, I'm Max👋</h1>
      <hr />
      <section>
        <h2>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla
          viverra accumsan. Nunc consequat dapibus rutrum. Nulla lobortis diam
          sem, quis ullamcorper quam vehicula luctus. Vestibulum ac nisl in enim
          vulputate finibus. Donec eget justo vel risus egestas auctor. Sed
          interdum odio quis velit vulputate feugiat. Praesent lacinia dignissim
          enim, eget ultricies diam vehicula vitae. Donec hendrerit sapien
          ipsum, sit amet interdum risus auctor sit amet. Aenean tincidunt nec
          augue quis viverra. Praesent odio neque, ultricies at libero a,
          pretium rutrum dui. Morbi lobortis porta lectus. Donec luctus risus id
          urna porttitor accumsan.
        </p>
      </section>
      <hr />
      <section>
        <h2>Education</h2>
        <div>
          <p>University of Guelph</p>
        </div>
      </section>
      <hr />
      <section>
        <h2>Experience</h2>
        <div>
          <p>Job</p>
        </div>
      </section>
      <hr />
      <section>
        <h2>Projects</h2>
        <div>
          <p>Project</p>
        </div>
      </section>
      <hr />
    </div>
  )
}

render(<App />, document.getElementById("app"))
