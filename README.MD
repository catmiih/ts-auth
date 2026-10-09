
<a name="readme-top"></a>
<!-- GETTING STARTED -->
## Iniciando o projeto

Segue abaixo os passos para rodar o projeto localmente:

### Pre requisitos
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
   git clone https://github.com/catmiih/ts-auth.git
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
   ```
7. Clone o arquivo .env_example, renomeie para .env e altere a propriedade de acesso ao banco (Altere os campos com os acessos do docker)
    ```js
   DATABASE_URL="postgresql://[user]:[password]@localhost:5432/startproject?schema=public"
   ```
8. Gere uma API KEY de sua escolha e altere no arquivo .env
    ```js
     API_KEY=[my api-key]
     ```
9. Acesse o postman e importe a documentação da API presente na raiz do projeto;

10. Altere as variaveis para o seu localhost (caso tenha alterado) e a api-key para a adicionada no .env;

11. Inicie a migração do banco via Prisma
    ```js
     npx prisma migrate dev
     ```
12. Inicie o projeto
    ```js
     npx ts-node src/config/server.ts
     ```
13. (Opcional) Caso julgue necessário, é possível acessar as informações do banco via PgAdmin
    ```sh
     https://localhost.com:5050
     ```

