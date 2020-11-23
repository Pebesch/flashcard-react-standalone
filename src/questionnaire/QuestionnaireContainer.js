import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'
import QuestionnaireTable from './QuestionnaireTable'

export default class QuestionnaireContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      qs: this.props.qs
    }
  }

  getNextId = () => {
    const currentNumberOfQs = this.state.qs.length
    return currentNumberOfQs + 1
  }

  onCreate = (questionnaire) => {
    const newQ = { id: this.getNextId(), ...questionnaire }
    this.setState({ qs: this.state.qs.concat([newQ]) })
  }

  onUpdate = (questionnaire) => {
    const toUpdate = this.state.qs.find(q => q.id === questionnaire.questionnaire.id)
    toUpdate.title = questionnaire.questionnaire.title
    toUpdate.description = questionnaire.questionnaire.description
    this.setState({ qs: this.state.qs })
  }

  render () {
    return (
      <Container>
      <Row>
        <Col>
          <h2>{this.state.qs.length} Questionnaires</h2>
        </Col>
        <Col>
          <QuestionnaireCreateDialog onCreate={this.onCreate}/>
        </Col>
      </Row>
        <QuestionnaireTable qs = {this.state.qs} onUpdate={this.onUpdate} />
    </Container>
    )
  }
}

QuestionnaireContainer.defaultProps = {
  qs: [
    { id: 1, title: 'Test Title 1', description: 'Test Description 1' },
    { id: 2, title: 'Test Title 2', description: 'Test Description 2' },
    { id: 3, title: 'Test Title 3', description: 'Test Description 3' },
    { id: 4, title: 'Test Title 4', description: 'Test Description 4' },
    { id: 5, title: 'Test Title 5', description: 'Test Description 5' }
  ]
}
