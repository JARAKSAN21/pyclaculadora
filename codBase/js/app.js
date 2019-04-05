var a;
var b;
var total;

function calculadora(){
	var display=document.getElementById("display");
	var cero=document.getElementById("0");
	var uno=document.getElementById("1");
	var dos=document.getElementById("2");
    var tres=document.getElementById("3");
    var cuatro=document.getElementById("4");
    var cinco=document.getElementById("5");
    var seis=document.getElementById("6");
    var siete=document.getElementById("7");
	var ocho=document.getElementById("8");
    var nueve=document.getElementById("9");
    var mas=document.getElementById("mas");
    var menos=document.getElementById("menos");
    var por=document.getElementById("por");
    var divido=document.getElementById("dividido");
    var punto=document.getElementById("punto");
    var on=document.getElementById("on");
    var igual=document.getElementById("igual");
		  var sign=document.getElementById("sign");




    cero.onclick =function(e){
        display.textContent = display.textContent  + "0";

	}
	uno.onclick =function(e){
        display.textContent = display.textContent  + "1";
	}
	dos.onclick =function(e){
        display.textContent = display.textContent  + "2";
	}
	tres.onclick =function(e){
        display.textContent = display.textContent  + "3";
	}
	cuatro.onclick =function(e){
        display.textContent = display.textContent  + "4";
	}
	cinco.onclick =function(e){
        display.textContent = display.textContent  + "5";
	}
	seis.onclick =function(e){
        display.textContent = display.textContent  + "6";
	}
	siete.onclick =function(e){
        display.textContent = display.textContent  + "7";
	}
    ocho.onclick =function(e){
        display.textContent = display.textContent  + "8";
	}
	nueve.onclick =function(e){
        display.textContent = display.textContent  + "9";
	}

	punto.onclick =function(e){
        display.textContent = display.textContent  + ".";
	}
	sign.onclick =function(e){
				display.textContent = display.textContent  + "-";
	}
   on.onclick = function(e){
      resetear();
  }
  mas.onclick = function(e){
      a = display.textContent;
      total = "+";
      limpiar();
  }
  menos.onclick = function(e){
      a = display.textContent;
      total = "-";
      limpiar();
  }
  divido.onclick = function(e){
  	a = display.textContent;
  	total = "/";
  	limpiar();
  }
  por.onclick = function(e){
      a = display.textContent;
      total = "*";
      limpiar();
  }

  igual.onclick = function(e){
      b = display.textContent;
      resolver();
			substring(0,1,2,3,4, 8);
  }
	function presionar(tecla) {
          tecla.target.style.transform = "scale(0.9,0.9)";
      }

      function soltar(tecla) {
          tecla.target.style.transform = "scale(1,1)";
      }

      function ejecutar() {
          var teclas = document.getElementsByTagName('img');
          for (i = 0; i < teclas.length; i++) {
              teclas[i].addEventListener("mousedown", presionar);
              teclas[i].addEventListener("mouseup", soltar);
          }
      }

      ejecutar();


			function myFunction() {

  document.getElementById("display").innerHTML = num.toPrecision(2);
}


  function limpiar(){
  display.textContent = "";
}
function resetear(){
  display.textContent = "0";
  a = 0;
  b = 0;
  total = "";
}

function resolver(){
  var res = 0;
  switch(total){
    case "+":
      res = parseFloat(a) + parseFloat(b);
      break;
    case "-":
        res = parseFloat(a) - parseFloat(b);
        break;
    case "*":
      res = parseFloat(a) * parseFloat(b);
      break;
    case "/":
      res = parseFloat(a) / parseFloat(b);
      break;
  }
  resetear();
  display.textContent = res;
}

}
