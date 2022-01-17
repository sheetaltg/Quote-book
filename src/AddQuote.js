import React from 'react'
import QuoteForm from './QuoteForm'

const AddQuote = (props) => {
    const { addItem } = props  

    const formSubmission = (formData) => {
       addItem(formData)
    }

    return (
        <div>
            <QuoteForm formSubmission={formSubmission}/>
        </div>
    )
}

export default AddQuote