/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './app/Header.js'
import Footer from './app/Footer.js'
import QuestionnaireContainer from './questionnaire/QuestionnaireContainer.js'
import { useEffect, useState } from 'react'
import Message from './app/Message'

const App = () => {
  const [config, setConfig] = useState()
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const readConfig = async () => {
    try {
      const response = await fetch('./application.json')
      if (response.ok) {
        console.log('Status: ' + response.status)
        const json = await response.json()
        setConfig(json)
      } else {
        throw new Error('Error reading file: ' + response.status)
      }
    } catch (error) {
      setMessage('Konfigurations Fehler')
      setError(true)
      console.error('Error is: ' + error)
    }
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
      <Header title="Flashcard Client with React" subtitle="Version 1"></Header>
      {renderMessage()}
      {renderQuestionnaireContainer(config)}
      <Footer copyright="The FHNW Team"></Footer>
    </div>
  )
}

export default App
