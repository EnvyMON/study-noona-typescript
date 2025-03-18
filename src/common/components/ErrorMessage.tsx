import { Alert } from '@mui/material'
import React from 'react'

const ErrorMessage = ({msg}: {msg: string}) => {
    return (
        <Alert severity="error">{msg}</Alert>
    )
}

export default ErrorMessage