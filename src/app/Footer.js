import { render } from '@testing-library/react'
import React from 'react'

const Footer = ({ copyright }) => (
    <p>&copy; {copyright}</p>
)

export default Footer
