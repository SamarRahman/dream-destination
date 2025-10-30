function scrollLeft2() {
      document.getElementById('scrollContainer2').scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }

    function scrollRight2() {
      document.getElementById('scrollContainer2').scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }

    
    function scrollLeft() {
      document.getElementById('tourScroll').scrollBy({
        left: -320,
        behavior: 'smooth'
      });
    }

    function scrollRight() {
      document.getElementById('tourScroll').scrollBy({
        left: 320,
        behavior: 'smooth'
      });
    }
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-count');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 200);

        if (current < target) {
          counter.innerText = `${Math.min(current + increment, target)}`;
          setTimeout(updateCounter, 80);
        }
      };
      updateCounter();
    });
    
     
    