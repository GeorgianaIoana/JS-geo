//Folosind fisierele de la exercitiul 09, creeaza o aplicatie folosind JavaScript nativ care atunci cand pagina se incarca sub 500 de pixeli,
//ascunde lista neordonata si o afiseaza sau o ascunde atunci cand se apasa headerul h1.
//Atunci cand fereastra se redimensioneaza peste 500 pixeli,afiseaza lista si elimina event handlerul de click de pe h1.
//Daca se redimensioneaza sub 500, adauga handlerul la loc, astfel incat lista sa poata fi ascunsa sau afisata.

//Cum am facut eu tema:

/*const myNav = document.querySelector('h1');
const links = document.querySelector('ul');
links.hidden = false;
const breakpoint = 500;
const toggle = function () {
  if (links.hidden === true) {
    links.hidden  = false;
  } else {
    links.hidden = true;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  const windowWidth = window.innerWidth;

  if (windowWidth < breakpoint) {
    links.hidden = true;
  }

window.addEventListener('resize', function () {
  const windowWidth = window.innerWidth;

  if (windowWidth < breakpoint) {
    links.hidden = true;
    myNav.addEventListener('click', toggle);
  } else {
    links.hidden = false;
    myNav.removeEventListener('click', toggle);
  }
});
});
*/

//In clasa:
const breakpoint = 992;
const mql = window.matchMedia(`max-width: ${breakpoint}px`);

// event delegation
document.addEventListener('click', onClick);

function onClick(event) {
  // target elementul de pe care a plecat eventul
  const target = event.target;

  // verificari + early return
  if (target.nodeName !== 'H1') {
    return;
  }

  const list = target.nextElementSibling;
  list.hidden = !list.hidden;
}

// low resolution
if (mql.matches) {
  toggleLists();
}

mql.addEventListener('change', function ({ matches }) {
  const lists = document.querySelectorAll('ul');

  if (matches === true) {
    // add listener
    document.addEventListener('click', onClick);
    lists.forEach(function (list) {
      list.hidden = true;
    });
  } else {
    // remove listener
    document.removeEventListener('click', onClick);
    lists.forEach(function (list) {
      list.hidden = false;
    });
  }
});

function toggleLists() {
  const lists = document.querySelectorAll('ul');
  lists.forEach(function (list) {
    list.hidden = true;
  });
}
