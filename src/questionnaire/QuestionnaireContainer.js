import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import QuestionnaireTable from './QuestionnaireTable'

const QuestionnaireContainer = (props) => {
  const [qs, setQuestionnaires] = useState(props.qs)
  console.log(qs)

  const getNextId = () => {
    const currentNumberOfQs = qs.length
    return currentNumberOfQs + 1
  }

  const onCreate = (questionnaire) => {
    const newQ = { id: getNextId(), ...questionnaire }
    setQuestionnaires(qs.concat([newQ]))
  }

  const onUpdate = (questionnaire) => {
    // if the current iteration has the smae id, set the updated item, else leave it be
    setQuestionnaires(qs.map((q) => q.id === questionnaire.questionnaire.id ? questionnaire.questionnaire : q))
  }

  const onDelete = (questionnaire) => setQuestionnaires(qs.filter(q => q.id !== questionnaire.id))

  return (
    <Container>
    <Row>
      <Col>
        <h2>{qs.length} Questionnaires</h2>
      </Col>
      <Col>
        <QuestionnaireCreateDialog onCreate={onCreate}/>
      </Col>
    </Row>
      <QuestionnaireTable qs = {qs} onUpdate={onUpdate} onDelete={onDelete} />
  </Container>
  )
}

export default QuestionnaireContainer

QuestionnaireContainer.defaultProps = {
  qs: [
    { id: 1, title: 'Test Title 1', description: 'Test Description 1' },
    { id: 2, title: 'Test Title 2', description: 'Test Description 2' },
    { id: 3, title: 'Test Title 3', description: 'Test Description 3' },
    { id: 4, title: 'Test Title 4', description: 'Test Description 4' },
    { id: 5, title: 'Test Title 5', description: 'Test Description 5' }
  ]
}
