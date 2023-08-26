import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TeacherCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body >
        <Card.Title> {props.title}</Card.Title>
        <Card.Text>
          <div>
          Course Code: {props.code}
          </div>
          <div>
          Credits: {props.credits}
          </div>
        </Card.Text>
        <Button variant="outline-primary" style={{width:'10rem', marginLeft:'0rem', color:'black', backgroundColor:'whitesmoke'}}>Drop Course</Button>
      </Card.Body>
    </Card>
  );
}

export default TeacherCard;