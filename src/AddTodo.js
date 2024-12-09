import { useEffect, useState } from "react"
import { Alert, Button, Form, Spinner } from "react-bootstrap";

function AddTodo(){
    const [title,setTitle] = useState('');
    const [completed,setCompleted] = useState('');
    const [userId] = useState(1);
    const [message,setMessage] = useState('');
    const [loading,setLoading] = useState(false);

    return (
        <div className="container">
          <h2 className="mb-4">{'Add Todo'}</h2>
          <Form>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Enter title"
                required
              />
            </Form.Group>
    
            <Form.Group controlId="completed" className="mb-3">
              <Form.Check 
                type="checkbox"
                label="Completed"
                checked={completed}
                onChange={(e) => {
                  setCompleted(e.target.checked);
                }}
              />
            </Form.Group>
    
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                'Add Todo'
              )}
            </Button>
          </Form>
    
          {message && (
            <Alert variant={message.includes('success') ? 'success' : 'danger'} className="mt-3">
              {message}
            </Alert>
          )}
        </div>
      );
}

export default AddTodo()