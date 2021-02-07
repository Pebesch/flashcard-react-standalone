import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import doFetch from '../util/NetworkUtil'
import Loader from '../util/Loader'
import Message from '../app/Message'

const headers = { headers: { 'Content-Type': 'application/json; charset=utf-8' } }

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
      loadingFn: setLoading
    })
  }

  useEffect(readAll, [])

  const onCreate = (questionnaire) => {
    doFetch({
      url: serverUrl,
      requestObject: { method: 'POST', body: JSON.stringify(questionnaire), ...headers },
      dataFn: questionnaire => setQuestionnaires(qs.concat(questionnaire)),
      errorFn: setError,
      messageFn: setMessage,
      loadingFn: setLoading
    })
  }

  const onUpdate = (questionnaire) => {
    // if the current iteration has the same id, set the updated item, else leave it be
    doFetch({
      url: serverUrl + '/' + questionnaire.id,
      requestObject: { method: 'PUT', body: JSON.stringify(questionnaire), ...headers },
      dataFn: questionnaire => setQuestionnaires(qs.map((q) => q.id === questionnaire.id ? questionnaire : q)),
      errorFn: setError,
      messageFn: setMessage,
      loadingFn: setLoading
    })
  }

  const onDelete = (questionnaire) => {
    doFetch({
      url: serverUrl + '/' + questionnaire.id,
      requestObject: { method: 'DELETE' },
      dataFn: questionnaire => setQuestionnaires(qs.filter(q => q.id !== questionnaire.id)),
      errorFn: setError,
      messageFn: setMessage,
      loadingFn: setLoading
    })
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
          <QuestionnaireCreateDialog questionnaire = '' onCreateFn={ onCreate } />

        </Col>
      </Row>
      <Row>
        {renderQuestionnaireTable(qs, onUpdate, onDelete)}
      </Row>
  </Container>
  )
}

export default QuestionnaireContainer
