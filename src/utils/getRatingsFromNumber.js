import {LiaStarHalf, LiaStarSolid} from "react-icons/lia"

const getRatingsFromNumber = (rating) => {

  const ratingNumber = Math.floor(rating);
  const ratingFloat = rating - ratingNumber;
  const HalfStarRating = ratingFloat ? <LiaStarHalf /> : null;
  const starRatingArray = new Array(ratingNumber).fill(<LiaStarSolid/>)
  return [...starRatingArray, HalfStarRating]
  
}

export default getRatingsFromNumber