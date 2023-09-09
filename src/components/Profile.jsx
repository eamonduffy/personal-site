import ProfilePic from "../img/profilePic.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

export const Profile = () => {
    return (
        <>
            {/* <img className="profile-pic" src={ProfilePic} alt="me" /> */}
            <Typography className="my-name" variant="h3">
                <Link to="/" className="my-name">
                    John Eamon Duffy
                </Link>
            </Typography>
            <Row>
                <div style={{ marginLeft: "auto", marginRight: "auto" }}>
                    <a
                        href="https://github.com/eamonduffy"
                        className="profile-icon"
                    >
                        <FaGithub className="icon-style-git" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/john-eamon-duffy/"
                        className="profile-icon"
                    >
                        <FaLinkedin className="icon-style-link" />
                    </a>
                    <a
                        href="https://twitter.com/eamonduffy0"
                        className="profile-icon"
                    >
                        <FaTwitter className="icon-style-twitter" />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UC5fnHBrZ5io6hJwa_UiIOLw"
                        className="profile-icon"
                    >
                        <FaYoutube className="icon-style-you" />
                    </a>
                    <Link className="profile-icon" to="/games">
                        <IoLogoGameControllerB className="icon-style-game" />
                    </Link>
                </div>
            </Row>
        </>
    );
};
