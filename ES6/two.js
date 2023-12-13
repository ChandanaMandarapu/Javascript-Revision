function fetchDataFromAPI(api) {
  return new Promise((resolve, reject) => {
    const success = Math.random() < 0.8; // Simulating 80% success rate
    setTimeout(() => {
      if (success) {
        resolve(`Data from ${api} fetched successfully!`);
      } else {
        reject(`Error fetching data from ${api}`);
      }
    }, Math.random() * 3000); // Simulating varying response times
  });
}

async function fetchAllData() {
  const apiList = ['API1', 'API2', 'API3'];

  try {
    const results = await Promise.all(apiList.map(api => fetchDataFromAPI(api)));
    console.log('All data fetched successfully!');
    console.log(results);
    console.log('GitHub streak maintained!');
  } catch (error) {
    console.error('Error fetching data:', error);
    console.log('GitHub streak broken!');
  }
}

// Call the main function
fetchAllData();
