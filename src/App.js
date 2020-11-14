import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './app/Header.js';
import Footer from './app/Footer.js';
import QuestionnaireContainer from './questionnaire/QuestionnaireContainer.js';

function App() {
  return (
    <div className="App">
      <Header title="Flashcard Client with React" subtitle="Version 1"></Header>
      <QuestionnaireContainer></QuestionnaireContainer>
      <Footer copyright="The FHNW Team" ></Footer>
    </div>
  );
}

export default App;
