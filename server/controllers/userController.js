const express = require('express');
const userController = {};
const db = require('../models/userModel.js');

//Adding a new user upon registration
userController.addUser = (req, res, next) => {
  const { username, password } = req.body;
  //Insert query text, adds new user to database
  const queryText = `INSERT INTO users (username, password, skill, language, status, sessioncount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
  //Parameters used for our query
  const queryParams = [username, password, 'Easy', 'JavaScript', 'NotReady', 0]
  //execute query
  db.query(queryText, queryParams)
    .then((result) => {
      
       res.locals.user = result.rows[0];
      //  console.log(`res.locals.user `, res.locals.user)
       return next();
      })
  //error catch
    .catch((err) => {
        return next({
          log: 'Error in addUser middleware function',
          message: { err },
          });
       });
    
}

//Adding middleware to get login information
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.query;
  // console.log('username: ', username);
  // console.log('password: ', password);
  const queryText = `SELECT _id, username, sessioncount FROM users WHERE username = $1 AND password = $2`
  const queryParams = [username, password];

  db.query(queryText, queryParams)
    .then((result) => {
      if (result.rows.length === 0) {
        res.send('User does not exist. Try again!')
        return next();
      } else {
        res.locals.user = (result.rows[0]);
        res.status(200).json(res.locals.user)
        return next();
      }
    })
    .catch((err) => {
      next({
        log: 'Error in verifyUser middleware function',
        message: { err },
      });
    });
}

//Updates skill level and language.
userController.addSkillLanguage = (req, res, next) => {
  const { skill, language, _id } = req.body;
   //update query, we should set skill and language at default so we don't need separate requests
  const queryText = `UPDATE users SET skill = $1, language = $2 WHERE _id = $3`
  //Parameters for query
   const queryParams = [req.query.skill, req.query.language, req.query._id]
  //Execute query
   db.query(queryText, queryParams)
     .then((result) => {
        return next();
      }) 
      //error handling
     .catch((err) => {
       next({
         log: 'Error in addSkillLanguage middleware function',
         message: { err },
       });
      });
  next();
}

//Need to add new query
userController.findPartner = (req, res, next) => {
  const { language, skill, _id } = req.body;
   const queryText = 
    `SELECT _id, username, sessioncount FROM users WHERE language = $1 AND skill = $2 AND status = 'Ready' AND _id != $3
    EXCEPT
    SELECT partnerb_id, partnera_feedback, partnerb_id  FROM sessions WHERE (partnera_id = $3 AND partnera_feedback = 'No') OR (partnera_id = $3 AND partnerb_feedback = 'No')
    EXCEPT
    SELECT partnera_id, partnera_feedback, partnera_id  FROM sessions WHERE (partnerb_id = $3 AND partnerb_feedback = 'No') OR (partnerb_id = $3 AND partnera_feedback = 'No')
    ORDER BY _id`
   
   const queryParams = [req.query.language, req.query.skill, req.query._id]
     db.query(queryText, queryParams)
      .then((result) => {
        res.locals.partner = res.json(result.rows[0]);
       // console.log(res.locals.partner);
        return next();
      }) 
      .catch((err) => {
        next({
          log: 'Error in findPartner middleware function',
          message: { err },
        });
       });
   next();
    // next();
}   

//set status ready
userController.statusReady = (req, res, next) => {
  const { _id } = req.body;
   const queryText = `UPDATE users SET status = 'Ready' WHERE _id = $1`
   const queryParams = [req.query._id]
     db.query(queryText, queryParams)
      .then((result) => {
        res.locals.status = result.rows[0].status
        return next();
      }) 
      .catch((err) => {
        next({
          log: 'Error in statusReady middleware function',
          message: { err },
        });
       });
   next();
}   

//set status not ready
userController.statusNotReady = (req, res, next) => {
  const { _id } = req.body;
   const queryText = `UPDATE users SET status = 'NotReady' WHERE _id = $1`
   const queryParams = [req.query._id]
     db.query(queryText, queryParams)
      .then((result) => {
        res.locals.status = result.rows[0].status
        return next();
      }) 
      .catch((err) => {
        next({
          log: 'Error in statusNotReady middleware function',
          message: { err },
        });
       });
   next();
}  

//Middleware runs after session has ended and user enters feedback.
userController.sessionFeedback = (req, res, next) => {
//update session table with partner feedback
  const { partnera_id, partnerb_id, partnera_feedback, partnerb_xfeedback } = req.body;
  const queryText = `INSERT INTO sessions (partnera_id, partnerb_id, partnera_feedback, partnerb_feedback) VALUES ($1, $2, $3, $4) RETURNING *`
  const queryParams = [req.query.partnera_id, req.query.partnerb_id, req.query.partnera_feedback, req.query.partnerb_feedback,]
  db.query(queryText, queryParams)
    .then((result) => {
      res.locals.feedback = result.rows[0];
    })
    .catch((err) => {
      next({
        log: 'Error in sessionFeedback middleware function',
        message: { err },
      });
     });
 next();
}

//Number of sessions each user participates in increases by one.
userController.incrementSessionCount = (req, res, next) => {
  //session_count
  const { id } = req.body;
  //update query to increment session by 1
  const queryText = `UPDATE users SET sessioncount = sessioncount + 1 WHERE _id = $1`
  //Parameters for query, still assigning to const even though we only have one variable, may need to add later.
  const queryParams = [req.query._id]
  //Execute query
  db.query(queryText, queryParams)
     .then((result) => {
         return next();
      })
      .catch((err) => {
        next({
           log: 'Error in incrementSessionCount middleware',
           message: { err },
         });
       });
  next();
}



module.exports = userController;