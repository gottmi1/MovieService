import { useEffect, useState } from "react/cjs/react.development";

function App() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovie(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>로딩중 . . .</h1>
      ) : (
        <div>
          {movie.map((item) => (
            <div key={item.id}>
              <img src={item.medium_cover_image} />
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <ul>
                {item.genres.map((g) => (
                  <li key={g}>{g}</li> // map을 쓸 떄마다 key를 한 번씩 줘야함
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
