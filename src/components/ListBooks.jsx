import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

const ListBooks = () => (
  <Stack direction="horizontal" gap={3}>
    <div className="p-2">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{book.category}</Card.Subtitle>
          <Card.Title>{book.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
          <Card.Link href="#">Comments</Card.Link>
          <Card.Link href="#">Remove</Card.Link>
          <Card.Link href="#">Edit</Card.Link>
        </Card.Body>
      </Card>
    </div>
    <div className="p-2 ms-auto">
      icon
      <br />
      {book.percentage}
      <br />
      Completed
    </div>
    <div className="vr" />
    <div className="p-2">
      <Card.Body>
        <Card.Text>CHAPTER</Card.Text>
        <Card.Title>{book.chapter}</Card.Title>
        <Button variant="primary">UPDATE PROGRESS</Button>
      </Card.Body>
    </div>
  </Stack>
);

export default ListBooks;
