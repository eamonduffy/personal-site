import React, { useState, useEffect } from "react";
import "../App.css";
import { Modal, Typography, Box, Button, Grid, Container } from "@mui/material";
import { Profile } from "./Profile";
import { Link, useLocation } from "react-router-dom";
import { FunFacts } from "../static/FunFacts";

export const Game = () => {
    const [isJumping, setIsJumping] = useState(false);
    const [countdown, setCountdown] = useState(3);
    const [gameStop, setGameStop] = useState(false);
    const [score, setScore] = useState(0);
    const [currentFactIndex, setCurrentFactIndex] = useState(0);
    const [allFactsDisplayed, setAllFactsDisplayed] = useState(false);

    const location = useLocation();
    let isAlive;

    // adds css class to make roo jump
    const jump = () => {
        if (!isJumping) {
            setIsJumping(true);
            setTimeout(() => {
                setIsJumping(false);
            }, 600);
        }
    };

    // Attach the keydown event handler to the document
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === " ") {
                jump();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            // Cleanup the event listener when the component unmounts
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []); // eslint-disable-line

    // Function to start the block animation
    const startBlockAnimation = () => {
        let block = document.getElementById("block");

        // Apply the animation class with the random duration
        block.style.animationDuration = `2000ms`;

        // Add the animation class to start the animation
        block.classList.add("blockAnimation");
    };

    const stopBlockAnimation = () => {
        let block = document.getElementById("block");

        // Remove the animation class to stop the animation
        block.classList.remove("blockAnimation");

        // Reset the block's position to the starting point
        block.style.left = "95%";
    };

    const handleGameOver = () => {
        stopBlockAnimation();
        setGameStop(false);
        isAlive && clearInterval(isAlive);
        handleOpen();
    };

    // game over modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        refreshGame();
    };

    const modalstyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "#4d4d4d",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
        color: "#a4a5a6",
        textAlign: "center",
    };

    // UseEffect to display random facts every 10 seconds

    // UseEffect to display random facts every 10 seconds
    useEffect(() => {
        if (countdown === 0) {
            const interval = setInterval(() => {
                setCurrentFactIndex((prevIndex) => {
                    if (prevIndex === FunFacts.length - 1) {
                        if (!allFactsDisplayed) {
                            // If it's the last fact and all facts haven't been displayed yet
                            setAllFactsDisplayed(true); // Set the flag to true
                            clearInterval(interval);
                            return;
                        }
                    } else {
                        setAllFactsDisplayed(false); // Reset the flag
                        return prevIndex + 1;
                    }
                });
            }, 10000); // 10 seconds interval

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [countdown]); // eslint-disable-line
    const currentFact = FunFacts[currentFactIndex];

    const refreshGame = () => {
        setGameStop(true);
        setCountdown(3);
        setScore(0);
        stopBlockAnimation();
        isAlive && clearInterval(isAlive);
        const countdownInterval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);

        // After 3 seconds, clear the countdown and start the block animation
        setTimeout(() => {
            clearInterval(countdownInterval);
            setGameStop(true);
            startBlockAnimation();

            // Increment the score every second
            const scoreInterval = setInterval(() => {
                setScore((prevScore) => prevScore + 1);
            }, 1000);

            isAlive = setInterval(() => {
                // check position of roo and block
                let roo = document.getElementById("roo");
                let block = document.getElementById("block");
                let rooTop;
                let blockLeft;

                if (location.pathname === "/games") {
                    rooTop = parseInt(
                        window.getComputedStyle(roo).getPropertyValue("top")
                    );
                    blockLeft = parseInt(
                        window.getComputedStyle(block).getPropertyValue("left")
                    );

                    if (blockLeft < 190 && blockLeft > 120 && rooTop >= 300) {
                        clearInterval(scoreInterval); // Stop incrementing the score
                        handleGameOver();
                    }
                }
            }, 10);
        }, 3000);

        return () => {
            clearInterval(countdownInterval);
        };
    };

    const startGame = () => {
        refreshGame();
    };

    const playAreaStyle = {
        position: "relative",
        width: "100%",
        height: "400px",
        textAlign: "center",
    };

    const cardStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "#4d4d4d",
        color: "#a4a5a6",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    };

    const funFactCardStyle = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#4d4d4d",
        color: "#a4a5a6",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
    };

    return (
        <>
            <Container>
                <Profile />
            </Container>
            <div className="container">
                <div className="box">
                    <Grid
                        container
                        columnSpacing={1}
                        sx={{ textAlign: "center" }}
                    >
                        <Grid item md={6}>
                            <p style={{ color: "white" }}>TIMER: {countdown}</p>
                        </Grid>
                        <Grid item md={6}>
                            <p style={{ color: "white" }}>SCORE: {score}</p>
                        </Grid>
                    </Grid>
                    <div style={playAreaStyle}>
                        <div
                            id="roo"
                            className={`${isJumping ? "jump" : ""}`}
                        ></div>
                        <div id="block"></div>
                        {countdown !== 0 && !gameStop && (
                            <div style={cardStyle}>
                                <Typography variant="subtitle1" sx={{ m: 1 }}>
                                    Jump as a kangaroo and uncover fun facts
                                    about Eamon.
                                </Typography>
                                <Typography variant="subtitle2" sx={{ m: 1 }}>
                                    (Press space to jump)
                                </Typography>
                                <Button variant="contained" onClick={startGame}>
                                    Start Game
                                </Button>
                            </div>
                        )}
                        {countdown === 0 && !allFactsDisplayed && (
                            <div style={funFactCardStyle}>
                                <Typography variant="subtitle1" sx={{ m: 2 }}>
                                    {currentFact}
                                </Typography>
                            </div>
                        )}
                    </div>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={modalstyle}>
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                Game Over!
                            </Typography>
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2, mb: 2 }}
                            >
                                Your Score: {score}
                            </Typography>
                            <Button variant="contained" color="secondary">
                                <Link to="/about" style={{ color: "white" }}>
                                    Go Back
                                </Link>
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ m: 1 }}
                                onClick={() => handleClose()}
                            >
                                Play Again
                            </Button>
                        </Box>
                    </Modal>
                </div>
            </div>
        </>
    );
};
