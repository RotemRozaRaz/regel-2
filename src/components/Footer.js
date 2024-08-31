import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AppFooter() {

    return (
        <footer className='bg-dark text-light py-3'>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <h5>צרו קשר</h5>
                        <p>
                            מוזמנים ליצור קשר עם מרכז התמיכה שלנו
                        </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5>פרטי התקשרות ותמיכה</h5>
                        <ul className='list-unstyled'>
                            <li><a href="mailto:info@example.com">info@example.com</a></li>
                            <li><a href="tel:+1234567890">+123 456 7890</a></li>
                            <li><a href="https://maps.app.goo.gl/zm84pwVWypExwUYW8" target="_blank">
                                המכללה למינהל ראשון לציון
                            </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}