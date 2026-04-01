function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let escolido = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    
    
        

         if (escolido.classList.contains('dashboard__item__img--rented')) {
         escolido.classList.remove('dashboard__item__img--rented');
         botao.classList.remove('dashboard__item__button--return');
         botao.textContent = 'Alugar';
         } else {
         escolido.classList.add('dashboard__item__img--rented');
         botao.classList.add('dashboard__item__button--return');
         botao.textContent = 'Devolver';
      }  

   
   }


