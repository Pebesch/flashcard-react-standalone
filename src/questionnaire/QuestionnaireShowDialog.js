import React from 'react'
import Dialog from './Dialog'

const QuestionnaireShowDialog = ({ questionnaire }) => {
  return <Dialog
    title = 'Show Questionnaire'
    buttonLabel = 'Show'
    actionButtonLabel = 'Close'
    questionnaire = {questionnaire}
    readOnly = {true}
    css = 'secondary'>
  </Dialog>
}

export default QuestionnaireShowDialog
