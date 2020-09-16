// import actionType constants
import * as types from '../constants/actionTypes'


// user parameter is object with username and password properties
export const verifyUser = (user) => {
  // type: types.VERIFY_USER,
  // payload: user,
  return dispatch => {
    dispatch(verifyUserStarted());
    // Fetch to verify user has account
    fetch(`http://localhost:8080/api/user/?username=${user.username}&password=${user.password}`)
        .then(response => {
          return response.json();
        })
        .then(data => dispatch(verifyUserSuccess(data)))
        .catch(err => dispatch(verifyUserFail(err)));
  }
};

// verifyUserStarted
export const verifyUserStarted = () => ({
  type: types.VERIFY_USER_STARTED
});
// verifyUserSuccess => res is response from fetch 
export const verifyUserSuccess = (res) => ({
  type: types.VERIFY_USER_SUCCESS,
  payload: res
});
// Failure
export const verifyUserFail = (err) => ({
  type: types.VERIFY_USER_FAIL,
  payload: err
});

export const addUser = (newUser) => ({
  type: types.ADD_USER,
  payload: newUser,
});

//payload here is an object with three props
export const updateLanguageLevelStatus = (languageLevelStatus) => ({
  type: types.UPDATE_LANGUAGELEVELSTATUS,
  payload: languageLevelStatus,
});

export const findPartner = (user) => ({
  type: types.FIND_PARTNER,
  payload: user,
});

export const incrementSessionCount = () => ({
    type: types.INCREMENT_SESSTIONCOUNT,
    // payload: null,
  });

export const dummy = () => ({
  type: types.DUMMY,
})