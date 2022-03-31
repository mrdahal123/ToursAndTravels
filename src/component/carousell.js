import { Carousel, Card, Row, Col, Button } from "react-bootstrap";
function Carousell(props) {
    console.log(props);
    return (
        <>
            <Carousel controls-false>
                {props.CarouselVariables.map((item, index) => {
                    return(
                    <Carousel.Item key={index}>
                        <Row>
                        {item.map(child => {
                             return(
                                <Col  key={index} xs={12} md={4}>
                                    <Card style={{ width: '' }}>
                                        <div className="size">
                                            <Card.Img variant="top" src={child.img} />
                                        </div>
                                        <Card.Body>
                                            <Card.Title>{child.title}</Card.Title>
                                            <Card.Text>
                                                {child.text}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                             )
                            })}
                            </Row>
                    </Carousel.Item>
                    );
                })}
            </Carousel>
        </>
    )
}
export default Carousell;