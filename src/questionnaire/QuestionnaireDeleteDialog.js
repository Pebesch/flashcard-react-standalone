import React from 'react'
import { Button } from 'reactstrap'

const QuestionnaireDeleteDialog = ({ questionnaire, onDelete }) => {
  const handleDelete = () => onDelete(questionnaire)

  return <Button color="danger" onClick={handleDelete}>Delete</Button>
}

export default QuestionnaireDeleteDialog
