import { Col, Container, Row } from "react-bootstrap"
// import fantasy from "../Data/fantasy.json"
import SingleBook from "./SingleBook"

const BookList = (props) => {
  return (
    <Container>
      <Row xs={1} sm={2} md={3} lg={4}>
        {props.books.map((book) => {
          //   console.log(book)
          console.log(SingleBook)
          return (
            <Col className="mb-2">
              <SingleBook
                key={book.asin}
                src={book.img}
                alt={book.title}
                titleText={book.title}
                gender={book.category}
                price={book.price}
              />
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
export default BookList
