# Projeto-Gatos

Este projeto é uma aplicação para gerenciar e visualizar informações sobre gatos. Ele é composto por um backend em Java utilizando um banco de dados PostgreSQL e um frontend em React com TypeScript, criado com Vite.

## Funcionalidades

- Backend (Java):
  - Permite a inserção do nome do gato, lugar e foto (a foto deve ser fornecida por uma URL).
  - Armazena os dados em um banco de dados PostgreSQL.
  - Utilizei Spring Boot para facilitar o desenvolvimento.
  
- Frontend (React com TypeScript e Vite):
  - Exibe uma galeria de imagens de gatos em um grid.
  - Utiliza hooks e componentes para interagir com o backend e exibir as informações.

## Estrutura do Projeto

```
/backend
    └── src
        └── main
            └── java
                └── com
                    └── abbadia
                        └── gatos
                            └── controller
                                └── GatoController.java
                            └── entities
                                └── Gatos.java
                                └── GatosResponseDTO.java
                                └── GatosRequestDTO.java
                            └── repository
                                └── GatosRepository.java
                            └── Application.java
    └── pom.xml
/frontend
    └── src
        └── components
            └── CatGrid.tsx
        └── hooks
            └── useGatos.ts
        └── interfaces
            └── Gato.ts
    └── public
    └── package.json
    └── vite.config.ts
    └── index.html
HELP.md
.gitignore
README.md
```

## Configuração do Banco de Dados

1. **Instale e configure o PostgreSQL**: Certifique-se de ter o PostgreSQL instalado e em execução no seu ambiente local.

2. **Crie um banco de dados**: Você pode criar um banco de dados chamado `gatos` (As tabelas serão geradas automaticamente)

3. **Configure as propriedades do banco de dados**:
   - No `src/main/resources/application.properties`, configure as propriedades do PostgreSQL:
     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5432/gatos
     spring.datasource.username=seu_usuario
     spring.datasource.password=sua_senha

     spring.jpa.hibernate.ddl-auto=create (primeira vez), depois alterar de "create"para "update" conforme abaixo: 
     --- spring.jpa.hibernate.ddl-auto=update ----
     ```

## Como Executar

### Backend

1. Navegue até o diretório `backend`:
    ```bash
    cd backend
    ```

2. Compile e execute a aplicação:
    ```bash
    mvn spring-boot:run
    ```

3. O backend estará disponível em `http://localhost:8080`.

### Frontend

1. Navegue até o diretório `frontend`:
    ```bash
    cd frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

4. O frontend estará acessível em `http://localhost:5173`.

## Endpoints do Backend

### Inserir um Gato

- **URL:** `POST http://localhost:8080/gatos`
- **Corpo da Requisição:**
    ```json
    {
        "nomeGato": "Nome do Gato",
        "foto": "URL da Imagem",
        "lugar":"Local da foto. Exemplo: Casa"
    }
    ```

### Exibir Gatos

- **URL:** `GET http://localhost:8080/gatos`

Retorna uma lista de gatos com suas informações e URLs das imagens.

## Exemplos de Uso

1. **Inserir um Gato**: Utilize um cliente HTTP (como Postman ou cURL) para fazer um `POST` para `http://localhost:8080/gatos` com o corpo JSON contendo o nome e a URL da imagem do gato.

2. **Visualizar Gatos**: Acesse o frontend em `http://localhost:5173` para visualizar a galeria de gatos com as imagens inseridas.

## Notas

- Este projeto é uma implementação básica e não inclui funcionalidades completas de CRUD (Apenas GET E POST), focando apenas na inserção e visualização de dados.
- Para executar o projeto, você precisa ter o Java, Maven, Node.js, e PostgreSQL instalados em seu ambiente.
