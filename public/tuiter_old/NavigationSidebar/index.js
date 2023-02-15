const NavigationSidebar = (active) => {
    //active is a string denoting which page is currently active

    const activeness = (active) => {
        if (active==="home"){
        return(`<a href="#" class="list-group-item list-group-item-action active">
              <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
              <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
          <a href="../explore/index.html" class="list-group-item list-group-item-action">
              <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
              <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
          <a href="../notifications.html" class="list-group-item list-group-item-action">
              <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
              <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
          <a href="../messages.html" class="list-group-item list-group-item-action">
              <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
              <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
          <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
              <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
              <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
          <a href="../list.html" class="list-group-item list-group-item-action">
              <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
              <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
          <a href="../profile.html" class="list-group-item list-group-item-action">
              <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
              <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
          <a href="../more.html" class="list-group-item list-group-item-action">
            <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
            <i class="fas fa-circle" style="color:white"></i></div>
            <div class="d-none d-xl-block d-xxl-block">
            <i class="fas fa-circle" style="color:white"></i> More</div></a>`)
        }
        else if (active==="explore"){
            return(`
              <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
              <a href="#" class="list-group-item list-group-item-action active">
                  <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
              <a href="../notifications.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
              <a href="../messages.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
              <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
              <a href="../list.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
              <a href="../profile.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
              <a href="../more.html" class="list-group-item list-group-item-action">
                <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                <i class="fas fa-circle" style="color:white"></i></div>
                <div class="d-none d-xl-block d-xxl-block">
                <i class="fas fa-circle" style="color:white"></i> More</div></a>
            `);
            }
            else if (active==="notifications"){
                return(`
                  <div class="list-group float-left">
                    <a class="list-group-item">
                      <i class="fa"> T </i>
                  </a>
                  <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
                  <a href="../explore/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
                  <a href="#" class="list-group-item list-group-item-action active">
                      <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
                  <a href="../messages.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
                  <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
                  <a href="../list.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
                  <a href="../profile.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
                  <a href="../more.html" class="list-group-item list-group-item-action">
                    <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                    <i class="fas fa-circle" style="color:white"></i></div>
                    <div class="d-none d-xl-block d-xxl-block">
                    <i class="fas fa-circle" style="color:white"></i> More</div></a>
                `);
            }
            else if (active==="messages"){
                return(`
                  <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
                  <a href="../explore/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
                  <a href="../notifications.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
                  <a href="#" class="list-group-item list-group-item-action active">
                      <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
                  <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
                  <a href="../list.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
                  <a href="../profile.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
                  <a href="../more.html" class="list-group-item list-group-item-action">
                    <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                    <i class="fas fa-circle" style="color:white"></i></div>
                    <div class="d-none d-xl-block d-xxl-block">
                    <i class="fas fa-circle" style="color:white"></i> More</div></a>
                `);
            }
            else if (active==="bookmarks"){
                return(`
                  <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
                  <a href="explore/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
                  <a href="../notifications.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
                  <a href="../messages.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
                  <a href="#" class="list-group-item list-group-item-action active">
                      <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
                  <a href="../list.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
                  <a href="../profile.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
                  <a href="../more.html" class="list-group-item list-group-item-action">
                    <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                    <i class="fas fa-circle" style="color:white"></i></div>
                    <div class="d-none d-xl-block d-xxl-block">
                    <i class="fas fa-circle" style="color:white"></i> More</div></a>
                `);
            }
            else if (active==="lists"){
                return(`
                  <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
                  <a href="explore/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
                  <a href="../notifications.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
                  <a href="../messages.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
                  <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
                  <a href="#" class="list-group-item list-group-item-action active">
                      <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
                  <a href="../profile.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
                  <a href="../more.html" class="list-group-item list-group-item-action">
                    <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                    <i class="fas fa-circle" style="color:white"></i></div>
                    <div class="d-none d-xl-block d-xxl-block">
                    <i class="fas fa-circle" style="color:white"></i> More</div></a>
                `);
            }
            else if (active==="profile"){
                return(`
                  <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
                  <a href="explore/index.html" class="list-group-item list-group-item-action active">
                      <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
                  <a href="../notifications.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
                  <a href="../messages.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
                  <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
                  <a href="../list.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
                  <a href="#" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
                  <a href="../more.html" class="list-group-item list-group-item-action">
                    <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                    <i class="fas fa-circle" style="color:white"></i></div>
                    <div class="d-none d-xl-block d-xxl-block">
                    <i class="fas fa-circle" style="color:white"></i> More</div></a>
                `);
            }
            else if (active==="more"){
                return(`
                  <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
                  <a href="explore/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
                  <a href="../notifications.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
                  <a href="../messages.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
                  <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
                  <a href="../list.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
                  <a href="../profile.html" class="list-group-item list-group-item-action">
                      <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                      <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
                  <a href="#" class="list-group-item list-group-item-action active">
                    <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                    <i class="fas fa-circle" style="color:white"></i></div>
                    <div class="d-none d-xl-block d-xxl-block">
                    <i class="fas fa-circle" style="color:white"></i> More</div></a>
                `);
            }
            else{
                return(`
              <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-home"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-home"></i> Home</div>
              <a href="../explore/index.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-hashtag"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-hashtag"></i> Explore</div></a>
              <a href="../notifications.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-bell"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bell"></i> Notifications</div></a>
              <a href="../messages.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-envelope"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-envelope"></i> Messages</div></a>
              <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-bookmark"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-bookmark"></i> Bookmarks</div></a>
              <a href="../list.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-list"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-list"></i> Lists</div></a>
              <a href="../profile.html" class="list-group-item list-group-item-action">
                  <div class="d-block d-xl-none"><i class="fas fa-user"></i></div>
                  <div class="d-none d-xl-block d-xxl-block"><i class="fas fa-user"></i> Profile</div></a>
              <a href="../more.html" class="list-group-item list-group-item-action">
                <div class="d-block d-xl-none"><span class="wd-fa-stack fa-xs">
                <i class="fas fa-circle" style="color:white"></i></div>
                <div class="d-none d-xl-block d-xxl-block">
                <i class="fas fa-circle" style="color:white"></i> More</div></a>
            `);
            }

}

    return (`
    <div class="list-group float-left">
        <a class="list-group-item">
          <i class="fa"> T </i>
      </a>
      ${activeness(active)}
      <div class="d-grid mt-2">
        <a href="../tuit.html"
           class="btn btn-primary btn-block rounded-pill">
           Tuit</a>
      </div>
      `)
}
export default NavigationSidebar;