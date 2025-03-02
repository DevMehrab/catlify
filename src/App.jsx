import { Display } from "./components/Display";
import { Form } from "./components/Form";
import { GenerateBtn } from "./components/GenerateBtn";
import { Nav } from "./components/Nav";


function App() {
  return(
  <div className="container">
      <Nav />
      <GenerateBtn />
      <Display/>
      <Form />
    <center>Made by <b>Mehrab Hossain</b></center>
  </div>)
}

export default App
