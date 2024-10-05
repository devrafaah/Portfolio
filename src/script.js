document.addEventListener("DOMContentLoaded", function() {
    const filterLinks = document.querySelectorAll('[data-filter]');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remover a classe "active" de todos os links e adicionar no link clicado
        filterLinks.forEach(link => link.classList.remove('active-portfolio'));
        this.classList.add('active-portfolio');
  
        const filterValue = this.getAttribute('data-filter');
  
        portfolioItems.forEach(item => {
          if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });
  });
  