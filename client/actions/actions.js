// import actionType constants
import * as types from '../constants/actionTypes'


// add more action creators --> { username: , password: }
export const verifyUser = (user) => ({
  type: types.VERIFY_USER,
  payload: user,
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