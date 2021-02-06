/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './app/Header.js'
import Footer from './app/Footer.js'
import QuestionnaireContainer from './questionnaire/QuestionnaireContainer.js'

const App = () => {
  const serverUrl = 'http://localhost:8080/flashcard-rest/questionnaires'

  return (
    <div className="App">
      <Header title="Flashcard Client with React" subtitle="Version 1"></Header>
      <QuestionnaireContainer serverUrl={serverUrl} ></QuestionnaireContainer>
      <Footer copyright="The FHNW Team"></Footer>
    </div>
  )
}

export default App
