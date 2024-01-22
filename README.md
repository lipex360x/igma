<h2 align="center">Desafio Técnico Igma</h2>
<p align="center">Backend</p>

---

#### :bookmark_tabs: Índice

- [Desafio Técnico](#zap-desafio-técnico)

- [Pré Requisitos de Execução (Servidor)](#zap-pré-requisitos-de-execução-servidor)

- [Iniciando a API](#zap-iniciando-a-api)

- [Endpoints](#zap-endpoints)

- [Execução dos Tests](#zap-execução-dos-tests)

- [Tecnologias Utilizadas](#zap-tecnologias-utilizadas)

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

* Docker Compose

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
  
* Execute o comando `docker-compose up -d` para que o banco de dados seja executado
* Execute o comando `npx prisma migrate deploy`
* Execute o comando `npm run build` para gerar o build da aplicação
* Execute o comando `npm start` para iniciar a API

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

#### :zap: Execução dos Tests

* Execute o comando `npm test` para executar os tests da aplicação

* Acesse o endereço `http://localhost:3001/api-docs` para visualizar a documentação da API no Swagger

* Caso tenha a extenção REST Client (`humao.rest-client`) instalada no VSCode, será possível testar as rotas executando as requisições no arquivo **client.http**

---

#### :zap: Tecnologias Utilizadas

```
  Node.JS
  Express
  Typescript
  Prisma ORM
  Swagger
```

---

:point_up_2: [Voltar para o Índice](#bookmark_tabs-índice)
