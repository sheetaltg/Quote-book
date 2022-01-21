import React from 'react'
import QuoteForm from './QuoteForm'

const EditQuote = (props) => {
    const { id, name, body, editItem, handleToggle } = props

    const formSubmission = (formData) => {
        //console.log('eddit', formData)
        editItem(formData)
        handleToggle()
    } 

    return (
        <div>
            <h2> Edit Quote</h2>
        <QuoteForm 
            id={id}
            name={name}
            body={body}
            formSubmission={formSubmission}
            handleToggle={handleToggle}
        />
        </div>
    )
}

export default EditQuote