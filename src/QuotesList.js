import React from 'react'
import QuotesItem from './QuotesItem'

const QuotesList = (props) => {
    const { quotes, removeItem, editItem } = props
    return (
        <div>
             { 
                quotes.length === 0 ? (
                    <div> 
                        <h3> No Quotes found </h3>
                        <p> Add your first Quote </p>
                    </div>
                ) : (
                    <div>
                        <h3 className="display-6"> My Quotes - { quotes.length } </h3>
                        { quotes.map((quote,i) => {
                            return (
                                    <div key={i}>
                                        <QuotesItem 
                                        key={quote.id} {...quote}  
                                        removeItem={removeItem}
                                        editItem={editItem}
                                        /> &nbsp;
                                    </div> 
                                    )
                        })}
                        
                    </div>
                )
             } 
        </div>
    )
}

export default QuotesList