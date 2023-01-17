//https://www.frontendinterviewhandbook.com/blog/a-glimpse-into-front-end-interviews/ 

function sequential(data, fetcher) {
    const helper = (index, results) => {
      if (index === data.length) {
        return results;
      }
      return fetcher(data[index]).then((datum) => {
        results.push(datum);
        return helper(index + 1, results);
      });
    };
  
    return helper(0, []);
  }
  
  // usage example
  const fetcher = (i) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(i), 1000);
    });
  };
  sequential([1, 2, 3], fetcher);