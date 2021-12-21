import React from 'react'
import moment from 'moment'

export const AllReviews = ({allReviews}) => {

    return (
        <section className="wrapper">
            {allReviews.map(message => {
                return(                    
                <div className="reviewContainer" key={message._id}>
                    <p className="replyText">{message.message}</p>
                            <p className="timeStamp">{ 
                        moment(message.createdAt).fromNow()}</p> 
                        </div>
                )
            })}
        </section> 
    )
}