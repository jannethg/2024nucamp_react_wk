//import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";

const CampsitesList = ({setCampsiteId}) => {
    //setup a variable named campsites to the return value of our selector
    const campsites = selectAllCampsites();
    return (
        <Row className="ms-auto">{campsites.map((campsite) => {  //use the campsite array lowercase. 
             return (
                            <Col 
                            md='5' 
                            className='m-4' 
                            key={campsite.id}
                            onClick={() => setCampsiteId(campsite.id)}
                            >

                            <CampsiteCard campsite={campsite} />
                            </Col>
                        );
        })};
        </Row>
    );
}

export default CampsitesList;