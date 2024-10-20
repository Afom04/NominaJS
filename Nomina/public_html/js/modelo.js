class Nomina {
  constructor(nombre, id, salarioBase, dias) {
    this.nombre = nombre;
    this.id = id;
    this.salarioBase = salarioBase;
    this.dias = dias;
  }

  calcularSalarioNeto() {
    const salarioDiario = this.salarioBase / 30;
    return salarioDiario * this.dias;
  }

  calcularSalud() {
    return this.salarioBase * 0.04; //4% de salud
  }
  calcularPension() {
    return this.salarioBase * 0.04; //4% de Pension
  }
  calcularAuxilio() {
    return this.salarioBase > 2600000 ? 0 : 162000;
  }
}
