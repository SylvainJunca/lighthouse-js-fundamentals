var start = 100;
var stop = 200;

for ( var i = start; start <= stop; start++) {
  if (start % 3 === 0 && start % 4 === 0){
    console.log("LoopyLighthouse");
  }
  else if (start % 3 === 0) {
    console.log("Loopy");
  }
  else if (start % 4 === 0) {
    console.log("Lighthouse");
  } else {
  console.log(start);
  }
}