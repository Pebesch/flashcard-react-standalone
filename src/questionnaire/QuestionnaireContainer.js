import React from 'react'
import { Container } from 'reactstrap'
import QuestionnaireTable from './QuestionnaireTable'

const QuestionnaireContainer = ({ qs }) => (
    <Container>
        <h2>{qs.length} Questionnaires found</h2>
        <QuestionnaireTable qs = {qs} />
    </Container>
)

export default QuestionnaireContainer
