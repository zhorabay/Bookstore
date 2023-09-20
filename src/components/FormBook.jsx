import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormBook() {
  return (
    <Form>
      <Row className="align-items-center">
        <Col xs="auto">
          <Form.Label htmlFor="inlineFormInput" visuallyHidden>
            Book title
          </Form.Label>
          <Form.Control
            className="mb-2"
            id="inlineFormInput"
            placeholder="Book title"
          />
        </Col>
        <Col xs="auto">
          <Form.Select>
            <option>Category</option>
            <option value="Roman">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Economy">Economy</option>
            <option value="Sci-Fi">Science Fiction</option>
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            ADD BOOK
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormBook;
