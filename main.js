var imagem=["https://www.artesanatopassoapassoja.com.br/wp-content/uploads/2022/05/stick-people-5640130_1280-770px-385px.jpg" , "1.jpg"];
var nomes=["foto da familia" , "familia 2"];

var i = 0;

function updade()
{
    i++;
   var numberOfffamilymanberinArry = 2

   if(i > numberOfffamilymanberinArry){
    i = 0
   }
   var updadeImage = imagem [i];
   var updadeName = nomes[i];
   document.getElementById("album").src = updadeImage;
   document.getElementById("album de familia").innerHTML = updadeName;
}