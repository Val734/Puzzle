function loadEvents()
{
    fotito=document.getElementsByClassName("fotitos"); 
    /* fotito es para indicar lo que irás moviendo incluyendo su ubicación, solo la primera vez,  para luego utilizar como indice*/ 
    direccion=[["imagen/vietnam1.jpeg"], ["imagen/vietnam2.jpeg"], ["imagen/vietnam3.jpeg"], ["imagen/vietnam4.jpeg"], ["imagen/vietnam5.jpeg"], ["imagen/vietnam6.jpeg"], ["imagen/vietnam7.jpeg"], ["imagen/vietnam8.jpeg"], ["imagen/vietnam9.jpeg"]];
    /* guardamos las ubicaciones de cada una para saber la dirección en la que se encuentra cada imagen*/
    document.getElementById("0").addEventListener('click', seleccionar); 
    document.getElementById("1").addEventListener('click', seleccionar); 
    document.getElementById("2").addEventListener('click', seleccionar); 
    document.getElementById("3").addEventListener('click', seleccionar); 
    document.getElementById("4").addEventListener('click', seleccionar); 
    document.getElementById("5").addEventListener('click', seleccionar); 
    document.getElementById("6").addEventListener('click', seleccionar); 
    document.getElementById("7").addEventListener('click', seleccionar); 
    document.getElementById("8").addEventListener('click', seleccionar); 
    //document.getElementById("reset").addEventListener('click', reseteo);  
    /* el clickPS, es para saber la posición del click en la función, es decir esta función se supone que al llamarla detectará la posición de la imagen*/

    casilla1=0;
    casilla2=0;
    //aquí será útil para saber la casilla seleccionada, le damos el valor 0 más que nada porque así sabemos cual es la primera que hemos seleccionado y básicamente eso xD
    numero_del_click=0;//es el click

    //esta es una variable global ya que mantiene el valor entre diferentes pasos por la función, si la declarásemos local (dentro del if) perdemos el valor, por lo tanto es una variable local y la ponemos aquí fuera del if
    //es para saber qué click estamos, y la ponemos a 0 ya luego si la llamamos hacemos que aumente uno o dos o los que sean, bueno qué coño solo pueden haber dos jajaja

    ordenfotito=[0,0,0,0,0,0,0,0,0];
    /*ordenfotito tiene las posiciones de las imágenes en su orden, es decir, básicamente es el puzzle ordenado como toca*/
    
    posicion_del_click1=0; //es como el UB
    //defino una variable para saber en qué casilla se hizo click en primer lugar, es la ubicación del primer click.
    posicion_del_click2=0;

  function CambiazodeCasilla()    
  {
      fotito[casilla1].src = direccion[casilla2]; 
      //para saber qué numero hay en un posición del array(de la imagen), en la casilla, básicamente para decir en la siguiente casilla que seleccione qué imagen pongo, por eje; si digo en la casilla 0 qué num hay y pongo pos un 2 eso quiere decir que pondremos la img2.
      //es como decir que poner en la casilla 1 la imagen de la casilla 2, para hacer el cambiazo básicamente. 
      fotito[casilla2].src = direccion[casilla1]; 
      //aquí estamos diciendo que, en la casilla2 (segun la direccion de la imagen que haya, imagen 1,2,3 etc)pues decimos que es lo mismo que habrá en la dirección de la casilla1. 
      //esto es para guardar el cambiazo que hemos hecho por decirlo así, ¿no?
      posicion_del_click1=direccion[casilla1];
      posicion_del_click2=direccion[casilla2]; 
      direccion[casilla2]=posicion_del_click1; 
      direccion[casilla1]=posicion_del_click2; 

      if (direccion[8]=="imagen/vietnam1.jpeg" && direccion[7]=="imagen/vietnam2.jpeg" && direccion[6]=="imagen/vietnam3.jpeg" && direccion[5]=="imagen/vietnam4.jpeg" && direccion[4]=="imagen/vietnam5.jpeg" && direccion[3]=="imagen/vietnam6.jpeg" && direccion[2]=="imagen/vietnam7.jpeg" && direccion[1]=="imagen/vietnam8.jpeg" && direccion[0]=="imagen/vietnam9.jpeg")
      {
        alert("ME CAGO EN LA OSTIA"); 
        //reset(); 
      }
      else 
      {
        console.log("patata"); 
      }


}

    function seleccionar(obj)
    //id de la variable "obj" 
    {
        numero_del_click=numero_del_click +1; 
        //contabilizamos el numero de clicks que se hacen para sbaer si es el primero o segundo, recordar que le hemos dado un valor de 0 justamente para saber luego de qué click hablamos según la suma de clicks que hagamos. 
        console.log("se ha seleccionado la casilla:"+numero_del_click); 
        if (numero_del_click==1)
        //*guarda la casilla donde se ha hecho el primer click
        {
            casilla1=obj.target.id; 
            //posicion_del_click1=numero_del_click; 
            //document.getElementById("img_"+fotito); 
            //posicion_del_click1=direccion[casilla1]; 
            console.log(posicion_del_click1); 
        }
        else if (numero_del_click==2)
        //tenemos la variable click para saber si estamos en el primer o segundo click básicamente. 
       {
        casilla2=obj.target.id; 

        //posicion_del_click2=numero_del_click; 
        //piensa que no es necesario mantener el valor del 2º click, no nos interesa mantenerlo con lo cual la variable puede ser local
        
        //cambiar las posiciones en el arrayç
        //intercambiar los valores en la posicion del array
    
            numero_del_click=0; 
            //poner el contador de clicks a 0
            CambiazodeCasilla();
            console.log(posicion_del_click1); 
         }
    
    }   

}
// mostrar en consola la imagen seleccionada??


