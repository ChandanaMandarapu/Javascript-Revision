const mockAPICall = (data, delay) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

const fetchDataConcurrently = async () => {
  try {
    const [result1, result2] = await Promise.all([
      mockAPICall({ name: 'Data from API 1' }, 2000),
      mockAPICall({ name: 'Data from API 2' }, 1500)
    ]);

    console.log('Result from API 1:', result1);
    console.log('Result from API 2:', result2);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchDataConcurrently();
// ajaxrequest

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('Fetched Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
