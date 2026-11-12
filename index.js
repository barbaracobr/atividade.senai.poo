const Endereco = require("./src/Endereco");
const PessoaFisica = require("./src/PessoaFisica");
const PessoaJuridica = require("./src/PessoaJuridica");

const clientes = [];

function cadastrar(descricao, criarCliente) {
  try {
    const cliente = criarCliente();
    clientes.push(cliente);
    console.log(`✔ ${descricao}: cadastrado com sucesso.`);
  } catch (erro) {
    console.log(`✘ ${descricao}: ${erro.message}`);
  }
}

const enderecoValido = () => new Endereco("Av. Salgado Filho", 1500, "Natal", "RN");

console.log("=== Cadastrando clientes ===");

// Cenário 1: pessoa física válida (CPF com pontos e traço)
cadastrar("Cenário 1 - PF válida", () =>
  new PessoaFisica("Maria Silva", "123.456.789-09", "1990-05-20", enderecoValido()));

// Cenário 2: pessoa jurídica válida (CNPJ com pontos, barra e traço)
cadastrar("Cenário 2 - PJ válida", () =>
  new PessoaJuridica("Tech Store", "12.345.678/0001-95", "Tech Store Comércio LTDA", enderecoValido()));

// Cenário 3: pessoa física inválida (nome curto, CPF curto e data no futuro)
cadastrar("Cenário 3a - PF nome curto", () =>
  new PessoaFisica("Jo", "12345678909", "1990-05-20", enderecoValido()));
cadastrar("Cenário 3b - PF CPF inválido", () =>
  new PessoaFisica("João Souza", "123.456", "1985-01-10", enderecoValido()));
cadastrar("Cenário 3c - PF nascimento no futuro", () =>
  new PessoaFisica("Ana Lima", "98765432100", "2999-01-01", enderecoValido()));

// Cenário 4: pessoa jurídica inválida (CNPJ curto e razão social vazia)
cadastrar("Cenário 4a - PJ CNPJ inválido", () =>
  new PessoaJuridica("Loja Alfa", "12.345.678/0001", "Alfa LTDA", enderecoValido()));
cadastrar("Cenário 4b - PJ sem razão social", () =>
  new PessoaJuridica("Loja Beta", "12345678000195", "", enderecoValido()));

console.log("\n=== Cadastros válidos ===");
clientes.forEach((c, i) => console.log(`\n#${i + 1}\n${c.exibir()}`));
console.log(`\nTotal de clientes válidos: ${clientes.length}`);
