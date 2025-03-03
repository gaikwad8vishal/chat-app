
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SignIn } from "./Pages/signIn"
import { SignUp } from "./Pages/signUp"
import { Dashboard } from "./Pages/Dashboard"
import { Desktop } from "./desktop/Desktop"
import { Errorr } from "./Errorr/Errorr"
import { Card } from "./desktop/card"



function App() {
    
  return <BrowserRouter>
            <Routes>
              <Route path='/SignUp' element={<SignUp/>} />
              <Route path='/SignIn' element={<SignIn/>} />
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/desktop' element={<Desktop/>}/>
              <Route path='/card' element={<Card/>}/>
              <Route path='/*' element={<Errorr/>}/>


            </Routes>
        </BrowserRouter>

}
        
export default App