## Descrição

Desafio Nest.js da Imersão Full Cycle 14.


## Rodar a aplicação

### nestjs

Instale as dependências:

```bash
npm install
```

Rode o container do banco de dados com o comando:

```bash
docker compose up
```

Rode o comando para o `prisma` criar os arquivos necessários:

```bash
npx prisma generate
```

Rode o comando para o `prisma` criar realizar a `migrate`:

```bash
npx prisma migrate dev
```

Para rodar a aplicação rode o comando:

```bash
npm run start:dev
```

Existe um arquivo na raiz do projeto Nest.js, o `api.http` que você pode usar para testar a aplicação com o plugin do VSCode [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client). Quando enviar dados na requisição, o Nest.js consumirá a mensagem e mostrará no console.
