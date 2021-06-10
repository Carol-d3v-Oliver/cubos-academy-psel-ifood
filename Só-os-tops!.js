var totalit = 0;
var total = 0;
var obt = {
  totalTop: 0,
  percentual: 0
}
for (let A = 0; A<produtos.length; A++){
  total += produtos[A].preco;

  if (produtos[A].preco>10000){
    totalit += produtos[A].preco;
  }
}
obt.totalTop = totalit;
obt.percentual = (totalit/total);
    console.log(obt)