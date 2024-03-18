const searchInput = document.getElementById('searchInput');
const optionsContainer = document.querySelector('.options-container');
const options = document.querySelectorAll('.option');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();

  options.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(searchText)) {
      option.style.display = 'block';
    } else {
      option.style.display = 'none';
    }
  });
});

options.forEach(option => {
  option.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});
