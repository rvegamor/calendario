const dias = 30;
const mes = "Junio";
const num_mes = 6;
let semestre = "";

if(num_mes <= 6){
  semestre = "Primer semestre";
}
else{
  semestre = "Segundo semestre";
}
console.log(mes + " tiene " + dias + " días y pertenece al " + semestre);
  
