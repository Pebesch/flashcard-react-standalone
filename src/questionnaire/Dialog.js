import React, { useState, useEffect } from 'react'
import { Label, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Col, Input } from 'reactstrap'

const Dialog = ({ title, buttonLabel, actionButtonLabel, questionnaire: qx, readOnly = false, callbackFn = null, css }) => {
  const [showModal, setShowModal] = useState(false)
  const [questionnaire, setQuestionnaire] = useState(qx)

  useEffect(() => {
    setQuestionnaire(qx)
  }, [qx])

  const close = () => setShowModal(false)
  const open = () => setShowModal(true)

  // Handle generic by assigning the name: https://hjnilsson.com/2016/12/11/generic-form-handleChange-in-react/
  const handleChange = (event) => {
    setQuestionnaire({ ...questionnaire, [event.target.name]: event.target.value })
  }

  const handleSubmit = () => {
    if (callbackFn !== null) {
      callbackFn(questionnaire)
    }
    close()
  }

  return (
    <div>
      <Button color={css || 'secondary'} onClick={open}
              className="float-right">{ buttonLabel }</Button>
      <Modal isOpen={ showModal } toggle={ close } size="lg"
                  autoFocus={ false }>
        <ModalHeader toggle={ close } >
          {title}
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
                    value = {questionnaire.title}
                    onChange = {handleChange}
                    readOnly = {readOnly} />
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
                    onChange = {handleChange}
                    readOnly = {readOnly} />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col className="clearfix" style={{ padding: '.2rem' }}>
                  <Button className="float-right" color="primary" onClick={handleSubmit} >{actionButtonLabel}</Button>
                </Col>
              </FormGroup>
            </Form>
        </ModalBody>
      </Modal>
    </div>
  )
}

export default Dialog
