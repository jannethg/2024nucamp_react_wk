//we use the slice files as a way to organize the logic, dealing with different sections of our application state
//the comments slice file will deal with comments data

//import the COMMENT data for the comments array

// we'll export const for a function name selectCommentsbyCampsiteId
// this function will take a parameter of campsideId, this is the id that we want to match
// then in its body, we'll return a new array COMMENTS which we'll get from filtering the entire comments array
// for only the comments with the campsiteID property, that matches the campsite Id that was passed in as an argument.
// we'll make sure to convert the campsiteID to an integer parseInt(campsiteId), since we passed it as a string. 
//notice that we use filter, not find because we want to return an array of comments, not just the first comment

import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsideId) => {
        return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsideId) )
};