const Pessoa = require("./Pessoa");

class PessoaJuridica extends Pessoa {
  #cnpj;
  #razaoSocial;

  constructor(nome, cnpj, razaoSocial, endereco) {
    super(nome, endereco);
    this.cnpj = cnpj;
    this.razaoSocial = razaoSocial;
  }

  get cnpj() { return this.#cnpj; }
  set cnpj(valor) {
    const digitos = Pessoa.somenteDigitos(valor);
    if (!/^\d{14}$/.test(digitos)) {
      throw new Error("O CNPJ deve ter 14 dígitos.");
    }
    this.#cnpj = digitos;
  }

  get razaoSocial() { return this.#razaoSocial; }
  set razaoSocial(valor) {
    if (typeof valor !== "string" || valor.trim() === "") {
      throw new Error("A razão social é obrigatória.");
    }
    this.#razaoSocial = valor.trim();
  }

  exibir() {
    return `[Pessoa Jurídica]\n${super.exibir()}\nCNPJ: ${this.#cnpj}\nRazão social: ${this.#razaoSocial}`;
  }
}

module.exports = PessoaJuridica;
