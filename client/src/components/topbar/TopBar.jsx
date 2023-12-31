import topbar from './topbar.css';
import { Search, Person,Chat,Notifications } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div style={topbar}>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <div>
            <span className="logo">ReactSocial</span>
          </div>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search className='searchIcon'/>
            <input placeholder="Search for friend,post or video" className='searchInput'/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">HomePage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarIconsItems">
              <Person />
              <span className="topbarItemBadge">1</span>
            </div>
            <div className="topbarIconsItems">
              <Chat />
              <span className="topbarItemBadge">2</span>
            </div>
            <div className="topbarIconsItems">
              <Notifications />
              <span className="topbarItemBadge">2</span>
            </div>
            <img alt='img' className="topbarImg" src="/assets/person/1.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
