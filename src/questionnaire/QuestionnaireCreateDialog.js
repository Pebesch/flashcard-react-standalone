import React, { useState } from 'react'
import { Button, Modal, Form, ModalHeader, FormGroup, Col, Label, Input, ModalBody } from 'reactstrap'

const QuestionnaireCreateDialog = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [questionnaire, setQuestionnaire] = useState({ title: '', description: '' })

  const close = () => {
    setShowModal(false)
    setQuestionnaire({ title: '', description: '' })
  }

  const open = () => setShowModal(true)

  // Handle generic by assigning the name: https://hjnilsson.com/2016/12/11/generic-form-handleChange-in-react/
  const handleChange = (event) => {
    setQuestionnaire({ ...questionnaire, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    create()
    close()
  }

  const create = () => {
    props.onCreate(questionnaire)
  }

  return (
    <div>
      <Button color="primary" onClick={open}
              className="float-right">Add Questionnaire</Button>
      <Modal isOpen={ showModal } toggle={ close } size="lg"
                  autoFocus={ false }>
        <ModalHeader toggle={ close } >
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
                    value = { questionnaire.title }
                    onChange = {handleChange} />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label md={ 2 } for="formDescription">
                  Description
                </Label>
                <Col md={ 10 }>
                  <Input type="text" id="formDescription"
                    name = 'description'
                    value ={ questionnaire.description }
                    onChange = {handleChange} />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col className="clearfix" style={{ padding: '.2rem' }}>
                  <Button className="float-right" color="primary" onClick={handleSubmit} >Add</Button>
                </Col>
              </FormGroup>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default QuestionnaireCreateDialog
