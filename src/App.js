import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import "./App.css";

import AddForm from "./pages/AddForm";

function LogoSvg() {
    return (
        <svg
            width="100"
            height="57"
            viewBox="0 0 100 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M68.9976 50.6471C65.868 49.9473 63.07 49.098 61.0115 48.369C62.0669 46.4571 63.5955 43.9645 65.4713 41.3634C69.5327 35.7315 74.6565 30.3898 79.6298 28.5006C85.8059 26.1547 92.7144 29.2596 95.0603 35.4357C97.4063 41.6118 94.3014 48.5203 88.1253 50.8662C83.1519 52.7553 75.7739 52.1624 68.9976 50.6471ZM20.2696 28.5006C25.243 30.3897 30.3667 35.7315 34.4282 41.3634C36.3039 43.9645 37.8325 46.4571 38.8879 48.369C36.8294 49.098 34.0314 49.9473 30.9018 50.6471C24.1255 52.1623 16.7475 52.7553 11.7741 50.8662C5.59805 48.5203 2.49312 41.6118 4.83907 35.4357C7.18503 29.2596 14.0935 26.1547 20.2696 28.5006ZM50.0374 40.4776C48.6249 38.8121 46.8374 36.498 45.0719 33.8209C41.2492 28.0242 38.075 21.3376 38.075 16.0175C38.075 9.41091 43.4308 4.05518 50.0374 4.05518C56.644 4.05518 61.9997 9.41091 61.9997 16.0175C61.9997 21.3376 58.8255 28.0242 55.0028 33.8209C53.2373 36.498 51.4499 38.8121 50.0374 40.4776Z"
                stroke="#212124"
                strokeWidth="8.11035"
            />
        </svg>
    );
}

function App() {
    return <AddForm />;
}

export default App;
