import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";


const CampsitesDirectoryPage = () => {
    let selectedCampsite = selectRandomCampsite();
 
    // add a button to do something when clicked
    // create a function call ToggleCampsite and its going to be an arrow function 
    // we'll set selectedCampsite to the return value of selectRandom campsite. 
    // we'll also need to change the initial declaration from a const to a let 
    // because otherwise we won't be able to change it.

    // now in the button we can pass in a prop of onClick and set that equal to some Javascript: toggleCampsite
    // inside the curley braces, we'll write an arrow function
    // then inside we write an arrow function that returns an invocation of the click Handler toggleCampsite.

    // what we're expecting is when a userclicks on this button, this click handler function will run.
    // the selected campsite variable will be updated and logged to the console.


    const toggleCampsite = () => {
        selectedCampsite = selectRandomCampsite();
        console.log(selectedCampsite);
    } 

    return (
            <Container>
                <Button onClick={() => toggleCampsite()}>
                    Select Random Campsite
                </Button>
                <Row>                    
                    <Col sm='5' md='7'>
                    <CampsitesList />
                    </Col>
                    <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite}  />
                    </Col>
                </Row>
            </Container>
    );

};

export default CampsitesDirectoryPage;