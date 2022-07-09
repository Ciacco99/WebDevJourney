// Let's re-write by myself while following

// Components: functions that return react elements
//
// They must be named in Pascal-case, that is, like camelCase but with
// initial letter in Upper Case.
//
// Also, in ReactDOM.render we add it as a custom html (jsx) element: <Page/>
function Page() {
  return (
    <div>
      <header>
          <nav>
              <img src="./react-logo.png" width="40px" />
          </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
          <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
      <footer>
          <small>© 2022 Jacopo development. All rights reserved.</small>
      </footer>
    </div>
  )
}

// Now, we should divide page into components:

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

function Footer() {
  return (
    <footer>
        <small>© 2022 Jacopo development. All rights reserved.</small>
    </footer>
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
