const counter = () => {
  let count = 0;

  return {
    increment: () => {
      count++;
      console.log(count);
    },
    reset: () => {
      count = 0;
      console.log(count);
    },
  };
};

const myCounter = counter();
myCounter.increment(); 
myCounter.increment(); 
myCounter.reset(); 
