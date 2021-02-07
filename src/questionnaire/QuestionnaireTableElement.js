import React from 'react'
import Dialog from './Dialog'

const QuestionnaireTableElement = ({ questionnaire, onUpdate, onDelete }) => {
  return (
    <tr key={questionnaire.id} >
        <td>{questionnaire.id}</td>
        <td>{questionnaire.title}</td>
        <td>{questionnaire.description}</td>
        <td><Dialog title = 'Show Questionnaire' buttonLabel = 'Show' actionButtonLabel = 'Close' questionnaire = {questionnaire} readOnly = {true} css = 'secondary'></Dialog></td>
        <td><Dialog title = 'Edit Questionnaire' buttonLabel = 'Edit' actionButtonLabel = 'Update' questionnaire = {questionnaire} readOnly = {false} css = 'success' callbackFn = {onUpdate}></Dialog></td>
        <td><Dialog title = 'Delete Questionnaire' buttonLabel = 'Delete' actionButtonLabel = 'Delete' questionnaire = {questionnaire} readOnly = {false} css = 'danger' callbackFn = {onDelete}></Dialog></td>
    </tr>
  )
}

export default QuestionnaireTableElement
