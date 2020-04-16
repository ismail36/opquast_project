// Debug
// console.log("JS OK");

var btnGlossary = document.querySelector(".btnGlossary");
var btnPratique = document.querySelector(".btnPractise");
var btnPourGlos = document.querySelector(".pourGlossary");
var btnPourPrat = document.querySelector(".pourBPr");
let list = document.querySelector(".reponseList");

btnGlossary.addEventListener("click",function(glossar){
    glossar.preventDefault();
    glossary();
});

btnPratique.addEventListener("click",function(prat){
    prat.preventDefault();
    pratique();
});

btnPourGlos.addEventListener("click",function(pourGlo){
    pourGlo.preventDefault();
    pourGlos();
});

btnPourPrat.addEventListener("click",function(pourPra){
    pourPra.preventDefault();
    pourPrat();
});



function glossary() {
    // let list = document.querySelector(".reponseList");
    
    let num = 0;
    // Debug
    // console.log("function glossary OK");
    fetch("php/model/glossary.php").then(function(response){
        // console.log(response.json());
        return response.json();
    }).then(function(data){
        // Debug
        // console.log(data);
        num = Math.floor(Math.random() * (data.length)+1 ) ;
        // Debug
        // console.log(num);
        let glosDes = 
        `<li>Titre: ${data[num].title}</li>
        <li>Description: ${data[num].description}</li>`;
        // Debug
        // console.log(glosDes);
        list.innerHTML = glosDes;
    });
}




function pratique() {
    // Debug
    // console.log("function pratique OK");
    fetch("php/model/practise.php").then(function(response){
        // console.log(response.json());
        return response.json();
    }).then(function(data){
        // Debug
        // console.log(data);
        num = Math.floor(Math.random() * (data.length)+1 ) ;
        // Debug
        // console.log(num);
        let pracDes = 
        `<li>Titre: ${data[num].title}</li>
        <li>Objectives: ${data[num].objectives}</li>`;
        // Debug
        // console.log(pracDes);
        list.innerHTML = pracDes;
    });
}

function pourGlos() {
    // Debug
    // console.log("function pourGlos OK");
    let mots =document.querySelector(".mots").value;
    fetch("php/model/glossary.php").then(function(response){
        // console.log(response.json());
        return response.json();
    }).then(function(data){
        // Debug
        // console.log(data);
        // console.log(mots);
        for(var i=0; i<data.length; i++){
            if(data[i].title.includes(mots) || data[i].description.includes(mots)) {
                // Debug
                // console.log(data[i].title);
                // console.log(data[i].description);
                list.innerHTML += `<li> ${data[i].title} </li> 
                                <li> ${data[i].description} </li> <hr>`;
            }
        };
    });
}

function pourPrat() {
    // Debug
    // console.log("function pourPrat OK");
    let mots =document.querySelector(".mots").value;
    fetch("php/model/practise.php").then(function(response){
        // console.log(response.json());
        return response.json();
    }).then(function(data){
        // Debug
        // console.log(data);
        // console.log(mots);
        for(var i=0; i<data.length; i++){
            if(data[i].title.includes(mots) || data[i].objectives.includes(mots)) {
                // Debug
                // console.log(data[i].title);
                // console.log(data[i].description);
                list.innerHTML += `<li>Title:  ${data[i].title} </li> 
                                <li>Objectives:  ${data[i].objectives} </li> <hr>`;
            }
        };
    });
}