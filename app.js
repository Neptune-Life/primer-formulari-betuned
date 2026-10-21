const root = document.documentElement;
const form = document.querySelector("#event-form");
const successPanel = document.querySelector("#success-panel");
const themeToggle = document.querySelector("#theme-toggle");
const languageToggle = document.querySelector("#language-toggle");
const newRequestButton = document.querySelector("#new-request");
const eventDate = document.querySelector("#event-date");
const sourceLead = document.querySelector("#source-lead");
const allowedLeadSources = new Set(["IG", "WEB", "TK", "LK", "O"]);

const copy = {
  es: {
    eyebrow: "Hablemos",
    title: "Cuéntanos sobre tu evento",
    intro: "Déjanos los datos esenciales y nos pondremos en contacto contigo.",
    formLabel: "Datos del evento",
    nameLabel: "Nombre y apellidos",
    namePlaceholder: "Ej. María García",
    phoneLabel: "Número de teléfono",
    phoneHelp: "Incluye el prefijo del país, por ejemplo +34.",
    emailLabel: "Correo electrónico",
    emailPlaceholder: "nombre@ejemplo.com",
    dateLabel: "Fecha del evento",
    venueLabel: "Dónde se celebra",
    venuePlaceholder: "Espacio",
    requiredNote: "Todos los campos son obligatorios.",
    submit: "Enviar solicitud",
    sentEyebrow: "Solicitud enviada",
    sentTitle: "Gracias por contarnos vuestro plan.",
    sentCopy: "Hemos recibido los datos del evento y nos pondremos en contacto contigo.",
    newRequest: "Enviar otra solicitud",
    footer: "BeTuned · All in one crew.",
    errors: {
      required: "Completa este campo.",
      fullName: "Escribe tu nombre y al menos un apellido.",
      nameCharacters: "Utiliza solo letras, espacios, guiones o apóstrofes.",
      email: "Introduce un correo electrónico válido.",
      phone: "Añade el código de país con + y un número válido.",
      date: "Elige una fecha de hoy en adelante.",
      short: "Añade un poco más de información."
    },
    dark: "Activar modo oscuro",
    light: "Activar modo claro",
    otherLanguage: "Show page in English"
  },
  en: {
    eyebrow: "Let's talk",
    title: "Tell us about your event",
    intro: "Share the essential details and we'll get in touch with you.",
    formLabel: "Event details",
    nameLabel: "Full name",
    namePlaceholder: "e.g. Maria Garcia",
    phoneLabel: "Phone number",
    phoneHelp: "Include your country code, for example +34.",
    emailLabel: "Email address",
    emailPlaceholder: "name@example.com",
    dateLabel: "Event date",
    venueLabel: "Where it takes place",
    venuePlaceholder: "Venue",
    requiredNote: "All fields are required.",
    submit: "Send enquiry",
    sentEyebrow: "Enquiry sent",
    sentTitle: "Thanks for sharing your plans.",
    sentCopy: "We've received your event details and will get in touch with you.",
    newRequest: "Send another enquiry",
    footer: "BeTuned · All in one crew.",
    errors: {
      required: "Complete this field.",
      fullName: "Enter your first name and at least one surname.",
      nameCharacters: "Use only letters, spaces, hyphens or apostrophes.",
      email: "Enter a valid email address.",
      phone: "Add the country code with + and a valid number.",
      date: "Choose today or a future date.",
      short: "Add a little more information."
    },
    dark: "Use dark mode",
    light: "Use light mode",
    otherLanguage: "Mostrar la página en español"
  }
};

let language = "es";

function localDateString(date = new Date()) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().split("T")[0];
}

function currentTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeButton() {
  const isDark = currentTheme() === "dark";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? copy[language].light : copy[language].dark);
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  root.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = copy[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = copy[language][element.dataset.i18nPlaceholder];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", copy[language][element.dataset.i18nAria]);
  });
  languageToggle.textContent = language === "es" ? "EN" : "ES";
  languageToggle.setAttribute("aria-label", copy[language].otherLanguage);
  document.title = language === "es" ? "Cuéntanos sobre tu evento · BeTuned" : "Tell us about your event · BeTuned";
  updateThemeButton();
  form.querySelectorAll(".field.is-invalid input").forEach(showFieldError);
}

function errorMessage(input) {
  const messages = copy[language].errors;
  if (input.validity.valueMissing) return messages.required;
  if (input.id === "full-name") {
    const nameParts = input.value.trim().split(/\s+/).filter(Boolean);
    if (nameParts.length < 2) return messages.fullName;
    if (!nameParts.every((part) => /^[\p{L}\p{M}]+(?:[’'.-][\p{L}\p{M}]+)*$/u.test(part))) return messages.nameCharacters;
  }
  if (input.type === "email" && input.validity.typeMismatch) return messages.email;
  if (input.id === "phone") {
    const phone = input.value.trim();
    const digits = phone.replace(/\D/g, "");
    const hasCountryCode = /^\+[1-9]/.test(phone);
    const hasOnlyPhoneCharacters = /^\+[\d\s().-]+$/.test(phone);
    if (!hasCountryCode || !hasOnlyPhoneCharacters || digits.length < 8 || digits.length > 15) return messages.phone;
  }
  if (input.id === "event-date" && (input.validity.rangeUnderflow || input.value < eventDate.min)) return messages.date;
  if (input.validity.tooShort) return messages.short;
  return "";
}

function showFieldError(input) {
  const field = input.closest(".field");
  const error = document.querySelector(`#${input.id}-error`);
  const message = errorMessage(input);
  field.classList.toggle("is-invalid", Boolean(message));
  input.setAttribute("aria-invalid", String(Boolean(message)));
  error.textContent = message;
  return !message;
}

eventDate.min = localDateString();
const requestedLeadSource = new URLSearchParams(window.location.search).get("source_lead")?.toUpperCase();
sourceLead.value = allowedLeadSources.has(requestedLeadSource) ? requestedLeadSource : "WEB";

form.querySelectorAll(".field input, .field select").forEach((input) => {
  input.addEventListener("blur", () => showFieldError(input));
  input.addEventListener("input", () => {
    if (input.closest(".field").classList.contains("is-invalid")) showFieldError(input);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputs = [...form.querySelectorAll(".field input, .field select")];
  const isValid = inputs.map(showFieldError).every(Boolean);
  if (!isValid) {
    inputs.find((input) => input.getAttribute("aria-invalid") === "true")?.focus();
    return;
  }
  const firstFormData = {
    category: form.elements.eventType.value,
    venue: form.elements.venue.value.trim(),
    eventDate: form.elements.eventDate.value,
  };
  document.cookie = `betuned_first_form=${encodeURIComponent(JSON.stringify(firstFormData))}; path=/; max-age=2592000; SameSite=Lax`;
  form.hidden = true;
  successPanel.hidden = false;
  successPanel.focus();
});

newRequestButton.addEventListener("click", () => {
  form.reset();
  form.querySelectorAll(".field").forEach((field) => field.classList.remove("is-invalid"));
  form.querySelectorAll(".field input, .field select").forEach((input) => input.setAttribute("aria-invalid", "false"));
  form.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
  successPanel.hidden = true;
  form.hidden = false;
  document.querySelector("#full-name").focus();
});

themeToggle.addEventListener("click", () => {
  root.dataset.theme = currentTheme() === "dark" ? "light" : "dark";
  updateThemeButton();
});

languageToggle.addEventListener("click", () => setLanguage(language === "es" ? "en" : "es"));
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeButton);
updateThemeButton();
