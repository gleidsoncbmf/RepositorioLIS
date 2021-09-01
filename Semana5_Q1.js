function ListaW(par, text) {
  
   document.getElementById('myList').innerHTML = "";
       
    var par = document.getElementById('p').value;
    var texto = document.getElementById('t').value;
    var num = 1
    var cont = 0;

    while(cont < par) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(texto+" "+num);
        node.appendChild(textnode);
        document.getElementById("myList").appendChild(node);
        cont++;
        num++;
        }
    

    }
    ListaW(); 
