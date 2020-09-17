// import actionType constants
import * as types from "../constants/actionTypes";

// Verify user
// user parameter is object with username and password properties
export const verifyUser = (user) => {
  // type: types.VERIFY_USER,
  // payload: user,
  return (dispatch) => {
    dispatch(verifyUserStarted());
    // Fetch to verify user has account
    fetch(
      `/api/user/?username=${user.username}&password=${user.password}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => dispatch(verifyUserSuccess(data)))
      .catch((err) => dispatch(verifyUserFail(err)));
  };
};

// verifyUserStarted
export const verifyUserStarted = () => ({
  type: types.VERIFY_USER_STARTED,
});
// verifyUserSuccess => res is response from fetch
export const verifyUserSuccess = (res) => ({
  type: types.VERIFY_USER_SUCCESS,
  payload: res,
});
// Failure
export const verifyUserFail = (err) => ({
  type: types.VERIFY_USER_FAIL,
  payload: err,
});


// Add user
export const addUser = (user) => {
  return (dispatch) => {
    dispatch(addUserStarted());
    // Fetch to verify user has account
    fetch(`/api/user`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ username: user.username, password: user.password })
    })
      .then((response) => {
        console.log(response)
        return response.json();
      })
      .then((data) =>  {
        
        dispatch(addUserSuccess(data))
      })
      .catch((err) => dispatch(addUserFail(err)));
  };
};

// addUserStarted
export const addUserStarted = () => ({
  type: types.ADD_USER_STARTED,
});
// addUserSuccess => res is response from fetch
export const addUserSuccess = (res) => ({
  type: types.ADD_USER_SUCCESS,
  payload: res,
});
// Failure
export const addUserFail = (err) => ({
  type: types.ADD_USER_FAIL,
  payload: err,
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
});
