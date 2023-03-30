import { Container, Button } from 'react-bootstrap';

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


function Home() {
    return (

        <div className="App">
            <div className="App-header">
                <WelcomeScreen />
                {/* <AboutUs/> */}
            </div>
        </div>
    );
}
export default Home;