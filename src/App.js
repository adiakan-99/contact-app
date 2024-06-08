import Header from "./Header"
import AddContactForm from "./AddContactForm"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}></Route>
          <Route path="/add" element={<AddContactForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App