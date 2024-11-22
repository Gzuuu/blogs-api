# Blogs API

## Descrição Breve

A **Blogs API** é uma aplicação que permite criar, editar e visualizar blogs e seus respectivos posts, conectando o backend ao frontend. O projeto utiliza o modelo MSC (Model, Service, Controller) para melhor organização do código, garantindo manutenibilidade e escalabilidade. Além disso, implementa práticas de segurança como o uso de variáveis de ambiente e tokens com hashes via `jsonwebtoken`.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gzuuu/blogs-api.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd blogs-api
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Certifique-se de que o Docker está instalado e execute o comando para subir os contêineres:
   ```bash
   docker compose up
   ```
5. Inicie o servidor:
   ```bash
   npm start
   ```
6. Acesse a aplicação em `http://localhost:3001` ou use uma extensão como ThunderClient para realizar requisições.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MySQL**
- **Docker**
- **Docker Compose**
- **JWT (jsonwebtoken)**
- **dotenv**

## Funcionalidades

- **CRUD** (Create, Read, Update, Delete) para blogs e posts.
- Integração com banco de dados utilizando Docker.
- Autenticação e segurança com tokens JWT.
- Organização do código no padrão MSC (Model, Service, Controller).

## Aprendizados Principais

- Estruturação de projetos backend utilizando o padrão MSC.
- Uso de variáveis de ambiente para segurança com `process.env`.
- Criação e verificação de tokens seguros com `jsonwebtoken`.
- Integração do backend com ferramentas de teste como ThunderClient.
- Configuração e gerenciamento de contêineres com Docker.
