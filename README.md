<h2 align="center">Desafio Técnico Igma</h2>
<p align="center">Backend</p>

---

#### :bookmark_tabs: Índice

- [Desafio Técnico](#zap-desafio-técnico)

- [Pré Requisitos de Execução (Servidor)](#zap-startup)

- [Iniciando a API](#zap-iniciando-a-api)

- [Endpoints](#zap-endpoints)

- [Tecnologias Utilizadas](#zap-tecnologias-utilizadas)

- [Live Preview](https://glass-blue-login.netlify.app/)

---

#### :zap: Desafio técnico

Escrever uma API de cadastro de clientes 

#### Informações técnicas

##### Endpoints

* Endpoint para criar clientes (esse endpoint deve retornar um 422 caso o cpf seja inválido)

* Endpoint para buscar cliente por CPF

* Endpoint para listar todos os clientes (usando paginação)

##### Regras para validação do CPF

* O CPF pode ser passado em dois formatos:

* 999.999.999-00 (com máscara)

* 99999999900 (somente números)

* Algorítmo de validação: [Macoratti](https://www.macoratti.net/alg_cpf.htm#:~:text=O)


##### Requisitos

* Escrever o próprio algoritmo de validação do CPF (não usar bibliotecas externas)

* Utilize uma linguagem que possibilite o uso de orientação a objetos como Java, C#, Python, Javascript, etc

* Escolha o banco de dados de sua preferência

---

#### :zap: Pré Requisitos de Execução (Servidor)

* GIT

* Node.JS

* Docker

---

#### :zap: Iniciando a API

* Faça um clone do diretório para o servidor de execução com o comando `git clone https://github.com/lipex360x/igma.git`

* Execute a instalaçao das dependências com o comando `npm install`

* Faça uma cópia do arquivo **.env.example** renomeando para **.env** ou configure as seguintes variáveis diretamente no ambiente seguindo o arquivo de exemplo:
  * API_PORT
  * POSTGRES_DB
  * POSTGRES_USER
  * POSTGRES_PASSWORD
  * DATABASE_URL

---

#### :zap: Endpoints

###### cadastrar cliente
```md
[POST] /accounts
```

* payload

```ts
  name: string
  cpf: string
  birthDate: Date
```



###### exibir cliente

```md
[GET] /accounts/:cpf
```



###### listar clientes

```md
[GET] /accounts
```

* query params

```ts
  page?: number 
  perPage?: number 
```

---

#### :zap: Tecnologias Utilizadas

```
  Node.JS
  Express
  Typescript
  Prisma ORM
  Swagger
```
