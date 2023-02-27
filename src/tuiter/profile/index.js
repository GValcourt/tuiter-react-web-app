import React from "react";
import {useSelector}
  from "react-redux";

function ProfileComponent() {
    //console.log(useSelector(state => state.profile))
  const profile = useSelector(
    state => state.profile);
  return(<>
    <h4>Profile</h4>
    <div className="row">
      <img src={`/images/${profile.bannerPicture}`} height={300}/>
    </div>
    <div className="row align-items-center">
      <div className="col-4">
        <img className="rounded-circle" width={"100%"} src={`/images/${profile.profilePicture}`} />
      </div>
      <div className="col-4">
      </div>
      <div className="col-4 float-right text-center">
        <button>Edit Profile</button>
      </div>
    </div>
    <div className="row">
      {profile.firstName} {profile.lastName}
      <br/>
      {profile.handle}
    </div>
    <div className="row">
      {profile.bio}
    </div>
    <div className="row">
      <div className="col-4">
        {profile.location}
      </div>
      <div className="col-4">
        {profile.dateOfBirth}
      </div>
      <div className="col-4">
        Joined {profile.dateJoined}
      </div>
    </div>
    <div className="row">
        {profile.followingCount} Following {profile.followersCount} Followers
    </div>
    </>
  );
};
export default ProfileComponent;
