// ---------- Cambio de idioma ----------
var idioma = 'es';
var btnIdioma = document.getElementById('btn-idioma');

btnIdioma.addEventListener('click', function(){
  idioma = (idioma === 'es') ? 'en' : 'es';
  document.documentElement.lang = idioma;
  btnIdioma.textContent = (idioma === 'es') ? 'English' : 'Español';

  var elementos = document.querySelectorAll('[data-es][data-en]');
  for (var i = 0; i < elementos.length; i++){
    elementos[i].textContent = elementos[i].getAttribute('data-' + idioma);
  }
});

// ---------- Cambio de tema ----------
var btnTema = document.getElementById('btn-tema');

btnTema.addEventListener('click', function(){
  var oscuro = document.documentElement.getAttribute('data-tema') === 'oscuro';
  if (oscuro){
    document.documentElement.removeAttribute('data-tema');
    btnTema.setAttribute('data-es', 'Oscuro');
    btnTema.setAttribute('data-en', 'Dark');
  } else {
    document.documentElement.setAttribute('data-tema', 'oscuro');
    btnTema.setAttribute('data-es', 'Claro');
    btnTema.setAttribute('data-en', 'Light');
  }
  btnTema.textContent = btnTema.getAttribute('data-' + idioma);
});