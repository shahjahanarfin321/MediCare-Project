import { Container, Row, Col, Button } from 'react-bootstrap';

function WelcomeScreen() {
    return (
        <div className="welcome-screen d-flex align-items-center justify-content-center">
            <Container className="text-center">
                <h1 className="mb-4">Welcome to Medi-Care</h1>
                <p className="lead mb-4">
                    Your one stop place for all your medicines.
                </p>
                <Button variant="primary">Shop Now</Button>
            </Container>
        </div>
    );
}

function AboutUs() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <h2>About Our Medicine</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                        ligula ac nisi dapibus placerat. Etiam auctor libero enim, id
                        convallis lacus mattis sit amet.
                    </p>
                    <Button variant="primary">Learn More</Button>
                </Col>
                <Col md={6}>
                    <img
                        src="https://via.placeholder.com/400x400"
                        alt="Medicine product"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    );
}


function Home() {
    return (

        <div className="App">
            <div className="App-header">
                <WelcomeScreen />
                {/* <AboutUs/> */}
            </div>
        </div>
        // <div className="landing-page">
        //     <div className="banner">
        //         <Container>
        //             <Row className="justify-content-center align-items-center">
        //                 <Col md={6} className="text-center">
        //                     <h1 className="banner-heading mb-4">
        //                         Welcome to Our Medicine Site
        //                     </h1>
        //                     <p className="banner-subheading mb-4">
        //                         We offer the best medicine products for all your needs.
        //                     </p>
        //                     <Button variant="primary">Shop Now</Button>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        //     <Container>
        //         <Row>
        //             <Col md={6}>
        //                 <h2>About Our Medicine</h2>
        //                 <p>
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
        //                     ligula ac nisi dapibus placerat. Etiam auctor libero enim, id
        //                     convallis lacus mattis sit amet.
        //                 </p>
        //                 <Button variant="primary">Learn More</Button>
        //             </Col>
        //             <Col md={6}>
        //                 <img
        //                     src="https://via.placeholder.com/400x400"
        //                     alt="Medicine product"
        //                     className="img-fluid"
        //                 />
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
    );
}
export default Home;