import React from 'react'
import QuestionnaireDeleteDialog from './QuestionnaireDeleteDialog'
import QuestionnaireShowDialog from './QuestionnaireShowDialog'
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog'

const QuestionnaireTableElement = ({ questionnaire, onUpdate, onDelete }) => {
  return (
    <tr key={questionnaire.id} >
        <td>{questionnaire.id}</td>
        <td>{questionnaire.title}</td>
        <td>{questionnaire.description}</td>
        <td><QuestionnaireShowDialog questionnaire={questionnaire} /></td>
        <td><QuestionnaireUpdateDialog questionnaire={questionnaire} onUpdate={onUpdate} /></td>
        <td><QuestionnaireDeleteDialog questionnaire={questionnaire} onDelete={onDelete} /></td>
    </tr>
  )
}

export default QuestionnaireTableElement
