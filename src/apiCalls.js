const fetchData = () => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
  .then(res => {
    if(!res.ok){
      throw new Error(`Please try again there is an error. code: ${res.status}`)
    } else {
      return res.json()
    };
  });
};

const specificData = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Please try again there is an error. code: ${res.status}`);
      } else {
        return res.json();
      }
    })
    .then(movieData => {
      return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Please try again there is an error. code: ${res.status}`);
          } else {
            return res.json();
          }
        })
        .then(videoData => {
          return { movieData, videoData }; 
        });
    });
};

export { fetchData, specificData};