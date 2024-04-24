import Badge from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const SingleBook = (props) => {
  return (
    <Card key={props.key} className="h-100">
      <Card.Img
        variant="top"
        src={props.src}
        alt={props.alt}
        className="cards-image"
      />
      <Card.Body className="d-flex flex-column justify-content-between align-items-start">
        <Card.Title>{props.titleText}</Card.Title>
        <Card.Text className="mb-auto">{props.gender}</Card.Text>
        <Badge bg="info">{props.price}$</Badge>
      </Card.Body>
    </Card>
  )
}
export default SingleBook
