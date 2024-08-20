const {edGalho, edFolha} = require('./arrays')

function juntaListas (lista1, lista2){
    let listafinal =[];
    let posicaoAtualLista1 = 0;
    let posicaoAtualLista2 = 0;

    while(posicaoAtualLista1 < lista1.legth && posicaoAtualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[posicaoAtualLista1];
        let produtoAtualLista2 = lista1[posicaoAtualLista2];

        if (posicaoAtualLista1.preco < posicaoAtualLista2.preco){
            listafinal[atual] = produtoAtualLista1;
            posicaoAtualLista1++;
        }else { 
            listafinal[atual] = produtoAtualLista2;
            posicaoAtualLista2++;
        }
        console.log("Lista Final", listafinal[atual])
        atual++;
    }
    return listafinal;
}
console.log(juntaListas(edGalho, edFolha));