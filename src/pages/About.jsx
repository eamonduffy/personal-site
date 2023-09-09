import "../App.css";
import React from "react";
import { Skills } from "../components/Skills";
import { Profile } from "../components/Profile";
// import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { Row, Container, Col } from "react-bootstrap";

export const About = () => {
    return (
        <>
            <>
                <Container>
                    <Profile />
                </Container>
                <div className="container">
                    <div className="box">
                        <div className="about-area">
                            <Container>
                                <Grid container spacing={2}>
                                    <Grid item md={12} sm={12}></Grid>
                                </Grid>
                                <div style={{ marginTop: "25px" }}>
                                    <Container>
                                        <Row>
                                            <Col md={5} sm={12}>
                                                <h4 className="section-header">
                                                    About Me
                                                </h4>
                                                <p className="secondary-text">
                                                    Hey there! I'm Eamon, a
                                                    Software Engineer based in
                                                    the New York City area. I
                                                    specialize in building
                                                    large-scale applications
                                                    with multiple microservices,
                                                    while also managing cloud
                                                    and on-premise
                                                    infrastructure.
                                                </p>
                                                <p className="secondary-text">
                                                    When it comes to my
                                                    interests, I love climbing,
                                                    both indoors and outdoors,
                                                    and I'm currently learning
                                                    Trad Climbing. I'm also
                                                    passionate about adventure
                                                    games and game development
                                                    for table top and using
                                                    Unreal Engine, where I bring
                                                    my creative visions to life
                                                    in the digital world.
                                                </p>
                                            </Col>
                                            <Col md={7} sm={12}>
                                                <Skills />
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Container>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};
