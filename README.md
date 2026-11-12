# Cadastro de Clientes da Electronic

**Estudante:** _SEU NOME COMPLETO_ — _Matrícula/Turma_
**Atividade 01** — Paradigmas de programação / POO em JavaScript

Módulo de cadastro de clientes (pessoa física e jurídica) para o e-commerce da Electronic, desenvolvido para a Appfull.

## Estrutura

```
index.js                 # testes / ponto de entrada
src/Endereco.js
src/Pessoa.js            # classe base
src/PessoaFisica.js      # extends Pessoa
src/PessoaJuridica.js    # extends Pessoa
diagrama-classes.drawio  # diagrama UML (editável no Draw.io)
diagrama-classes.png     # imagem do diagrama (exportar do Draw.io)
```

## Como executar

Requisito: Node.js instalado.

```
node index.js
```

## Diagrama de classes

![Diagrama de classes](diagrama-classes.png)

## Regras de validação

- Nome com ao menos 3 caracteres.
- CPF com 11 dígitos e CNPJ com 14 (pontos, traço e barra são ignorados).
- Data de nascimento válida e não futura.
- Razão social obrigatória.
- Erros são lançados com `throw` nos setters e tratados com `try/catch`; o programa nunca é interrompido por um cadastro inválido.

## Evidências de teste

Cenários: PF válida, PJ válida, PF inválida (3 casos) e PJ inválida (2 casos).

```
=== Cadastrando clientes ===
✔ Cenário 1 - PF válida: cadastrado com sucesso.
✔ Cenário 2 - PJ válida: cadastrado com sucesso.
✘ Cenário 3a - PF nome curto: O nome deve ter ao menos 3 caracteres.
✘ Cenário 3b - PF CPF inválido: O CPF deve ter 11 dígitos.
✘ Cenário 3c - PF nascimento no futuro: A data de nascimento não pode estar no futuro.
✘ Cenário 4a - PJ CNPJ inválido: O CNPJ deve ter 14 dígitos.
✘ Cenário 4b - PJ sem razão social: A razão social é obrigatória.

=== Cadastros válidos ===

#1
[Pessoa Física]
Nome: Maria Silva
Endereço: Av. Salgado Filho, 1500 - Natal/RN
CPF: 12345678909
Nascimento: 20/05/1990

#2
[Pessoa Jurídica]
Nome: Tech Store
Endereço: Av. Salgado Filho, 1500 - Natal/RN
CNPJ: 12345678000195
Razão social: Tech Store Comércio LTDA

Total de clientes válidos: 2
```
