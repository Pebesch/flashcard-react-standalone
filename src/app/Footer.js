import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = ({ copyright }) => (
    <Container>
        <Row>
            <Col>
                <p>&copy; {copyright}</p>
            </Col>
        </Row>
    </Container>
)

export default Footer
