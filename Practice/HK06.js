async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

const apiUrlAsync = "https://jsonplaceholder.typicode.com/posts/1";
fetchDataAsync(apiUrlAsync)
    .then(data => {
        console.log("Fetched data asynchronously:", data);
    });

