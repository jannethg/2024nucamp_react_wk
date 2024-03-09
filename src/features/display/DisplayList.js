import { Col, Row } from "reactstrap";
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
    //set up an array named items and store two items.
    //first item is returned form invoking the selectFeaturedCampsite function
    //second item will be the promotion object from invoking the selectFeaturedPromotion function.
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];

    return (
        <Row>
            {items.map((item, idx) => {
                return (
                    <Col md className="m-1" key={idx}>
                        <DisplayCard item={item} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default DisplayList;