import { Button } from "@chakra-ui/react"
import { Route ,Routes} from "react-router-dom"
import Homepg from "../pages/homepg"
import Chatpg from "../pages/chatpg"
import "./App.css"
function App() {

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepg></Homepg>}></Route>
      <Route path="/chat" element={<Chatpg></Chatpg>}></Route>
      
      </Routes>
      {/* <Button colorScheme='blue'>Button</Button> */}
    </div>
  )
}

export default App
