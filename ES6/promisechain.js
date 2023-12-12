const fetchData = (url) => {
  return fetch(url).then((response) => response.json());
};

fetchData('/api/first')
  .then((data1) => fetchData(`/api/second/${data1.id}`))
  .then((data2) => fetchData(`/api/third/${data2.id}`))
  .then((data3) => console.log(data3))
  .catch((error) => console.error(error));
