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
        //console.log(newProfile)
        //console.log(document.getElementById('name').value.split().type)
    };
  return(<>
    <div className="row">
        <div className="col-1 text-center">
        <Link to="/tuiter/profile"><button className="border-0 bg-white" type="reset" form="profile_form">X</button></Link>
        </div>
        <div className="col-4">
            <h4>Edit Profile</h4>
        </div>
        <div className="col-3">
        </div>
        <div className="col-4 float-right text-center">
          <Link to="/tuiter/profile">
            <button className="rounded-pill border-1 bg-black border-white text-white"
              form="profile_id" onClick={(e) => 
              setProfile({...profile,
                firstName: document.getElementById('name').value.split(" ")[0],
                lastName: document.getElementById('name').value.split(" ")[1],
                bio: document.getElementById('bio').value,
                location: document.getElementById('location').value,
                website: document.getElementById('website').value,
                dateOfBirth: document.getElementById('dateOfBirth').value})
            }>Save</button>
            </Link>
        </div>
    </div>
    <div className="row">
        <img src={`/images/${profile.bannerPicture}`} height={300} alt=''/>
    </div>
    <div className="row float-left">
        <div className="col-6  ps-4" >
            <img id={"profile_picture"} className="rounded-circle" width={140} height={140} src={`/images/${profile.profilePicture}`} alt=''/>
        </div>

    </div>
    <form className="list-group text-start" id="profile_form">
        <li className="list-group-item">
            Name <input id="name"
            defaultValue={`${profile.firstName} ${profile.lastName}`}/></li>
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