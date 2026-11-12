const Pessoa = require("./Pessoa");

class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;

  constructor(nome, cpf, dataNascimento, endereco) {
    super(nome, endereco);
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
  }

  get cpf() { return this.#cpf; }
  set cpf(valor) {
    const digitos = Pessoa.somenteDigitos(valor);
    if (!/^\d{11}$/.test(digitos)) {
      throw new Error("O CPF deve ter 11 dígitos.");
    }
    this.#cpf = digitos;
  }

  get dataNascimento() { return this.#dataNascimento; }
  // Aceita um Date ou uma string no formato AAAA-MM-DD.
  set dataNascimento(valor) {
    let data;
    if (valor instanceof Date) {
      data = valor;
    } else if (typeof valor === "string" && /^\d{4}-\d{2}-\d{2}$/.test(valor)) {
      const [ano, mes, dia] = valor.split("-").map(Number);
      data = new Date(ano, mes - 1, dia);
      // Rejeita datas como 2000-02-31, que o JS "corrige" sozinho.
      if (data.getFullYear() !== ano || data.getMonth() !== mes - 1 || data.getDate() !== dia) {
        throw new Error("Data de nascimento inválida.");
      }
    } else {
      throw new Error("Data de nascimento inválida (use AAAA-MM-DD).");
    }
    if (Number.isNaN(data.getTime())) {
      throw new Error("Data de nascimento inválida.");
    }
    if (data > new Date()) {
      throw new Error("A data de nascimento não pode estar no futuro.");
    }
    this.#dataNascimento = data;
  }

  exibir() {
    const nasc = this.#dataNascimento.toLocaleDateString("pt-BR");
    return `[Pessoa Física]\n${super.exibir()}\nCPF: ${this.#cpf}\nNascimento: ${nasc}`;
  }
}

module.exports = PessoaFisica;
