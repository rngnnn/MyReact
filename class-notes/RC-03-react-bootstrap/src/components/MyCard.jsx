import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";

//! react alanında döngü olarak sadece map desteklenir,condition lardan da sadece ternary desteklenir 

const MyCard = ({veri}) => {

    console.log(veri);
    //!alttaki ilk return react ın ekrana bastırılan kısmı

  return (
    <Container>
<Row>
{veri.map((a)=>{
    //!arrow (map) süslü kullandığında return ister.reactta süslü koymayabilirsiniz, o zaman returne de ihtiyaç olmaz

return (
  <Col>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={a.img} />
      <Card.Body>
        <Card.Title>{a.name}</Card.Title>
        <Card.Text>
       
       {a.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
);


})}



</Row>

    </Container>
  )
}

export default MyCard