import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import DashBoard from "../DashBoard/DashBoard";

const GiveReview = () => {
  const { user } = useAuth();

  const [topicName, setTopicName] = useState();
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();

  const handleTopicName = (e) => {
    setTopicName(e.target.value);
  };

  const handleRating = (e) => {
    setRating(e.target.value);
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const handleReview = (e) => {
    const reviewerName = user.displayName;

    const data = { reviewerName, topicName, rating, comment };

    fetch("https://polar-eyrie-45293.herokuapp.com/review/submit", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Review Added");
        }
      });
  };

  return (
    <div>
      <DashBoard></DashBoard>
      <div className="mt-5">
        <input
          type="text"
          onChange={handleTopicName}
          className="m-3 feedback-input"
          name=""
          placeholder="Guiter Name"
          id=""
        />

        <input
          type="number"
          onChange={handleRating}
          className="m-3 mt-3 rating"
          name=""
          placeholder="Rating On 5"
          id=""
        />

        <br />
        <br />

        <textarea
          name=""
          onChange={handleComment}
          className="feedback-input"
          cols="40"
          placeholder="Your Comment"
          rows="10"
        ></textarea>
        <br />
        <button
          onClick={handleReview}
          id="review-submit"
          className="mt-2 btn btn-secondary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default GiveReview;
