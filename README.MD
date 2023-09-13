
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/catmiih/server-kitsura">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Projeto Kitsura</h3>

  <p align="center">
    API do projeto Kitsura
    <br />
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://example.com)
Bem-vindo ao Kitsura, sua plataforma abrangente de controle financeiro de mercado. Com Kitsura, você mergulha no mundo das finanças com uma ferramenta poderosa que oferece uma visão detalhada e precisa dos seus investimentos em ações.
<br>
"Kitsura". Essa palavra combina "Kitsu" da raposa kitsune com "ura", que é uma parte da palavra japonesa "uraomote" usada para descrever os aspectos ocultos e visíveis de uma situação. "Kitsura" pode representar a capacidade do seu sistema de revelar e gerenciar os aspectos ocultos do mercado financeiro.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Iniciando o projeto

Para colocar a api para rodar é simples, apenas siga os passos a seguir.

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

### Installation

1. Clone o repositório
   ```sh
   git clone https://github.com/catmiih/kitsura.git
   ```
2. Execute a imagem docker
    ```sh
   docker-compose up -d
   ```
3. Instale os pacotes NPM
   ```sh
   npm install
   ```
4. Inicie o Prisma
   ```sh
   npx prisma init
   ```
5. Adicione ao .env
    ```js
   DATABASE_URL="postgresql://postgres:[password]@localhost:5432/kitsuraproject?schema=public"
   ```
6. Faça a migração do seu banco via Prisma
    ```sh
   npx prisma migrate dev
   ```

5. Inicie o projeto
    ```sh
   npx ts-node src/config/server.ts
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>