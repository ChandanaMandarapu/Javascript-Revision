async function parallelAsyncOperations() {
  const [result1, result2, result3] = await Promise.all([
    asyncOperation(2),
    asyncOperation(4),
    asyncOperation(6)
  ]);

  console.log(result1, result2, result3);
}

parallelAsyncOperations();

