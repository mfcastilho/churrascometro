// ---REGRA DE NEGÓCIO---
// - Carne: 400gr por adulto, se passar de 6 horas - 650gr por adulto.
// - Cerveja: 1200ml por adulto, se passar de 6 horas - 2000ml por adulto.
// - Refrigerante/Água: 1000ml por adulto, se passar de 6 horas - 1500ml por adulto.
// - Crianças: os valores da carne e refrigerante valem metade(1/2) dos valores dos adultos, ou seja 0.5.

function calculandoQtdItens(){


  //limpando o resultado do calculo anterior nos parágrafos
  let paragrafos = document.getElementsByClassName("itensP");
  for(var i in paragrafos){
    paragrafos[i].innerHTML = "";
  }

  //buscando div que vai irá mostrar o resultado do calculo
  let resultDiv = document.getElementById("resultado");
  resultDiv.textContent = "";

 
  //buscando os valores do formulario e fazendo o casting para inteiro
  let adultos = parseInt(document.getElementById("adultos").value);
  let criancas = parseInt(document.getElementById("criancas").value);
  let duracao = parseInt(document.getElementById("duracao").value);

  // declarando  as variaveis com os respectivos 
  //valores da carne, cerveja e refrigerante para os adultos
  let carneAdulto = 400;
  let cervejaAdulto = 1200;
  let refrigeranteAdulto = 1000;

  // declarando  as variaveis com os respectivos 
  //valores da carne e refrigerante para as crianças
  let carneCrianca = 400 / 2;
  let refrigeranteCrianca = 1000 / 2;

  //criando os parágrafos onde iremos colocar as informações do cálculo
  let carneP = document.createElement("p");
  let cervejaP = document.createElement("p");
  let refrigeranteP = document.createElement("p");

  //criando as tags <img> onde irmos colocar as imagens dos itens 
  //na frente dos textos dos resultados do calculo
  let imgCarne = document.createElement("img");
  let imgCerveja = document.createElement("img");
  let imgRefrigerante = document.createElement("img");

  //declarando as variáveis in iremos colocar o total de cada item
  let totCarne = 0;
  let totCerveja = 0;
  let totRefrigerante = 0;

  let respErro = document.createElement("p");
  respErro.id = "resp-erro";
  respErro.style.fontSize = "1rem";
  respErro.style.color = "red";


  if((adultos <=0 || criancas <=0 || duracao <=0) || (isNaN(adultos) || isNaN(criancas) || isNaN(duracao))){
    
    
    respErro.innerHTML = "Erro! As informações de quantidade de pessoas adultos, crianças e duração devem ser maior que zero(0).\nTente novamente!";
    resultDiv.appendChild(respErro);
  }else{
     //verificando se a duração é maior que 6 horas
    //se for, iremos atribuir os novos valores
    if(duracao > 6){
      //novos valores da carne, cerveja e refrigerante para os adultos
      carneAdulto = carneAdulto + 250;
      cervejaAdulto = cervejaAdulto + 800;
      refrigeranteAdulto = refrigeranteAdulto + 500;

      //novos valores da carne, cerveja e refrigerante para as crianças
      carneCrianca = carneAdulto / 2;
      refrigeranteCrianca = refrigeranteAdulto / 2;

      //calculando o total de cada item
      totCarne = (adultos * carneAdulto) + (criancas * carneCrianca);
      totCerveja = adultos * cervejaAdulto;
      totRefrigerante = (adultos * refrigeranteAdulto) + (criancas * refrigeranteCrianca);

      totCerveja = totCerveja / 1000;
      totRefrigerante = totRefrigerante / 1000;

      //verificando se o total passa de 1000
      //se passar, dividimos o total por 1000 para
      //obtermos os valores em kgs e litros
      if(totCarne >= 1000){  
        //dividindo o total por 1000
        totCarne = totCarne / 1000;
        
        //parágrafos recebendo em seu conteúdo interno
        //os valores do calculo de cada item em kgs e litros
        carneP.innerHTML = (totCarne+" kg(s) de Carne");
        cervejaP.innerHTML = (totCerveja+" litros de Cerveja");
        refrigeranteP.innerHTML = (totRefrigerante+" litros de Refrigerante");

      }else{//entrando no else, que quer dizer que trabalharemos os valores da carne gramas     
        //parágrafos recebendo em seu conteúdo interno
        //os valores do calculo de cada item em gramas e mls
        carneP.innerHTML = (totCarne+" gramas de Carne");
        cervejaP.innerHTML = (totCerveja+" litros de Cerveja");
        refrigeranteP.innerHTML = (totRefrigerante+" litros de Refrigerante");
      }
    
    }else{//entrando no else, que quer dizer que a duração é menor que 6 horas       
      totCarne = (adultos * carneAdulto) + (criancas * carneCrianca);
      totCerveja = adultos * cervejaAdulto;
      totRefrigerante = (adultos * refrigeranteAdulto) + (criancas * refrigeranteCrianca);

      totCerveja = totCerveja / 1000;
      totRefrigerante = totRefrigerante / 1000;

      //verificando se o total passa de 1000
      //se passar, dividimos o total por 1000 para
      //obtermos os valores em kgs e litros
      if(totCarne >= 1000){     
        //dividino o total por 1000
        totCarne = totCarne / 1000 ;
        
        //parágrafos recebendo em seu conteúdo interno
        //os valores do calculo de cada item em kgs e litros
        carneP.innerHTML = (totCarne+" kg(s) de Carne");
        cervejaP.innerHTML = (totCerveja+" litros de Cerveja");
        refrigeranteP.innerHTML = (totRefrigerante+" litros de Refrigerante");

      }else{//entrando no else, que quer dizer que trabalharemos os valores da carne em gramas 
        //parágrafos recebendo em seu conteúdo interno
        //os valores do calculo de cada item em gramas e mls
        carneP.innerHTML = (totCarne+" gramas de Carne");
        cervejaP.innerHTML = (totCerveja+" litros de Cerveja");
        refrigeranteP.innerHTML = (totRefrigerante+" litros de Refrigerante");
      }    
    }

    //mudando estilo dos parágrafos
    carneP.style.fontSize = "1rem";
    cervejaP.style.fontSize = "1rem";
    refrigeranteP.style.fontSize = "1rem";
    
    carneP.style.display = "inline";
    cervejaP.style.display = "inline";
    refrigeranteP.style.display = "inline";
    
    carneP.style.position = "relative";
    carneP.style.bottom = "0.3rem";

    cervejaP.style.position = "relative";
    cervejaP.style.bottom = "0.3rem";
    
    refrigeranteP.style.position = "relative";
    refrigeranteP.style.bottom = "0.3rem";
    

    //adicionando uma classe nos paragrafos
    carneP.classList.add("itensP");
    cervejaP.classList.add("itensP");
    refrigeranteP.classList.add("itensP");

    //adicionando uma classe as imagens dos itens
    imgCarne.classList.add("imgsItens");
    imgCerveja.classList.add("imgsItens");
    imgRefrigerante.classList.add("imgsItens");

    

    //inserindo imagens as tags<img> dos itens
    imgCarne.src = ("assets/desenho_carne.png");
    imgCerveja.src = ("assets/desenho_cerveja.png");
    imgRefrigerante.src = ("assets/desenho_refrigerante.png");

    //inserindo stilo nas imagens dos itens
    imgCarne.style.width = "1.4rem";
    imgCerveja.style.width = "1.4rem";
    imgRefrigerante.style.width = "1rem";
    

    //criando paragrafos para pular entre cada paragrafo 
    //dos textos com os resultados dos calculos
    let pula1 = document.createElement("p");
    let pula2 = document.createElement("p");
    let pula3 = document.createElement("p");
    
    
    //inserindo conatúdo interno e 
    //o display do tipo block nos paragrafos de pular
    pula1.innerHTML = "";
    pula1.style.display = "block";

    pula2.innerHTML = "";
    pula2.style.display = "block";

    pula3.innerHTML = "";
    pula3.style.display = "block";

    //Criando titulo h4 que irá exibir a título antes da apresentação dos resultados do calculo
    let textoApresentacao = document.createElement("h4");

    //inserindo conteúdo interno ao texto de apresentação
    //que será exibido antes dos textos com os calculos
    textoApresentacao.innerHTML = "Voce vai precisar de:";
    
    //tornando o titulo h4 filho de resultDiv
    resultDiv.appendChild(textoApresentacao);


    //tornando os parágrafos filhos de resultDiv
    resultDiv.appendChild(imgCarne);
    resultDiv.appendChild(carneP);
    
    resultDiv.appendChild(pula1);

    resultDiv.appendChild(imgCerveja);
    resultDiv.appendChild(cervejaP);
    resultDiv.appendChild(pula2);

    resultDiv.appendChild(imgRefrigerante);
    resultDiv.appendChild(refrigeranteP);
    resultDiv.appendChild(pula3);

    //limpando os formulários
    document.getElementById("adultos").value = "";
    document.getElementById("criancas").value = "";
    document.getElementById("duracao").value = "";
  }

  
}