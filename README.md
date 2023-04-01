
## Documentação da API

#### Retorna uma lista de todos os locais cadastrados.

```http
  GET /places
```
#### Exemplo de retorno.
```json
[
    {
      "id": 1,
      "name": "Prefeitura da Trindade",
      "contact": "4002-8922",
      "opening_hours": "Aberto das 9h às 18h",
      "description": "....",
      "latitude": "-23.5505",
      "longitude": "-46.6333",
      "createdAt": "2023-04-01T02:07:26.528Z",
      "updatedAt": "2023-04-01T02:07:26.528Z"
    }
]
```

#### Cria um novo local.

```http
  POST /places
```
#### Parâmetros

| Nome          | Tipo   | Descrição                     |
|---------------|--------|-------------------------------|
| name          | string | Nome do local                 |
| contact       | string | Número de telefone do local   |
| opening_hours | string | Horário de funcionamento      |
| description   | string | Descrição do local            |
| latitude      | number | Latitude do local             |
| longitude     | number | Longitude do local            |


#### Exemplo de requisição

```json
{
	"name": "Nome do Local",
	"contact": "(00) 0000-0000",
	"opening_hours": "Segunda a Sexta: 9h às 18h",
	"description": "Descrição do Local",
	"latitude": -23.5505,
	"longitude": -46.6333
}
```

#### Exemplo de resposta

```json
{
	"id": 1,
	"name": "Prefeitura da Trindade",
	"contact": "4002-8922",
	"opening_hours": "Aberto das 9h às 18h",
	"description": "....",
	"latitude": "-23.5505",
	"longitude": "-46.6333",
	"updatedAt": "2023-04-01T03:03:39.907Z",
	"createdAt": "2023-04-01T03:03:39.907Z"
}
```
