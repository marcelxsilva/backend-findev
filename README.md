<h1 align="center">Welcome to Back-End Findev 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/marcelxsilva" target="_blank">
    <img alt="Twitter: marcelxsilva" src="https://img.shields.io/twitter/follow/marcelxsilva.svg?style=social" />
  </a>
</p>

> Aplicacao Desenvolvida na Semana Omnistack da Rocketseat

### Descrição
Este projeto é o backend de uma aplicacao onde possui a finalidade de mostrar desenvolvedores próximos filtrando pelas tecnologias que dominam.

## Install

```sh
yarn 
```

## Usage

```sh
yarn dev
```

### Tecnologias Utilizadas 

  - NodeJs
  - Express
  - Nodemon
  - Mongoose

### Rotas
#### POST <code>/devs</code> 
Responsavel por cadastrar novos devs no banco de dados.

Body - Json:
```json
{
	"github_username":"diego3g",
	"techs": "ReactJ, ReactNative",
	"latitude": -23.6202648,
	"longitude":-46.8155989
}
```

#### GET <code>/devs</code> 
Exibe todos os Devs cadastrados no banco.


#### GET <code>/search</code> 

Busca os Devs proximos baseado na geolocalizacao e tecnologias.

Params:

longitude: number

latitude: number

techs: react, react native



## Author

Marcelo Silva

* Twitter: [@marcelxsilva](https://twitter.com/marcelxsilva)

***
Give a ⭐️ if this project helped you!
