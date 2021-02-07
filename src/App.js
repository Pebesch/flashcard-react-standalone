/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './app/Header.js'
import Footer from './app/Footer.js'
import QuestionnaireContainer from './questionnaire/QuestionnaireContainer.js'
import { useEffect, useState } from 'react'
import Message from './app/Message'
import doFetch from './util/NetworkUtil.js'

const App = () => {
  const [config, setConfig] = useState()
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const readConfig = async () => {
    doFetch({
      url: './application.json',
      dataFn: setConfig,
      errorFn: setError,
      messageFn: setMessage
    })
  }

  useEffect(readConfig, [])

  const renderQuestionnaireContainer = config => {
    return config ? <QuestionnaireContainer serverUrl={config.url}></QuestionnaireContainer> : null
  }

  const renderMessage = () => {
    return error ? <Message css='danger' message = {message}></Message> : null
  }

  return (
    <div className="App">
      <Header title="Flashcard Client with React" subtitle="Version 2"></Header>
      {renderMessage()}
      {renderQuestionnaireContainer(config)}
      <Footer copyright="The FHNW Team"></Footer>
    </div>
  )
}

export default App
