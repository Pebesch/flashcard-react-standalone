import React from 'react'
import Dialog from './Dialog'

const QuestionnaireUpdateDialog = ({ questionnaire, onUpdateFn }) => {
  return <Dialog
    title = 'Edit Questionnaire'
    buttonLabel = 'Edit'
    actionButtonLabel = 'Update'
    questionnaire = {questionnaire}
    readOnly = {false}
    css = 'success'
    callbackFn = {onUpdateFn}></Dialog>
}

export default QuestionnaireUpdateDialog
