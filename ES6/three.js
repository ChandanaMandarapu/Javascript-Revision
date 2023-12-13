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

async function fetchSequentialDataWithRetry(apiList, maxRetries) {
  for (const api of apiList) {
    let retries = 0;

    while (retries <= maxRetries) {
      try {
        const result = await fetchDataFromAPI(api);
        console.log(result);
        break; // Break out of the retry loop if successful
      } catch (error) {
        console.error(`Error fetching data from ${api}. Retrying...`);
        retries++;
        if (retries > maxRetries) {
          console.error(`Max retries reached for ${api}. Giving up.`);
          throw new Error(`Failed to fetch data from ${api}`);
        }
      }
    }
  }

  console.log('All data fetched successfully!');
  console.log('GitHub streak maintained!');
}

// Call the main function with API list and max retries
const apiList = ['API1', 'API2', 'API3'];
const maxRetries = 2;
fetchSequentialDataWithRetry(apiList, maxRetries);
