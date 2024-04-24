import { Button, ButtonGroup, Col, Container, Form, Row } from "react-bootstrap"
import fantasy from "../Data/fantasy.json"
import horror from "../Data/horror.json"
import scifi from "../Data/scifi.json"
import history from "../Data/history.json"
import romance from "../Data/romance.json"
import SingleBook from "./SingleBook"
import { Component } from "react"
//refactor della funzione in classe
class BookList extends Component {
  state = {
    selectedJson: fantasy,
    searchValue: "",
  }

  render() {
    const filteredBooks = this.state.selectedJson.filter((book) => {
      return book.title
        .toLocaleLowerCase()
        .includes(this.state.searchValue.toLowerCase())
    })
    return (
      <Container>
        <Form.Label htmlFor="inputPassword5">
          <h4>Cerca il tuo libro</h4>
        </Form.Label>
        <Form.Control
          type="text"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          className="mb-3"
          onChange={(e) => this.setState({ searchValue: e.target.value })}
          value={this.state.searchValue}
        />
        {/* <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, special characters, or emoji.
        </Form.Text> */}
        <div className="d-flex justify-content-between align-items-center">
          <ButtonGroup aria-label="Basic example" className="my-3">
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: fantasy })
              }}
            >
              Fantasy
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: history })
              }}
            >
              History
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: horror })
              }}
            >
              Horror
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: romance })
              }}
            >
              Romance
            </Button>
            <Button
              variant="outline-secondary"
              onClick={(e) => {
                this.setState({ selectedJson: scifi })
              }}
            >
              Scifi
            </Button>
          </ButtonGroup>
        </div>
        <Row xs={1} sm={2} md={3} lg={4}>
          {filteredBooks.map((book) => {
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
}
export default BookList
