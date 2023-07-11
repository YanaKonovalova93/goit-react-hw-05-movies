// import { useEffect } from "react";
// import { Link } from 'react-router-dom';

const Home = () => {


    // useEffect(() => {
    // // /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці. 
      
    // })

    return <div>Домашняя страница 🐷</div>;


}

export default Home;


// async function fetchMovieById(movieId) {
//   try {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2VmZjE2NGZkZTljYjA3ZjFkZmVlMzg5NTI2ZTNlNyIsInN1YiI6IjY0N2NmMWU1MGZiMzk4MDExODBlMDI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmAvfE0gWZjEB37-xgrPZ-zzGTupZmQSUJnDzhkVL-U',
//       },
//     };

//     const response = await fetch(
//       `https://api.themoviedb.org/3/movie/${movieId}`,
//       options
//     );
//     if (!response.ok) {
//       throw new Error(
//         (refs.modalBodyEl.innerHTML = `<div class="sorry-message">OOPS...We are very sorry! We don't have more information about this movie.</div>`)
//       );
//     }
//     return response.json();
//   } catch (error) {
//     console.log(error);
//   }
// }
