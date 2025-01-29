function step1() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("step 1");
      res();
    }, 1000);
  });
}
function step2() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("step 2");
      res();
    }, 1000);
  });
}
function step3() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("step 3");
      res();
    }, 1000);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => {
    console.log("All steps are completed");
  })
  .catch((err) => console.log(err))
  .finally(()=>{
    console.log("Final block executed");
    
  });
