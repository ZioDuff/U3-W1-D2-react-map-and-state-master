import { Component } from "react"
import { Col, Container, Row, Carousel, Image } from "react-bootstrap"
import fantasy from "../Data/fantasy.json"
import history from "../Data/history.json"
import horror from "../Data/horror.json"

class AllTheBooks extends Component {
  state = {
    selectedBooks: null,
  }
  render() {
    return (
      <Container className="bg-info" as={"main"}>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3  ">
          <Col>
            <Carousel>
              {fantasy.map((books) => {
                return (
                  <Carousel.Item key={`books-${books.asin}`}>
                    <Image fluid src={books.img}></Image>
                  </Carousel.Item>
                )
              })}
              .
            </Carousel>
          </Col>
          <Col>
            {" "}
            <Carousel>
              {history.map((books) => {
                return (
                  <Carousel.Item key={`books-${books.asin}`}>
                    <Image className="w-100" src={books.img}></Image>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
          <Col>
            <Carousel>
              {horror.map((books) => {
                return (
                  <Carousel.Item key={`books-${books.asin}`}>
                    <Image className="w-100" src={books.img}></Image>
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default AllTheBooks
