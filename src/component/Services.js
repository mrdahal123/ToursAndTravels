import {Card, Row, Col } from "react-bootstrap";
import Icon from "./icon";
import Title from "./Cardtitle.js";
import Carddes from "./Carddiscription";
function Services(){

    let props = {
        data : {
            name : "MotorBike services",
            description : "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat labore et dolore magna aliquyam erat.",
            icon : 'fa-solid fa-bed',
            color: "orange"
        }
    }

    return (
        <>
            <Col xs={12} md={4} lg={4}>
                <Card border="white shadow-lg text-center mt-5">
                    <div className="icosize shadow-lg">
                        <Icon icon={props.data.icon}></Icon></div>
                        <Card.Body className="inner-section-padding">
                        <Title title={props.data.name}></Title>
                        <Card.Text className="mt-3">
                        <Carddes carddes={props.data.description}></Carddes>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            
        </>
    )
}
export default Services;