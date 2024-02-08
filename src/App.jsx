import 'bootstrap/dist/css/bootstrap.min.css'
import Topbar from "./Topbar"
import Middlebar from './Middlebar'
import Datascience from './Datascience'
import Allimg from './Allimg'
import Datascienceimg from './Datascienceimg'
import Fullstackimg from './Fullstackimg'
import Cyberimg from './Cyberimg'
import Careerimg from './Careerimg'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Fullstack from './Fullstack'
import Fullstackcard from './Fullstackcard'
import All from './All'
import Cyber from './Cyber'
import Career from './Career'

function App() {
  return (
    <>
      <Topbar/>
      <Allimg/>
        <BrowserRouter>
        <Middlebar/>
           <Routes>
              <Route index element={<All/>}/>
              <Route path="fullstack" element={<Fullstack/>}/>
              <Route path="datascience" element={<Datascience/>}/>
              <Route path="cyber" element={<Cyber/>}/>
              <Route path="career" element={<Career/>}/>
          </Routes>
         
         </BrowserRouter>
        
            
    </>
  );
}
export default App
