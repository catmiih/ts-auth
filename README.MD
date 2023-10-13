
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/catmiih/server-kitsura">
    <img src="https://i.imgur.com/Snb9Vvk.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Projeto Kitsura</h3>

  <p align="center">
    API do projeto Kitsura
    <br />
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://i.imgur.com/pDjW9gt.png)
Bem-vindo ao Kitsura, sua plataforma abrangente de controle financeiro de mercado. Com Kitsura, você mergulha no mundo das finanças com uma ferramenta poderosa que oferece uma visão detalhada e precisa dos seus investimentos em ações.
<br>
"Kitsura". Essa palavra combina "Kitsu" da raposa kitsune com "ura", que é uma parte da palavra japonesa "uraomote" usada para descrever os aspectos ocultos e visíveis de uma situação. "Kitsura" pode representar a capacidade do seu sistema de revelar e gerenciar os aspectos ocultos do mercado financeiro.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Iniciando o projeto

Segue abaixo os passos para rodar o projeto localmente:

### Pre requisitos

Para executar o projeto há alguns pré-requisitos, sendo eles:
* npm
  ```sh
  npm install npm@latest -g
  ```

* docker & docker-compose
  ```sh
  apt-get install docker docker-compose
  ```

### Configuração

1. Clone o repositório
   ```sh
   git clone https://github.com/catmiih/server-kitsura.git
   ```
2. Acesse o arquivo docker-compose.yml e personalize os campos como preferir
  ```js
   environment:
      POSTGRES_USER: [username]
      POSTGRES_PASSWORD: [password]
      POSTGRES_DB: [databasename]
    ~
    //Para acesso ao pgAdmin
     environment:
      PGADMIN_DEFAULT_EMAIL: [email]
      PGADMIN_DEFAULT_PASSWORD: [password]
   ```
3. Execute a imagem docker
    ```sh
   docker-compose up -d
   ```
4. Instale os pacotes NPM
   ```sh
   npm install
   ```
5. Inicie o Prisma
   ```sh
   npx prisma init
   ```
6. Clone o arquivo .env_example, renomeie para .env e altere a propriedade de acesso ao banco (Altere os campos com os acessos do docker)
    ```js
   DATABASE_URL="postgresql://[user]:[password]@localhost:5432/kitsuraproject?schema=public"
   ```
6. Gere uma API KEY de sua escolha e altere no arquivo .env
  ```js
   API_KEY=[my api-key]
   ```
7. Acesse o postman e importe a documentação da API (kitsura-api.json) presente na raiz do projeto
8. Altere as variaveis para o seu localhost (caso tenha alterado) e a api-key para a adicionada no .env
9. Inicie a migração do banco via Prisma
    ```sh
   npx prisma migrate dev
   ```
10. Faça o deploy dos dados para o banco de dados
  ```sh
   npx prisma migrate deploy
   ```
11. Inicie o projeto
    ```sh
   npx ts-node src/config/server.ts
   ```
12. (Opcional) Caso julgue necessário, é possível acessar as informações do banco via PgAdmin
  ```sh
   https://localhost.com:5050
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
