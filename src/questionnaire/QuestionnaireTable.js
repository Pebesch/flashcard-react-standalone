import React from 'react'
import { Table } from 'reactstrap'
import QuestionnaireTableElement from './QuestionnaireTableElement'

const QuestionnaireTable = ({ qs, onUpdate, onDelete }) => {
  console.log('Table ', qs)
  return (
        <Table hover>
            <tbody>
                {
                    qs.map((q) => {
                      return <QuestionnaireTableElement key={q.id} questionnaire={q} onUpdate={onUpdate} onDelete={onDelete}></QuestionnaireTableElement>
                    })
                }
            </tbody>
        </Table>
  )
}

export default QuestionnaireTable
