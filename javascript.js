// FAQ Toggle
document.querySelectorAll('.FAQ__title').forEach(title => {
  title.addEventListener('click', () => {
    const faqItem = title.parentElement;
    faqItem.classList.toggle('active');
    title.setAttribute('aria-expanded', faqItem.classList.contains('active'));
  });
});

// Language Switch
document.querySelector('.language').addEventListener('change', (e) => {
  const selectedLang = e.target.value;

  document.querySelectorAll('.FAQ__item').forEach(item => {
    if (selectedLang === 'hindi') {
      item.style.display = item.classList.contains('lang-hindi') ? 'block' : 'none';
    } else {
      item.style.display = item.classList.contains('lang-english') ? 'block' : 'none';
    }
  });
});

// Default language show (English)
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.language').value = 'english';
  document.querySelectorAll('.FAQ__item').forEach(item => {
    item.style.display = item.classList.contains('lang-english') ? 'block' : 'none';
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const showsRow = document.querySelector('.shows-row');

  if (showsRow) {
    let scrollAmount = 0;
    const scrollStep = 1;

    function autoScroll() {
      scrollAmount += scrollStep;
      if (scrollAmount >= showsRow.scrollWidth - showsRow.clientWidth) {
        scrollAmount = 0;
      }
      showsRow.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }

    setInterval(autoScroll, 20);
  }
});
document.querySelectorAll('.faq').forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('active');
  });
});
  function openPopup() {
    document.getElementById("popupForm").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("popupForm").style.display = "none";
  }


