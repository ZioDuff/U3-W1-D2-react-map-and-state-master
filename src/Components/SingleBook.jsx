import { Component } from "react"
import Badge from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
//abbiamo fatto un refactor della funzione Singlebook in una classe
//passando sempre come props i valori della card
class SingleBook extends Component {
  render() {
    return (
      <Card key={this.props.key} className="h-100">
        <Card.Img
          variant="top"
          src={this.props.src}
          alt={this.props.alt}
          className="cards-image"
        />
        <Card.Body className="d-flex flex-column justify-content-between align-items-start">
          <Card.Title>{this.props.titleText}</Card.Title>
          <Card.Text className="mb-auto">{this.props.gender}</Card.Text>
          <Badge>{this.props.price}$</Badge>
        </Card.Body>
      </Card>
    )
  }
}
export default SingleBook
