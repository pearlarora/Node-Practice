//setInterval invokes the callback continuously in the intervals of the value provided and is never ending unless ended manually (1000 - 1sec)
setInterval(() => {
  console.log("hello world!");
}, 1000);
console.log("I will run first!");
//Process stays alive, have to kill manually or will get killed in case of any unexpected error caused
