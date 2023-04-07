import { Container } from 'react-bootstrap';

function About() {
    return (
        <div className="App">
            <div className="App-header">
                <Container className="py-5">
                    <h1>About Us</h1>
                    <p>At our Medicare Website, we pride ourselves on being the leading top brand that has earned the trust of
                         our customers. Our mission is to promote the well-being of people by providing quality medical help that is 
                         available 24 hours a day, 7 days a week. We understand the importance of having reliable healthcare services, 
                         and that is why we prioritize the needs of our customers above everything else. Our team of medical experts is
                          committed to delivering the best service possible to ensure the health and safety of our patients. You can
                           contact us anytime at our helpline number or visit us at our address to experience the top-notch healthcare 
                           services we provide.</p>
                    <p>Contact Us: </p>
                    <p>Address: 1234 Main St, Rourkela, Odisha 12345</p>
                    <p>Customer Help Line: 1800 256 2424</p>
                </Container>
            </div>
        </div>
    );
}

export default About;
