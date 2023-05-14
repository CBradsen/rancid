const fetchData = () => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
  .then(res => {
    if(!res.ok){
      throw new Error(`Please try again there is an error ${res.status}`)
    } else {
      return res.json()
    };
  });
};

const specficData = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(res => {
    if(!res.ok){
      throw new Error(`Please try again there is an error ${res.status}`)
    } else {
      return res.json()
    };
  });
};

export { fetchData, specficData};