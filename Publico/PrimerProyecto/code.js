var dataTshirts ={};
var model;
var colour;
var size;
var price;
var maker;
var urlpic;
var clickItems = document.getElementById("aqui");
var req;
var item;

function getDataTshirts(){
    req = new XMLHttpRequest();
    req.onreadystatechange = function(){
        if (req.readyState === 4 && req.status === 200){
            dataTshirts = JSON.parse(req.responseText);
        } else if (req.readyState === 4 && req.status === 404){
            console.log(req.responseText);
        }
        return dataTshirts;
    }
}


function catchDataTshirtById(idTshirt){
    dataTshirts.tshirts.forEach(item){
    if (idTshirt === item.id){
        model = item.model;
        colour = item.colour;
        size = item.size;
        price = item.price;
        maker = item.maker;
        urlpic = item.urlpic;
        }
    }
}

function drawDataTshirt(idTshirt){
  //0: llamada Ajax
  getDataTshirts();
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

clickItems.addEventListener("click", drawDataTshirt());
delay(3000);
location.href= "camiseta.html";