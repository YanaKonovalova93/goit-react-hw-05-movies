import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getReviewsById} from '../services/api'

const Reviews = () => {
     const [reviewsData, setReviewsData] = useState('');
    const { movieId } = useParams();
    
    useEffect(() => {


      async function reviewsById() {
        try {
            const data = await getReviewsById(movieId);

            setReviewsData(data);

            
        } catch (error) {
          alert(error.message);
        }
      }

      reviewsById();
    }, [movieId]);


    return (
      <>
            
            {reviewsData && (
                
          <div>
            <ul>
              {reviewsData.results.map(item => (
                <li key={item.id}>
                  <h2>Author: {item.author}</h2>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
};

export default Reviews;
