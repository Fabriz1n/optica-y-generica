const form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value;
  const phone = form.querySelector('input[type="tel"]').value;
  const area = form.querySelector("select").value;
  const message = form.querySelector("textarea").value;

  const number = "59100000000";

  const whatsappMessage =
    `Hola, soy ${name}.%0A` +
    `Mi WhatsApp es: ${phone}.%0A` +
    `Estoy interesado en: ${area}.%0A` +
    `Consulta: ${message}`;

  window.open(`https://wa.me/${number}?text=${whatsappMessage}`, "_blank");
});