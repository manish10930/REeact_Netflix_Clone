// import { List } from "@mui/material"
import Featured from "../component/featured/Featured"
import NavBar from "../component/NavBar"
import List from "../component/List/List"
import "./Home.css"


function Home({type}) {
  return (
   <>
     <div  className='Home'>

       <NavBar />
       <Featured type={type}/>
       <List/>
       <List/>
       <List/>
       <List/>
       
 

     </div>
     

   </>
  )
}

export default Home