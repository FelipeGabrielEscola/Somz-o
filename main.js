function tocaSomPom(idElementoAudio){
  document.querySelector (idElementoAudio).play();
}


    const listaDeTeclas = document.querySelectorA11('.tecla');

    let contador = 0;
    //Estrutura de reptição - Enquanto
    
      while(contador <listaDeTeclas.length){
        listaDeTeclas[0].onclick = tocaSomPom;
        const tecla = listaDeTeclas[contador]
                const instrumento = tecla.classList[1];
              const idAudio = `#som_ ${instrumento}`;
                console.log(instrumento);
           tecla.onclick = function(){
            tocaSom('#_tecla_splash');
           };
           contador= contador + 1;
            console.log(contador);
          }
      
  