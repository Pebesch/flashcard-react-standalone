import React from 'react'
import QuestionnaireShowDialog from './QuestionnaireShowDialog'
import QuestionnaireUpdateDialog from './QuestionnaireUpdateDialog'

const QuestionnaireTableElement = ({ questionnaire, onUpdate }) => {
  return (
    <tr key={questionnaire.id} >
        <td>{questionnaire.id}</td>
        <td>{questionnaire.title}</td>
        <td>{questionnaire.description}</td>
        <td><QuestionnaireShowDialog questionnaire={questionnaire} /></td>
        <td><QuestionnaireUpdateDialog questionnaire={questionnaire} onUpdate={onUpdate} /></td>
    </tr>
  )
}

export default QuestionnaireTableElement
