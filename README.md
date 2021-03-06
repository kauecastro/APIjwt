# APIjwt

## Sobre a API  

A API para autenticação foi desenvolvida baseando-se no padrão JWT, cujo faz a validação dos dados do usuário e retorna um token, que deverá ser expirado em 1 minuto. O projeto foi implementado ultilizando as tecnologias Node.js e MongoDB para banco de dados.

## Pre-Requisitos

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

Node.Js: Caso não tenha, basta realizar o download: https://www.mongodb.com/download-center#community

## Instalação das dependências

*Clone o repositório: `git clone https://github.com/kauecastro/APIjwt.git`

*Acesse o diretório do projeto: `cd APIjwt`

*Instale as dependências: `npm install`

*Para iniciar o servidor basta estar no diretório "APIjwt" e escrever o comando abaixo no terminal: `node index.js`

## Dependências do projeto

Segue abaixo uma breve explicação do motivo de usarmos cada um desses frameworks

express NPM: https://www.npmjs.com/package/express USO: Para o servidor saber antender as requisições.

body-parser NPM: https://www.npmjs.com/package/body-parser USO: Será usado para poder receber o JSON entregue na chamada a API

mongoose NPM: https://www.npmjs.com/package/mongoose USO: Será usado para conectar a base de dados MongoDB
 
## Endpoints

/authentication - POST (Mandar no corpo da requisição os parametros login e senha.) 
EX usando o fiddler:

Headers
```
User-Agent: Fiddler
Host: localhost:3000
Content-Length: 49
Content-Type: application/json
```
Request BODY
```
{
    "login": "teste",
    "senha": "teste"
}
```
/getproducts - GET
