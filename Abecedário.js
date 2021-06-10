var cont = 0;
for (let ines = 0; ines < palavras.length; ines++){
  let str = palavras [ines];
  if(str[0] != letra){
    cont++;
  }
}
console.log(cont)