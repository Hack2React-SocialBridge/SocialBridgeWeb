import { useState } from "react";
import { Form, Button, Alert, Container, FormGroup } from "react-bootstrap";

import { API } from "../api/requests";

export default function AddForm() {
  const [result, setResult] = useState("success");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  async function onSubmit() {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("ngo", 7);
    formData.append("content", content);
    try {
      const { data } = await API.post("posts/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "image-size": "small",
        },
      });
      console.log(data);
      setResult("success")
    } catch (error) {
      setResult("error");
    }
  }

  function handleChangeField(e, callback) {
    callback(e.target.value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  return (
    <Container
      className='position-absolute top-50 start-50 translate-middle d-flex h-75 w-75'
      style={{ maxWidth: "1000px" }}
    >
      <Form
        className='my-auto flex-grow-1'
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <h1 className='text-center'>Dodaj post</h1>
        <Form.Group
          className='mb-3'
          controlId='formBasicEmail'
          hasValidation
          invalid={true}
        >
          <Form.Label>Treść</Form.Label>
          <textarea
            rows={8}
            placeholder='Wprowadź treść posta'
            className='form-control'
            value={content}
            onChange={(e) => handleChangeField(e, setContent)}
            invalid={true}
          />
          <Form.Label>Obraz</Form.Label>
          <Form.Control
            type='File'
            onChange={(e) => handleImageChange(e, setImage)}
            invalid={true}
          />
        </Form.Group>
        <FormGroup className='d-flex justify-content-center'>
          <Button variant='primary' type='submit' className='w-50'>
            Dodaj
          </Button>
        </FormGroup>
        <div style={{marginTop: 20}}>
        {result === "pending" ? null : result === "success" ? (
          <Alert variant='success' onClose={() => setResult("pending")} dismissible>Pomyślnie wysłano post</Alert>
        ) : (
          <Alert variant='danger' onClose={() => setResult("pending")} dismissible>Wystąpił błąd</Alert>
        )}
        </div>
        
      </Form>
    </Container>
  );
}
