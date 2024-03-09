import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

//create an arrow function
//In its paremter list, we need to pass a campsite prop to this component. 
// we can destructure the campsite object from the prop object's properties in ({campsite})

//Inside the return body, we can destructure the image, name, and description properties from the 
//campsite oject. 

// We'll render the CardImg with a Boolean Prompt: top, causes it to be set to true.
// we'll set a src propt equal to the javascript variable of image which we destructured from the campsite
// alt set to name alt={name}, which we also destructured on line 14. 

// CardText component with a {description} variable that we also destructed from the campsite object.
const CampsiteDetail = ({campsite}) => {
    const {image, name, description} = campsite;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );

};

export default CampsiteDetail;
