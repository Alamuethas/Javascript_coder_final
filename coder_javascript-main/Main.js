const bntenviar = document.getElementById("ingreso");
const listaLi = document.getElementById("lista");
var Datos = [];
let QR_CODIGO = document.getElementById("boton_qr");

const limpiarHtml = () => {
  listaLi.innerHTML = "";
};

const borrar = (id) => {
  Datos = Datos.filter((paciente) => paciente.id !== id);
  crearhtml();
};

document.addEventListener("ingreso", () => {
  Datos = JSON.parse(localStorage.getItem("Lista"));
});

/* constructor objeto paciente */
function ingreso() {
  function Persona(
    pacienteNombre,
    pacienteEdad,
    pacienteEdad,
    sintomasconsola
  ) {
    this.nombre = pacienteNombre;
    this.apellido = pacienteApellido;
    this.edad = pacienteEdad;
    this.sintomatologia = sintomasconsola;
  }

  let pacienteNombre = document.getElementById("nombre").value;
  let pacienteApellido = document.getElementById("apellido").value;
  let pacienteEdad = document.getElementById("edad").value;
  let sintomasconsola = document.getElementById("sintomatologia").value;

  /*   let response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${sintomasconsola}`
    );
   */
  paciente = new Persona(
    pacienteNombre,
    pacienteApellido,
    pacienteEdad,
    sintomasconsola
  );
  console.log(paciente);
  Datos.push(paciente);
  localStorage.setItem('Lista', JSON.stringify(Datos));
  console.log(Datos);

  Swal.fire(`se ha realizado el ingreso`, "", "info");
}
function creartarjetas() {
  const cards = " ";

  cards;

  Datos.forEach((paciente) => {
    cards += `
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Paciente</h5>
        <p class="card-text">${paciente.nombre} ,${paciente.apellido}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
        `;
  });
  const bscard = document.getElementById("tarjeta");
  bscard.innerHTML = cards;
}

function handleClickBtn(sintomasconsola) {
  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${sintomasconsola}`
  ).then((res) => {
    QR_BODY = document.getElementById("qr");
    QR_BODY.innerHTML = `<img src="${res.url}" alt="" srcset="">`;
  });
}

/* CREA LA LISTA DE PACIENTES. */
const crearHtml = () => {
  let cuerpoModal = document.getElementById("contenidoDelModal");
  console.log(cuerpoModal);
  Datos = JSON.parse(localStorage.getItem("Lista"));
  console.log(Datos);
  //   limpiarHtml();
  cuerpoModal.innerHTML = ``;
  Datos.forEach((paciente) => {
    cuerpoModal.innerHTML += `
                                <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="..." alt="Card image cap">
                                <div class="card-body">
                                <h5 class="card-title">Paciente</h5>
                                <p class="card-text">${paciente.nombre} ,${paciente.apellido}</p>
                                <a href="" onClick="handleClickBtn('${paciente.sintomatologia}')" data-bs-toggle="modal" data-bs-target="#idmodalqr" class="btn btn-secondary">Ver tu QR</a>
                                </div>
                                </div>
                            `;
  });
};
