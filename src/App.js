/* eslint-disable react/react-in-jsx-scope */
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './app/Header.js'
import Footer from './app/Footer.js'
import QuestionnaireContainer from './questionnaire/QuestionnaireContainer.js'

function App ({ qs }) {
  return (
    <div className="App">
      <Header title="Flashcard Client with React" subtitle="Version 1"></Header>
      <QuestionnaireContainer qs={qs} ></QuestionnaireContainer>
      <Footer copyright="The FHNW Team" qs={qs}></Footer>
    </div>
  )
}

App.defaultProps = {
  qs: [
    { id: 1, title: 'Test Title 1', description: 'Test Description 1' },
    { id: 2, title: 'Test Title 2', description: 'Test Description 2' },
    { id: 3, title: 'Test Title 3', description: 'Test Description 3' },
    { id: 4, title: 'Test Title 4', description: 'Test Description 4' },
    { id: 5, title: 'Test Title 5', description: 'Test Description 5' }
  ]
}

export default App
