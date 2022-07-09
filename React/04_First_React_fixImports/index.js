
import Footer from "./Footer.js"
//const Footer = require("./Footer.js");
function Header() {
  return (
    <header>

        <nav className="nav">
            <img src="./react-logo.png" className="nav-logo" />
            <ul className="nav-items">
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

function MainContent() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
          <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </div>
  )
}


// so that our new Page is the following:
function Page2() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}


//ReactDOM.render(<Page/>, document.getElementById("root"))
ReactDOM.render(<Page2/>, document.getElementById("root"))
