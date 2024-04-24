import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MyNavBar from "./Components/MyNavBar"
import MyFooter from "./Components/MyFooter"
import Welcome from "./Components/Welcome"
import AllTheBooksFunction from "./Components/AllTheBooksFunction"
// import AllTheBooks from "./Components/AllTheBooks"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavBar />
        <Welcome />
        {/* <AllTheBooks /> */}
        <AllTheBooksFunction />
        <MyFooter />
      </header>
    </div>
  )
}

export default App
