import { formatDate } from "../../utils/formatDate";

// we're going to destructure a prop named comment out from the props object in the parameter list.
// then a arrow to signify an arrow function.

// we will destructure out some properties: text, ratings, author, date from the comment object. 

// we'll setup a return statement and in it, we'll render a <p> element, inside the p element 
// we'll render the content of the text variable, followe by a <br> element to line break
// followed by the content of the rating variable which should be an integer between 1 and 5 and this
// should follow a /5 stars -- then the content of the author variable
// then we'll call the formatDate function, passing the comment's date as its argument.

// when we destructure out the properties from an object like we did in the parameter list and we
// desturee the text, rating author and date, we can optionally specify a different variable name to use

// for example we can assign the value from the text property such as commentText

const Comment = ({ comment }) => {
    const { text: commentText , rating, author, date } = comment;

    return (
        <p>
            {commentText}
            <br />
            {rating}/5 stars -- {author}, {formatDate(date)}
        </p>
    );
};

export default Comment;