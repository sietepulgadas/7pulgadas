const PAGES = {
  home: `
    <section class="section">
      <h3>Inicio</h3>
      <p>Sesiones auténticas en vinilo de 7 pulgadas...</p>
    </section>
  `,

  quienes: `
    <section class="section">
      <h3>Quiénes somos</h3>
      <p>7 pulgadas es una asociación cuyo objetivo reside en impulsar la divulgación musical...</p>
    </section>
  `,

  eventos: `
    <section class="section">
      <h3>Eventos</h3>
      <p>Festivales de Música, Congresos, Fiestas...</p>
    </section>
  `,

  contacto: `
    <section class="section">
      <h3>Contacto</h3>
      <p>Tel: 651 540 633 · 667 706 199<br>
      Email: 7pulgadas.torres@gmail.com</p>
    </section>
  `
};

function loadPage(name){
  document.getElementById('app').innerHTML = PAGES[name];
}
