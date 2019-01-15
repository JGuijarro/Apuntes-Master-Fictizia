var dataTshirts ={};
var model;
var colour;
var size;
var price;
var maker;
var urlpic;
var clickItems = document.getElementById("aqui");
var item;


function getDataTshirtsAjax(url) {
    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {

        if (req.readyState === 4 && req.status === 200) {
            console.info(JSON.parse(req.responseText));
        } else if (req.readyState === 4 && req.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(req.responseText));
        }
    };
    req.open("GET", url, true);
    req.send();
}

getDataTshirtsAjax("/Publico/PrimerProyecto/datatshirt.json");


function catchDataTshirtById(idTshirt){
    dataTshirts.tshirts.forEach(function(item){
    if (idTshirt === item.id){
        model = item.model;
        colour = item.colour;
        size = item.size;
        price = item.price;
        maker = item.maker;
        urlpic = item.urlpic;
        }
    })
}

function drawDataTshirt(idTshirt){
  //0: llamada Ajax
  getDataTshirtsAjax("/Publico/PrimerProyecto/datatshirt.json");
  //1: capturar informacion de la camiseta
  catchDataTshirtById(idTshirt);
  //2: generar dinamicamente el html con la info de la camiseta capturada
    document.getElementById("model").innerHTML=model;
    document.getElementById("colour").innerHTML=colour;
    document.getElementById("size").innerHTML=size;
    document.getElementById("price").innerHTML=price;
    document.getElementById("maker").innerHTML=maker;
    document.getElementById("urlpic").innerHTML="<img src=\"{urlpic}\" height=\"100\" width=\"50\">";
}

function delay(milliseconds){
  let starttime = new Date();
  let endtime;
    do {
      endtime = new Date();
    } while (endtime - starttime <= milliseconds);
    }

// main program

clickItems.addEventListener("click", function(){
    //drawDataTshirt(1)
    location.href= "camiseta.html";

    
});
//delay(3000);
