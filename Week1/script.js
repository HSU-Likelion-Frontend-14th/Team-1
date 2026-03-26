document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


var sections = document.querySelectorAll('section[id], div[id]');
var navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', function() {
  var scrollY = window.pageYOffset;

  sections.forEach(function(section) {
    var top = section.offsetTop - 150;
    var id  = section.getAttribute('id');

    if (scrollY >= top) {
      navLinks.forEach(function(a) { a.classList.remove('active'); });
      var active = document.querySelector('.nav-menu a[href="#' + id + '"]');
      if (active) active.classList.add('active');
    }
  });
});
