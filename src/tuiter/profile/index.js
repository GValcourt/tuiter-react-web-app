import React from "react";
import {Link} from "react-router-dom";
import {useSelector}
  from "react-redux";
import "./index.css"

function ProfileComponent() {
    //console.log(useSelector(state => state.profile))
  const profile = useSelector(
    state => state.profile);
  return(<>
    <h4>Profile</h4>
    <div className="row position-relative">
      <img src={`/images/${profile.bannerPicture}`} height={300} alt=''/>
    </div>
    <div className="row align-items-center position-relative wd-position-up-60px">
      <div className="col-4  ps-4">
        <img id={"profile_picture"} className="rounded-circle " width={140} height={140} src={`/images/${profile.profilePicture}`} alt='' />
      </div>
      <div className="col-4">
      </div>
      <div className="col-4 float-right mt-4">
      <Link to="/tuiter/edit-profile"><button className="rounded-pill border-1 border-secondary bg-white"><b>Edit Profile</b></button></Link>
      </div>
    </div>
    <div className="row">
      <h3 className="p-0 m-0 fw-bold">{profile.firstName} {profile.lastName}</h3>
      <p className="p-0 text-secondary">{profile.handle}</p>
    </div>
    <div className="row">
      {profile.bio}
    </div>
    <div className="row text-secondary">
      <div className="col-4">
        <i className="bi bi-geo-alt"></i> {profile.location}
      </div>
      <div className="col-4">
        <i className="bi bi-balloon"></i> Born {profile.dateOfBirth}
      </div>
      <div className="col-4">
      <i className="bi bi-calendar3"></i> Joined {profile.dateJoined}
      </div>
    </div>
    <div className="row text-secondary">
        <p><b>{profile.followingCount}</b> Following&#8195;<b>{profile.followersCount}</b> Followers</p>
    </div>
    </>
  );
};
export default ProfileComponent;
