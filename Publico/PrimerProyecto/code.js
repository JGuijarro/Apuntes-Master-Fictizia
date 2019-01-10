var dataTshirts ={};
var model;
var colour;
var size;
var price;
var maker;
var urlpic;

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

var clickToItems = document.getElementById("aqui");
clickToItems.addEventListener("click", drawDataTshirt)

function catchDataTshirtById(idTshirt){
    dataTshirts.tshirts.forEach(item){
    if (idTshirt === item.id){
        model = item.model;
        colour = item.colour
        size = item.size
        price = item.price
        maker = item.maker
        urlpic = item.urlpic
        }
    }
}

function drawDataTshirt(idTshirt){
    //1: capturar informacion de la camiseta
    catchDataTshirtById(idTshirt)
    //2: generar dinamicamente el html con la info de la camiseta capturada
}

