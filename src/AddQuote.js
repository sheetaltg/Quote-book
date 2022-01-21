import React from 'react'
import QuoteForm from './QuoteForm'

const AddQuote = (props) => {
    const { addItem } = props  

    const formSubmission = (formData) => {
       addItem(formData)
    }

    return (
        <div>
            <h2 className="display-6"> Add Quote </h2>
            <QuoteForm formSubmission={formSubmission}/>
        </div>
    )
}

export default AddQuote