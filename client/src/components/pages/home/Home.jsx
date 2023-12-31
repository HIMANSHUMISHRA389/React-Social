import React from 'react'
import TopBar from '../../topbar/TopBar.jsx'
import Sidebar from '../../sidebar/Sidebar.jsx'
import Feed from '../../feed/Feed.jsx'
import Rightbar from '../../rightbar/Rightbar.jsx'
import './home.css'

const Home = () => {
  return (
    <div>
        <TopBar/>
        <div className='homeContainer'>
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </div>
  )
}

export default Home