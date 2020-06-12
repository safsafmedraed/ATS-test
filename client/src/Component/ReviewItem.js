import React from 'react'

const ReviewItem = ({ reviews }) => {
    return (
        <div>
            <h4>Rating: {reviews.rating}</h4>
            <p> content :{reviews.content}</p>
        </div>
    )
}

export default ReviewItem
