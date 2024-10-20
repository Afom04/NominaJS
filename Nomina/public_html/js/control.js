const btnNom = document.getElementById("subir");
const resultadoDiv = document.getElementById("resultadoDiv");
const tablaResultado = document.getElementById("tablaResultado");

class NominaController {
  constructor() {
    //this.form = document.getElementById('frmNomina');
    //this.resultado = document.getElementById('resultado');
    this.tablaResultado = document.getElementById("tablaResultado");
    this.resultadoDiv = document.getElementById("resultadoDiv");
  }
  controlCalcularNomina() {
    const nombre = document.getElementById("txtNombre").value;
    const id = document.getElementById("txtId").value;
    const salario = parseFloat(document.getElementById("cmbSalarioBase").value);
    const dias = parseInt(document.getElementById("txtDias").value);

    // Regex para validaciones
    const regexDias = /^\d+$/;
    const regexNombre = /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/;

    if (
      //Validacion de valores no vacios
      nombre.trim().length === 0 ||
      id.trim().length === 0 ||
      dias === null || // Asegura que 'dias' no sea null
      dias === undefined ||
      isNaN(dias) // Asegura que 'dias' no sea undefined
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (!regexNombre.test(nombre)) {
      //Validacion de nombre solo con letras
      alert("El nombre solo puede contener letras");
      return;
    }

    if (!regexDias.test(id)) {
      //Validacion de ID numerico
      alert("El ID debe ser numérico");
      return;
    }

    if (dias < 1 || dias > 30) {
      //Validacion del total de dias
      alert(
        "No se puede calcular el salario neto con más de 30 días o menos de 1"
      );
      return;
    }

    const nomina = new Nomina(nombre, id, salario, dias);
    const salud = nomina.calcularSalud();
    const pension = nomina.calcularPension();
    const auxilio = nomina.calcularAuxilio();
    const salarioNeto = nomina.calcularSalarioNeto();
    const rst = `
        <tr>
            <td>${nombre}</td>
            <td>${id}</td>
            <td>$${salario}</td>
            <td>$${salario / 30}</td>
            <td>${dias}</td>
            <td>$${salud}</td>
            <td>$${pension}</td>
            <td>$${auxilio}</td>
            <td>$${
              salarioNeto -
              salud -
              pension +
              auxilio /*Calculo de salario devengado*/
            }</td>
        </tr>
        `;
    this.tablaResultado.insertAdjacentHTML("beforeend", rst);
  }
}

const controlador = new NominaController();
