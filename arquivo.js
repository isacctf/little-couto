let BotaoEl = document.querySelector('#setinha');
let BodyEl = document.querySelector('body');
let FotoCoutoEl = document.querySelector('#O_Couto');
let MenuEl = document.querySelector('#menuzao');
let Auxiliar = 0;

function alterna(e)
{
  if(Auxiliar == 0)
  {
    MenuEl.style.left = '0px';
    BotaoEl.style.left = '220px';
    Auxiliar = 1;
  }
  else
  {
    MenuEl.style.left = '-220px';
    BotaoEl.style.left = '0px';
    Auxiliar = 0;
  }
}




BotaoEl.addEventListener('click',alterna);
