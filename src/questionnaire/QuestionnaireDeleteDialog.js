import React from 'react'
import Dialog from './Dialog'

const QuestionnaireDeleteDialog = ({ questionnaire, onDelete }) => {
  return <Dialog
    title = 'Delete Questionnaire'
    buttonLabel = 'Delete'
    actionButtonLabel = 'Delete'
    questionnaire = {questionnaire}
    readOnly = {true}
    css = 'danger'
    callbackFn = {onDelete}>
  </Dialog>
}

export default QuestionnaireDeleteDialog
