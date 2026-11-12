class Endereco {
  #logradouro;
  #numero;
  #cidade;
  #uf;

  constructor(logradouro, numero, cidade, uf) {
    this.logradouro = logradouro;
    this.numero = numero;
    this.cidade = cidade;
    this.uf = uf;
  }

  get logradouro() { return this.#logradouro; }
  set logradouro(valor) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error("Logradouro é obrigatório.");
    }
    this.#logradouro = valor.trim();
  }

  get numero() { return this.#numero; }
  set numero(valor) {
    if (valor === undefined || valor === null || String(valor).trim() === "") {
      throw new Error("Número do endereço é obrigatório.");
    }
    this.#numero = String(valor).trim();
  }

  get cidade() { return this.#cidade; }
  set cidade(valor) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error("Cidade é obrigatória.");
    }
    this.#cidade = valor.trim();
  }

  get uf() { return this.#uf; }
  set uf(valor) {
    if (typeof valor !== "string" || !/^[A-Za-z]{2}$/.test(valor.trim())) {
      throw new Error("UF deve ter 2 letras (ex.: RN).");
    }
    this.#uf = valor.trim().toUpperCase();
  }

  formatar() {
    return `${this.#logradouro}, ${this.#numero} - ${this.#cidade}/${this.#uf}`;
  }
}

module.exports = Endereco;
