document.getElementById('cvBtn').addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = './Downloads/Francois Mercer.pdf';
    link.download = 'Francois Mercer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });