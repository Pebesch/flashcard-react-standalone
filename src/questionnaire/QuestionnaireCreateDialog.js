import React, { Component } from 'react'
import { Button, Modal, Form, ModalHeader, FormGroup, Col, Label, Input, ModalBody } from 'reactstrap'

export default class QuestionnaireCreateDialog extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false,
      title: '',
      description: ''
    }
  }

  close = () => this.setState({ showModal: false, title: '', description: '' })

  open = () => this.setState({ showModal: true })

  // Handle generic by assigning the name: https://hjnilsson.com/2016/12/11/generic-form-handleChange-in-react/
  handleChange = (event) => {
    const change = {}
    change[event.target.name] = event.target.value
    this.setState(change)
  }

  handleSubmit = (event) => {
    this.create()
    this.close()
  }

  create = () => {
    const title = this.state.title
    const description = this.state.description
    this.props.onCreate({ title: title, description: description })
  }

  render () {
    return (
          <div>
            <Button color="primary" onClick={this.open}
                    className="float-right">Add Questionnaire</Button>
            <Modal isOpen={ this.state.showModal } toggle={ this.close } size="lg"
                        autoFocus={ false }>
              <ModalHeader toggle={ this.close } >
                Add Questionnaire
              </ModalHeader>
              <ModalBody>
                 <Form>
                   <FormGroup row>
                     <Label md={ 2 } for="formTitle">
                       Title
                     </Label>
                     <Col md={ 10 }>
                       <Input type="text" id="formTitle"
                         name = 'title'
                         value = {this.state.title}
                         onChange = {this.handleChange} />
                     </Col>
                   </FormGroup>

                   <FormGroup row>
                     <Label md={ 2 } for="formDescription">
                       Description
                     </Label>
                     <Col md={ 10 }>
                       <Input type="text" id="formDescription"
                         name = 'description'
                         value ={ this.state.description }
                         onChange = {this.handleChange} />
                     </Col>
                   </FormGroup>

                   <FormGroup>
                     <Col className="clearfix" style={{ padding: '.2rem' }}>
                       <Button className="float-right" color="primary" onClick={this.handleSubmit} >Add</Button>
                     </Col>
                   </FormGroup>
                 </Form>
              </ModalBody>
            </Modal>
          </div>
    )
  }
}
