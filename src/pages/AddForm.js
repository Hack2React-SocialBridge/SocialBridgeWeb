import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import { API } from "../api/requests";

export default function AddForm() {
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);

    async function onSubmit() {
        const formData = new FormData();
        formData.append("image", image);
        formData.append("ngo", 1);
        formData.append("content", content);
        const { data } = await API.post("posts/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "image-size": "small",
            },
        });
        console.log(data);
    }

    function handleChangeField(e, callback) {
        callback(e.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.files[0]);
    }

    return (
        <div
            className="position-absolute top-50 start-50 translate-middle d-flex h-75 w-75"
            style={{ maxWidth: "1000px" }}
        >
            <Form
                className="my-auto flex-grow-1"
                onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}
            >
                <h1 className="text-center">Dodaj post</h1>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    hasValidation
                    invalid={true}
                >
                    <Form.Label>Treść</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Wprowadź treść posta"
                        value={content}
                        onChange={(e) => handleChangeField(e, setContent)}
                        invalid={true}
                    />
                    <Form.Label>Obraz</Form.Label>
                    <Form.Control
                        type="File"
                        onChange={(e) => handleImageChange(e, setImage)}
                        invalid={true}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}
