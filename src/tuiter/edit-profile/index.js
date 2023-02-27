import React from "react";
import {useSelector, useDispatch}
  from "react-redux";


function EditProfileComponent() {
    //console.log(useSelector(state => state.profile))
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();
    const setProfile = (newProfile) => {
        console.log(profile)
        dispatch({
          type: 'UPDATE_PROFILE',
          profile: newProfile
        })
    };
  return(<>
    <div className="row">
        <div className="col-1 text-center">
            <button>X</button>
        </div>
        <div className="col-4">
            <h4>Edit Profile</h4>
        </div>
        <div className="col-3">
        </div>
        <div className="col-4 float-right text-center">
            <button>Save</button>
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
    <ul className="list-group">
        <li className="list-group-item">
            First Name: <input onChange={(e) => 
          setProfile({...profile,
            firstName: e.target.value})}
            defaultValue={profile.firstName}/></li>
        <li className="list-group-item">
            Last Name: <input onChange={(e) => 
          setProfile({...profile,
            lastName: e.target.value})}
            defaultValue={profile.lastName}/></li>
        <li className="list-group-item">
            Bio: <textarea onChange={(e) => 
          setProfile({...profile,
            password: e.target.value})}
          defaultValue={profile.bio}
          cols={50} rows={5}
          readOnly={false}/></li>
        <li className="list-group-item">
            Location: <input onChange={(e) =>
          setProfile({...profile,
            first: e.target.value})}
            defaultValue={profile.location}/></li>
        <li className="list-group-item">
            Website: <input onChange={(e) => 
          setProfile({...profile,
            last: e.target.value})}
            defaultValue={profile.website}/></li>
        <li className="list-group-item">
            Date of Birth: <input onChange={(e) => 
          setProfile({...profile,
            last: e.target.value})}
            defaultValue={profile.dateOfBirth}/></li>
      </ul>
    </>
  );
};
export default EditProfileComponent;