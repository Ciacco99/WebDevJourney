// Let's create different files for each component

import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"


// so that our new Page is the following:
function Page() {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<Page/>, document.getElementById("root"))
