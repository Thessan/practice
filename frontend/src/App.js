
import React, {useState, useEffect} from "react";

import { NewReview } from "./NewReview.js";
import { AllReviews } from "./AllReviews";

const reviewsURL = "http://localhost:8080/reviews"

export const App = () => {
  const [existingReviews, setExistingReviews] = useState([])
  const [newReview, setNewReview] = useState('')


  const fetchReviews = () => {
    fetch(reviewsURL, {
      mode: 'no-cors',
    })
    .then(response => response.json())
    .then(() => { //what to write in () ? 
      setExistingReviews() //what to write in () ?
    }).catch(err => {
      console.log(err.message)
      })
      
  }

  useEffect(() => {
    fetchReviews();
  }, []);


  const postReview = (event) => {
    event.preventDefault();

    fetch(reviewsURL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({newReview:newReview}) // newReview:newReview ???
    })
    .then (response => response.json())
    .then (() => {
      fetchReviews();
      setNewReview('')
    }).catch(err => {
      console.log(err.message)
      })
  }
  return (
    <>

<NewReview
      newReview={newReview}
      setNewReview={setNewReview}
      handlesubmit={postReview}
      />

{<AllReviews 
        allReviews={existingReviews} 
        />}
    </>
  )
}


