import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from "react";

const images = [
    require("../img/gallery/image1.png"),
    require("../img/gallery/image2.png"),
    require("../img/gallery/image3.png"),
    require("../img/gallery/image4.png"),
    require("../img/gallery/image5.png"),
    require("../img/gallery/image6.png"),
    require("../img/gallery/image7.png"),
    require("../img/gallery/image8.png"),
    require("../img/gallery/image9.png"),
];

// all images are cropped to be square and then compressed using compresspng.com
export const Gallery = () => {
    const imageRows = [];

    for (let i = 0; i < images.length; i += 3) {
        const imageRow = images.slice(i, i + 3);

        imageRows.push(
            <Row key={i}>
                {imageRow.map((image, index) => (
                    <Col key={index} sm={4}>
                        <img id="myImg" className="gallery-img" src={image} />
                        <div id="myModal" className="modal">
                            <span className="close">&times;</span>
                            <img class="modal-content" id="img01" />
                            <div id="caption"></div>
                        </div>
                    </Col>
                ))}
            </Row>
        );
    }

    return (
        <>
            <Container className="App">
                <h2>Gallery</h2>
                <p style={{ marginBottom: "40px", color: "#a4a5a6" }}>
                    A few photos of friends, family and special moments all
                    captured from my phone.
                </p>
                {imageRows}
            </Container>
        </>
    );
};
