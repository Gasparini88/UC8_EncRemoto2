let listaDeAlunos = ["","Jessica","Ordilei","Thiago","Caique","Gilson","Matheus","Vanessa"];
let contador = 0
for (let contador = 0; contador < listaDeAlunos.length; contador++) {
    
   // console.log(contador)

   // if (contador == 0) {
      //  console.log("O número atual é 0")
        
  //  }

   // else if (contador % 2 == 0) {
        
   //     console.log("O número " + contador + " é par")
   // }

  //  else{
  //  console.log(`O número ${contador} é impar`);
 //}
    
 
 
}

for (let nome of listaDeAlunos) {

if (nome =="") {
    console.log ("")
    
}

    else if (contador % 2 == 0) {
     test="Par"
     console.log (`Esta pessoa se chama:${nome}, posição numero:${contador}, ${test}`) 

    }
     else {

        test="Impar"
     console.log (`Esta pessoa se chama:${nome}, posição numero:${contador}, ${test}`)
        
    }
contador ++
        
    

}



// let contador = 0 

// while (contador < numeroDeAlunos) {
  
//     if (contador == 0) {
//         console.log("O número atual é 0")
        
//     }

//     else if (contador % 2 == 0) {

//         console.log("O número " + contador + " é par")
//     }

//     else{
//     console.log(`O número ${contador} é impar`);
//  }
  
//     contador ++ 
// }
