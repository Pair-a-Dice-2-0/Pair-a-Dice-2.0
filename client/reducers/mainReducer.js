import * as types from '../constants/actionTypes';

// userSessions:[{session: {1 session}, mainuser:{}, partner:{}},...] 

// Refactor initialState with default properties instead of hard-coded
const initialState = {
  currentUser: {
    _id: 5,
    username: 'usertest',
    sessioncount: 10
  },
  currentPartner: {
    _id: 4,
    partnername: 'partnertest1',
    sessioncount: 2
  }
  // currentUser: {},
  // currentPartner: {},
};

// const initialState = {
//   session: [{
//     session_id: null,
//     partnerA_id: null,
//     partnerB_id: null,
//     partnerA: true,
//     partnerB: false,
//   }],
//   mainUser: [{
//     username: "ronnie",
//     language: "Javascript",
//     level: "Hard",
//     status: true,
//     sessionCount: 777,
//   }],
//   partner: [{
//     username: "sam",
//     language: "Javascript",
//     level: "Hard",
//     status: true,
//   }],
// };

const mainReducer = (state = initialState, action) => {

  switch (action.type) {

    // Verify User
    case types.VERIFY_USER: 
      console.log('action.payload', action.payload)
      let user = {
        id: null,
        username: null,
        sessioncount: null,
      };

      //{body: {username: action.payload.username, password: action.payload.password}}

      //Fetch request not functional
      fetch(`http://localhost:8080/api/user/?username=${action.payload.username}&password=${action.payload.password}`)
        .then(response => {
          return response.json();
        }).then(data => {
          // console.log('data:', data)
          user.id = data._id;
          user.username = data.username;
          user.sessioncount = data.sessioncount;
          console.log('User: ', user);
          return {
            ...state,
            currentUser: {
              ...state.currentUser,
              _id: user.id,
              username: user.username,
              sessioncount: user.sessioncount
            }
          };
        })
        .catch(err => console.log(err));
      break;


    // Add User
    case types.ADD_USER: 
    /*
      let user = {
        username: action.payload.username,
        password: action.payload.username,
      };

      //{body: {username: action.payload.username, password: action.payload.password}}

      //Fetch request not functional
      fetch(`http://localhost:8080/api/user/?username=${action.payload.username}&password=${action.payload.password}`, {
        method: 'POST',
        headers: { "Content-Type": "Application/JSON" },
        body: JSON.stringify(user)
      })
        .then(response => {
          return response.json();
        }).then(data => {
          // console.log('data:', data)
          user.id = data._id;
          user.username = data.username;
          user.sessioncount = data.sessioncount;
          console.log('User: ', user);
          return {
            ...state,
            currentUser: {
              ...state.currentUser,
              _id: user.id,
              username: user.username,
              sessioncount: user.sessioncount
            }
          };
        })
        .catch(err => console.log(err));
      break;
    */

    // LevelLanguage

    // Find Partner
    // eslint-disable-next-line no-fallthrough
    case types.FIND_PARTNER:
      console.log("state before find partner", { ...state })
      let partner;

      // fetch request to get a partner
      fetch('http://localhost:8080/api/partner/?language=Javascript&skill=Easy&_id=5')  // fetch('/api/partner' + '/' + 'Javascript' + '&' + 'skill' 
        .then(response => {
          return response.json();
        })
        .then(data => {
          partner = data;
          console.log("state after find partner", { ...state, currentPartner: partner })
        })
        .catch(err => console.log(err))

      // return updated state
      return {
        ...state,
        currentPartner: partner
      };




    case types.DUMMY:

      console.log('DUMMY STATE', state)

    // Increment Session

    // Pair Again

    default:
      return state;

  }


}








export default mainReducer;