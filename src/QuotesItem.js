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
                    <button onClick={handleToggle} type="button" className="btn btn-primary btn-sm">cancel</button>
                </div>
            ) : (
                <div className="card text-dark bg-light">
                    <div className="card-body">
                        <p className="card-text">{ body } <br/>--{ name } </p>
                        <button  style={{ marginLeft: '.5rem' }} onClick={handleToggle} type="button" className="btn btn-primary btn-sm float-end"> edit </button> &nbsp;
                        <button onClick={handleRemove} type="button" className="btn btn-primary btn-sm float-end"> remove </button>
                    </div>
                </div>
            )}
           
        </div>
    )
}

export default QuotesItem