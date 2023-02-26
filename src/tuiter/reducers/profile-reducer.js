//import profile from "../data/profile.json";

const initialState = {"firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi",
"profilePicture": "java.png", 	"bannerPicture": "js.png",
"bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. \
      Retuits and likes are not endorsements.",
"website": "youtube.com/webdevtv",
"location": "Boston, MA",	"dateOfBirth": "7/7/1968",	"dateJoined": "4/2009",
"followingCount": 340,	"followersCount": 223
}

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_PROFILE":
        return action.profile
    default:
      return state
  }
}
export default profileReducer;
