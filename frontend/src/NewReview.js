import React from "react";

export const NewReview = ({newReview, setNewReview, handleSubmit}) => {
    return(
        <section className="newReviewContainer">
            <form onSubmit={handleSubmit}>
                <label>
                    <textarea
                    placeholder="Write your review here"
                    rows="3"
                    onChange={event => setNewReview(event.target.value)}
                    value={newReview}>
                    </textarea>
                </label>

                <button className="sendReview"
                type="submit">
                    <p>SEND REVIEW</p>
                </button>
            </form>
        </section>
    )
}