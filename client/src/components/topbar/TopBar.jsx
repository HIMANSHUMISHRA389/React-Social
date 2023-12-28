import topbar from './topbar.css';
import { Search, Person,Chat,Notifications } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div style={topbar}>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <span className="logo">ReactSocial</span>
        </div>
        <div className="topbarCentre">
          <div className="topbarCenter">
            <div className="searchBar">
              <Search />
              <input className="Search for friend,post or video"/>
            </div>
          </div>
        </div>
        <div className="topbarRight">
          <div className="tobarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink">Contact</span>
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
            <img src="/assets/person/1.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
