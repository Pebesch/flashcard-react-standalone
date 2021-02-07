import React from 'react'
import Dialog from './Dialog'

const QuestionnaireCreateDialog = ({ questionnaire, onCreateFn }) => {
  return <Dialog
    title = 'Add Questionnaire'
    buttonLabel = 'Add Questionnaire'
    actionButtonLabel = 'Create'
    questionnaire = {questionnaire}
    readOnly = {false}
    css = 'primary'
    callbackFn = {onCreateFn}></Dialog>
}

export default QuestionnaireCreateDialog
