import { Outlet } from "react-router-dom";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export const Layout = () => {
    return (
        <>
            <Container>
                <Navbar style={{ height: "100px" }}>
                    {/* <Navbar.Brand as={Link} to="/about">
                        <img src={RooGif} className="nav-icon" />
                        <span style={{ color: "white" }}>Roo</span>
                    </Navbar.Brand>

                    <Nav className="ml-auto">
                        <Nav.Link
                            style={{ color: "white" }}
                            className="nav-link"
                            as={Link}
                            to="/about"
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            style={{ color: "white" }}
                            className="nav-link"
                            as={Link}
                            to="/gallery"
                        >
                            Gallery
                        </Nav.Link>
                    </Nav> */}
                </Navbar>
            </Container>

            {/* <hr /> */}

            <Outlet />
        </>
    );
};
