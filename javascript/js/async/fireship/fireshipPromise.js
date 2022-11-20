const tick = Date.now();
const log = (v) => console.log(`${v}   |   Elapsed: ${Date.now() - tick}ms`);

const codeBlocker = () => {
  // 1. Blocking
  //   let i = 0;
  //   while (i < 1000000000) {
  //     i++;
  //   }
  //   return "🐷 billion loops done";

  // 2. Async blocking
  return new Promise((resolve, reject) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    console.log("executor");
    resolve("🐷 billion loops done");
  });

  // 3. Non-blocking
  //   return Promise.resolve().then((v) => {
  //     let i = 0;
  //     while (i < 1000000000) {
  //       i++;
  //     }
  //     return "🐷 billion loops done";
  //   });
};

log("🥪 Synchronous 1");

codeBlocker().then(log);

log("🥪 Synchronous 2");
