import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getReviewsById} from '../services/api'

const Reviews = () => {
     const [reviewsData, setReviewsData] = useState([]);
    const { movieId } = useParams();
    
    useEffect(() => {


      async function reviewsById() {
        
            const data = await getReviewsById(movieId);
console.log(data)
            setReviewsData(data);

      }

      reviewsById();
    }, [movieId]);


    return (
      <>
                    
            {/* {reviewsData && (
                
          <div>
            <ul>
              {results.map(item => (
                <li key={item.id}>
                  <h2>Author: {item.author}</h2>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )} */}
            {reviewsData.map(item => {
          return (
            <ul>
              <li key={item.id}>
                <h2>Author: {item.author}</h2>
                <p key={item.id}>{item.content}</p>
              </li>
            </ul>
          );
        })}
        {reviewsData.length < 1 && (
          <p>We don`t have any reviews for this movie.</p>
        )}
      </>
    );
};

export default Reviews;
