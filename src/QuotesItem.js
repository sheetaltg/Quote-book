import React, { useState } from 'react'
import EditQuote from './EditQuote'

const QuotesItem = (props) => {
    const { id, name, body, removeItem, editItem } = props
    const [toggle, setToggle] = useState(false)

    const handleRemove = () => {
        const confirmRemove = window.confirm("Are you sure ?")
            if(confirmRemove) {
            removeItem(id)
        }
    }

    const handleToggle = () => {
        const result =!toggle 
        setToggle(result) // setToggle(!toggle)
    }

    return (
        <div>
            {toggle ? (
                <div>
                    <EditQuote 
                        id={id} 
                        name={name} 
                        body={body} 
                        editItem={editItem}
                        handleToggle={handleToggle}
                    /> 
                    <button onClick={handleToggle} type="button" class="btn btn-primary btn-sm">cancel</button>
                </div>
            ) : (
                <div> 
                    <blockquote> { body } <br/>--{ name } </blockquote>
                    <button onClick={handleToggle} type="button" class="btn btn-primary btn-sm"> edit </button> &nbsp;
                    <button onClick={handleRemove} type="button" class="btn btn-primary btn-sm"> remove </button>
                    
                </div>
            )}
           
        </div>
    )
}

export default QuotesItem