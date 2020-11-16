import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = ({ copyright, qs }) => (
    <Container>
        <Row>
            <Col>
                <p>&copy; {copyright}</p>
            </Col>
            <Col className="text-right">
                <p><em>{qs.length} questionnaires found</em></p>
            </Col>
        </Row>
    </Container>
)

export default Footer
