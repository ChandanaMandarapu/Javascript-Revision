async function* asyncGenerator() {
  yield await asyncOperation(1);
  yield await asyncOperation(2);
  yield await asyncOperation(3);
}

(async () => {
  for await (const result of asyncGenerator()) {
    console.log(result);
  }
})();
