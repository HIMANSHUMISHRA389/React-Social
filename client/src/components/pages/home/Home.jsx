import home from './home.css'
import { Search,Person } from "@mui/icons-material";


const Home=()=> {
  return <div style={home}>
    <div className='topbar'>
      <Search/>
      <Person/>
      <h1>This is Home Page.</h1>
    </div>
  </div>;
}

export default Home