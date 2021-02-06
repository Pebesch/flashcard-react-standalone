import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import QuestionnaireTable from './QuestionnaireTable'

const QuestionnaireContainer = (props) => {
  const [qs, setQuestionnaires] = useState([])

  const readAll = () => {
    fetch(props.serverUrl)
      .then(response => response.json())
      .then(json => {
        setQuestionnaires(json)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(readAll, [])

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
    setQuestionnaires(qs.map((q) => q.id === questionnaire.id ? questionnaire : q))
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
