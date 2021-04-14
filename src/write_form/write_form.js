import React from 'react'
import { withRouter } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

const WriteForm = () => {
    useEffect(() => {
        console.log('write form')
    }, [])

    return (
        <>
            this is write form
        </>
    )
}

export default withRouter(WriteForm)