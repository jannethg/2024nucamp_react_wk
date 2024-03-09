import { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from "../features/campsites/CampsitesList";
import { selectRandomCampsite } from "../features/campsites/campsitesSlice";


const CampsitesDirectoryPage = () => {
  //Add a call to useState, we know that useState will return an array and that we'll use an array Destructuring on that array
  //Destructure the local state value as selectedCampsite, along with a function to update that state toggleCampsite
  //we can set the return value from UseState and as we're invoking useState, we want to pass to it as an argument as
  //the initial value for the selected campsite will be the selectRandomCampsite function.

  //the value of the seletedCampsite is an entire campsite object. 

//   when a button is clicked, we want to update the selectedCampsite with the new random campsite object
//   the toggleCampsite we're using here as the onclick event handler, is now defined by react,
//   and passed back to use from our call to useState

// this function needs us to give a value, by passing the return value from another call to selectRandonCampsite

// so selectRandomCampsite will pull a random campsite
  const [selectedCampsite, toggleCampsite] = useState(selectRandomCampsite());

    return (
            <Container>
                <Button onClick={() => toggleCampsite(selectRandomCampsite())}>
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