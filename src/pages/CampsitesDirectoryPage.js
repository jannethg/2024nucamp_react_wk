import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";

//create a campsite Page component
const CampsitesDirectoryPage = () => {
    // temporarily setup a local variable name selectedCampsite.
    // we'll assign as its value the return value from invoking the select random campsite function 
    // that we imported, which simply be a random campsite object from our campsite's array.
    const selectedCampsite = selectRandomCampsite();

    // render a container component, creates a responsive app that adjust to different viewport sizes.    
    // inside the Col component, we'll give each of these columns two props
    // set the proportion of the row at different viewport sizes. 

    // Add CampsiteDetail to the second col, we need to pass in a Prop to tell it which campsite's
    // detail to render, which is the selectedCampsite 

    // seletedCampsite is a Javascript variable, so we need it in curley braces. 
    return (
            <Container>
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