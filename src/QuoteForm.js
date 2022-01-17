import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const QuoteForm = (props) => {
    const { formSubmission, id: slNo, name: author, body: quote, handleToggle } = props
    const [id, setId] = useState(slNo ? slNo : uuidv4())
    const [name, setName] = useState(author ? author : '')
    const [body, setBody] = useState(quote ? quote : '')

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: id,
            name: name,
            body: body
        }
        //console.log('form data', formData)
        //addItem(formData)

        formSubmission(formData)
        //reset form
        if(handleToggle) {
            handleToggle()
        }
        setName('')
        setBody('')
        setId('')
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    return (
        <div>
            <h2> Add Quote </h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label> <br/>
                <input type="text" value={name} onChange={handleNameChange} /> <br />

                <label> Body </label>  <br/>
                <textarea value={body} onChange={handleBodyChange}></textarea> <br />

                <input type="submit" value="Save" class="btn btn-primary btn-sm"/>
            </form>
        </div>
    )
}

export default QuoteForm