import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'

const QuestionnaireContainer = ({ serverUrl }) => {
  const [qs, setQuestionnaires] = useState([])

  const readAll = () => {
    fetch(serverUrl)
      .then(response => response.json())
      .then(json => {
        setQuestionnaires(json)
      })
      .catch(error => {
        console.error(error)
      })
  }

  useEffect(readAll, [])

  const onCreate = (questionnaire) => {
    const request = new Request(serverUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(questionnaire)
    })

    fetch(request)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error on creating: ' + response.status)
        }
      })
      .then(json => {
        setQuestionnaires(qs.concat(json))
      })
      .catch(error => console.error(error))
  }

  const onUpdate = (questionnaire) => {
    // if the current iteration has the same id, set the updated item, else leave it be

    const request = new Request(serverUrl + '/' + questionnaire.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(questionnaire)
    })

    fetch(request)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error on updating: ' + response.status)
        }
      })
      .then(json => {
        setQuestionnaires(qs.map((q) => q.id === questionnaire.id ? questionnaire : q))
      })
      .catch(error => console.error(error))
  }

  const onDelete = (questionnaire) => {
    const request = new Request(serverUrl + '/' + questionnaire.id, {
      method: 'DELETE'
    })

    fetch(request)
      .then(response => {
        if (response.ok) {
          setQuestionnaires(qs.filter(q => q.id !== questionnaire.id))
        } else {
          throw new Error('Error on deleting: ' + response.status)
        }
      })
      .catch(error => console.error(error))
  }

  return (
    <Container>
    <Row>
      <Col>
        <h2>{qs.length} Questionnaires</h2>
      </Col>
      <Col>
        <QuestionnaireCreateDialog questionnaire = '' onCreateFn = {onCreate}/>
      </Col>
    </Row>
      <QuestionnaireTable qs = {qs} onUpdate={onUpdate} onDelete={onDelete} />
  </Container>
  )
}

export default QuestionnaireContainer
