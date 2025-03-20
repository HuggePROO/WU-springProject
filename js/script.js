var hamburger = document.getElementById('hamburger');
    var menu = document.getElementById('menu');

    hamburger.addEventListener('click', function() {
      menu.classList.toggle('active');
      menu.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && menu.classList.contains('active')) {
          menu.classList.remove('active');
        }
      });