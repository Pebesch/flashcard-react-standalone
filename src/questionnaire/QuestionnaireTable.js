import React from 'react'
import { Table } from 'reactstrap'
import QuestionnaireTableElement from './QuestionnaireTableElement'

const QuestionnaireTable = ({ qs }) => {
  return (
        <Table hover>
            <tbody>
                {
                    qs.map((q) => {
                      return <QuestionnaireTableElement key={q.id} questionnaire={q}></QuestionnaireTableElement>
                    })
                }
            </tbody>
        </Table>
  )
}

export default QuestionnaireTable
