var i = 0;
  for (var data = 2010; data <= ano; data += 4){
    if(data === ano){
      console.log("COPA");
      i = 1;
      break;
    } else if (ano ===(data+2)){
      console.log("JOGOS");
      i = 1;
      break;
    }
  }
  if (i != 1){
    console.log("MEH");
  }