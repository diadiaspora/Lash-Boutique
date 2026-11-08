const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

// Service links preselect the matching option in the inquiry form.
const serviceSelect = document.getElementById("serviceSelect");
document.querySelectorAll("[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    if (!serviceSelect) return;
    const requested = link.dataset.service;
    const matchingOption = [...serviceSelect.options].find(option =>
      option.text.toLowerCase() === requested.toLowerCase()
    );
    if (matchingOption) serviceSelect.value = matchingOption.value;
    else if (requested === "Lash Extensions") serviceSelect.value = "Classic Extensions";
    else if (requested === "Lash Fill / Maintenance") serviceSelect.value = "Lash Fill / Maintenance";
    else if (requested === "Event Makeup") serviceSelect.value = "Event Makeup";
  });
});

// Front-end inquiry feedback. Connect this form to your email/form provider
// before publishing if you want submissions delivered to your inbox.
const bookingForm = document.getElementById("bookingForm");
const formFeedback = document.getElementById("formFeedback");

if (bookingForm && formFeedback) {
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;
    formFeedback.textContent = "Thanks! Your inquiry is ready. Please connect this form to an email or booking service to receive submissions.";
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
