function animateit() {
  document.querySelector(".onefre").classList.toggle("block-spin-one");
  document.querySelector(".twofre").classList.toggle("block-spin-two");
  document.querySelector(".entering").classList.toggle("entering-end");
  document.querySelector(".btn_text").classList.toggle("btn_text-end");
}


document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.txtorig');

  heading.addEventListener('click', function() {
    heading.textContent = "Серьёзно?";
    heading.classList.add('texanim');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const paragraph = document.querySelector('.txtorigtwo');

  paragraph.addEventListener('click', function() {
    paragraph.textContent = "Странная статья про странного человека, в странной газете";
    paragraph.classList.add('texanim');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.subheadone');

  heading.addEventListener('click', function() {
    heading.textContent = "Да кому он нужен?";
    heading.classList.add('texanim');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.subheadtwo');

  heading.addEventListener('click', function() {
    heading.textContent = "Мечты";
    heading.classList.add('texanim');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const paragraph = document.querySelector('.txtorigthree');

  paragraph.addEventListener('click', function() {
    paragraph.textContent = "Это человек, который предпочитает стабильность и комфорт. Он не стремится к новым знаниям или вызовам, а довольствуется тем, что есть. Его интересы ограничены, и он не испытывает особой потребности в саморазвитии.  Он может быть сдержанным и осторожным, избегая рисков и новых начинаний. Хотя он ценит верность своим принципам, его главная цель – сохранить то, что ему дорого, и избежать изменений.";
    paragraph.classList.add('texanim');
  });
});

