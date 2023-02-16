import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
return (
   <div className="list-group">
     <a className="list-group-item">
      <div className="d-block d-xl-none"><i className="bi bi-fonts"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-fonts"></i> Tuiter</div> </a>
     <Link to="/tuiter/home" className={`list-group-item
                    ${(active === '' || active === 'home')?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-house-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-house-fill"></i> Home</div>
     </Link>
     <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-hash"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-hash"></i> Explore</div>
     </Link>
     <Link to="/" className={`list-group-item
                    ${active === 'labs'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-wrench"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-wrench"></i> Labs</div>
     </Link>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-bell-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-bell-fill"></i> Notifications</div>
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-envelope-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-envelope-fill"></i> Messages</div>
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-bookmark-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-bookmark-fill"></i> Bookmarks</div>
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <div className="d-block d-xl-none"><i className="bi bi-list-ul"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-list-ul"></i> Lists</div>
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-person-fill"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-person-fill"></i> Profile</div>
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
        <div className="d-block d-xl-none"><i className="bi bi-three-dots"></i></div>
        <div className="d-none d-xl-block d-xxl-block"><i className="bi bi-three-dots"></i> More</div>
     </a>
   </div>
 );
};
export default NavigationSidebar;