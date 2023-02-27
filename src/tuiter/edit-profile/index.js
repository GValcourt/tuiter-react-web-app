import React from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch}
  from "react-redux";


function EditProfileComponent() {
    //console.log(useSelector(state => state.profile))
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const setProfile = (newProfile) => {
        dispatch({
          type: 'UPDATE_PROFILE',
          profile: newProfile
        })
        console.log(newProfile)
    };
  return(<>
    <div className="row">
        <div className="col-1 text-center">
        <Link to="/tuiter/profile"><button type="reset" form="profile_form">X</button></Link>
        </div>
        <div className="col-4">
            <h4>Edit Profile</h4>
        </div>
        <div className="col-3">
        </div>
        <div className="col-4 float-right text-center">
          <Link to="/tuiter/profile">
            <button form="profile_id" onClick={
              (e) => 
              setProfile({...profile,
                firstName: document.getElementById('firstName').value,
                lastName: document.getElementById('lastName').value,
                bio: document.getElementById('bio').value,
                location: document.getElementById('location').value,
                website: document.getElementById('website').value,
                dateOfBirth: document.getElementById('dateOfBirth').value})
            }>Save</button>
            </Link>
        </div>
    </div>
    <div className="row">
      <img src={`/images/${profile.bannerPicture}`} height={300}/>
    </div>
    <div className="row float-left">
        <div className="col-6">
            <img className="rounded-circle" width={"100%"} src={`/images/${profile.profilePicture}`} />
        </div>

    </div>
    <form className="list-group" id="profile_form">
        <li className="list-group-item">
            First Name: <input id="firstName"
            defaultValue={profile.firstName}/></li>
        <li className="list-group-item">
            Last Name: <input id="lastName"
            defaultValue={profile.lastName}/></li>
        <li className="list-group-item">
            Bio: <textarea id="bio"
          defaultValue={profile.bio}
          cols={50} rows={5}
          readOnly={false}/></li>
        <li className="list-group-item">
            Location: <input id="location"
            defaultValue={profile.location}/></li>
        <li className="list-group-item">
            Website: <input id="website"
            defaultValue={profile.website}/></li>
        <li className="list-group-item">
            Date of Birth: <input id="dateOfBirth"
            defaultValue={profile.dateOfBirth}/></li>
      </form>
    </>
  );
};
export default EditProfileComponent;