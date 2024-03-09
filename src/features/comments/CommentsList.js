import { Col } from "reactstrap";
import Comment from "./Comment";
import { selectCommentsByCampsiteId } from "./commentsSlice";

// we'll setup a component named commentsList, and we'll plan to pass the {campsiteId} for this list of comments in 
// as a Prop, which we'll destructure in the parameter list

// in the comment body, we're going to select an array of comments, 
// with campsite id property that matches the one that was passed into this component
// by passing that campsiteId to the selectCommentsbyCampsiteId selector function/
// its going to be possible that a campsite doesn't have any comments associate with it 
// so we'll use concept call conditional rendering to render different things based on certain conditions. 


// there are different ways that we an implement conditional rendering. the way we use here is 
// the conditonal if statement
// we'll write an if statement that checks for the truthiness f two expressions
// first simply the comments variable, to make sure that it isn't undefined or null or falsey value
// then we'll use an And operator to check if the value of comments.lenght > 0 .
// in other words we want to check a valid, not empty comments

// in the body of the if statements, we know that we have a comments array that has at least one item.
// so we can render a list of comment components based on that array.
// we'll do that by returnin a Col component, we'll set to use 5 out of 12 columns for medium viewports
// inside a Col component we'll render an H4
// we'll setup a pair of curly braces, so that we can use a Javascript inside jsx and inside
// inside the curly braces, we'll call the map method on the comments array 
// for each comment object in the comments array, we'll return a comment component
// since we are creating alist fo component dynamically here, 
// we'll give react a key using the comments.id which should be unique
// we'll also pass the entire comment object itself as a prop to the comment component
// so thatn it can use each object's properties such as the author and rating to render each comment

// below this we'll handle the case for if the comments variable contain a falsey value such as undefined or if its an empty array
// in other words, if our IF condition is evaluated as false. - we'll return a Col component
// we'll contain a text, there are not comments at this time




const CommentsList = ({ campsiteId }) => {
    const comments = selectCommentsByCampsiteId(campsiteId)

    if(comments && comments.length > 0) {
            return (
                <Col md='5' className="m-1">
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        return <Comment key={comment.id} comment={comment}/>
                    })}
                </Col>
            )
    }
    return (
        <Col md='5' className="m-1">
            There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;
