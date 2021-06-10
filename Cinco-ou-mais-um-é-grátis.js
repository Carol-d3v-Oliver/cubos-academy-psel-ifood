var myback = precos[0];
var total = 0;
for (let en = 0; en < precos.length; en++){
  total += precos[en];
  if (precos[en] < myback){
    myback = precos[en]
  }
}

if (precos.length >= 5){
  total = total - myback;
}

console.log(total);