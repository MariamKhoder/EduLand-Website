/* filtering of courses function */
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll('.cat');
    const cards = document.querySelectorAll('.c-card');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            cards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hide');
                } else {
                    card.classList.add('hide');
                }
            });
        });
    });
});

/* open slidebar function*/
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
  }

/* close slidebar function*/
function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
  }

/* signin button function*/
function goto() {
    window.location.href="../Sign-page/sign.html";
  }


