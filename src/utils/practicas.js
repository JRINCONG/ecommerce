const strin = (str1,str2)=>{

let conta=0;
let cadena=[];
let 
for(let i=0; i< str1.length; i++){

    for(let j=0; j < str2.length; j++){

          if(str1[i]=== str2[j]){
           cadena[conta]=str2[j];
           str2[j]='5'
           conta = conta + 1;
           i++
           
          }
    }

}
const nombre = cadena.join('')
console.log(nombre)
if(nombre === str1){
    return true
}else{
    return false
}
return cadena
}




const valor= strin("javascripts", "scriptsjava")
console.log(valor)