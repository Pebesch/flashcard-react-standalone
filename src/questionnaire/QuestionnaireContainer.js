import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import doFetch from '../util/NetworkUtil'
import Loader from '../util/Loader'
import Message from '../app/Message'

const QuestionnaireContainer = ({ serverUrl }) => {
  const [qs, setQuestionnaires] = useState([])
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const readAll = () => {
    doFetch({
      url: serverUrl,
      dataFn: setQuestionnaires,
      errorFn: setError,
      messageFn: setMessage,
      loadingFn: setLoading,
      css: 'danger'
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

  const renderMessage = () => {
    return error ? <Message message={ message } /> : null
  }

  const renderQuestionnaireTable = (qs, onUpdate, onDelete) => {
    return loading ? <Loader /> : <QuestionnaireTable qs = {qs} onUpdate={onUpdate} onDelete={onDelete} />
  }

  return (
    <Container>
      <Row>
        {renderMessage()}
      </Row>
      <Row>
        <Col>
          <h2>{qs.length} Questionnaires</h2>
        </Col>
        <Col>
          <QuestionnaireCreateDialog questionnaire = '' create={ onCreate } />

        </Col>
      </Row>
      <Row>
        {renderQuestionnaireTable(qs, onUpdate, onDelete)}
      </Row>
  </Container>
  )
}

export default QuestionnaireContainer
