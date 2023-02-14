import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
return (
   <div className="list-group">
     <a className="list-group-item">
      <div class="d-block d-xl-none"><i className="bi bi-fonts"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-fonts"></i> Tuiter</div> </a>
     <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>
        <div class="d-block d-xl-none"><i className="bi bi-house-fill"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-house-fill"></i> Home</div>
     </a>
     <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
        <div class="d-block d-xl-none"><i className="bi bi-hash"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-hash"></i> Explore</div>
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
        <div class="d-block d-xl-none"><i className="bi bi-bell-fill"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-bell-fill"></i> Notifications</div>
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
        <div class="d-block d-xl-none"><i className="bi bi-envelope-fill"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-envelope-fill"></i> Messages</div>
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
        <div class="d-block d-xl-none"><i className="bi bi-bookmark-fill"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-bookmark-fill"></i> Bookmarks</div>
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       <div class="d-block d-xl-none"><i className="bi bi-list-ul"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-list-ul"></i> Lists</div>
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
        <div class="d-block d-xl-none"><i className="bi bi-person-fill"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-person-fill"></i> Profile</div>
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
        <div class="d-block d-xl-none"><i className="bi bi-three-dots"></i></div>
        <div class="d-none d-xl-block d-xxl-block"><i className="bi bi-three-dots"></i> More</div>
     </a>
   </div>
 );
};
export default NavigationSidebar;