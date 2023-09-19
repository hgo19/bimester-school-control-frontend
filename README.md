# Bimester School Control Frontend

### Introdução

Bimester School Control Frontend que busca ser um dashboard do controle bimestral de notas de alunos. Alimentada por uma API, nela você consegue adicionar novos resultados bimestrais, excluir resultados ja existentes e visualizar todos os resultados disponíveis. A aplicação necessita de uma API para rodar.

### Tecnologias Utilizadas

Para desenvolvimento da aplicação foi utilizado:

- Typescript
- React
- Axios
- Vite

### Rodando a Aplicação

1. Clone o repositório

```
git clone git@github.com:hgo19/bimester-school-control-backend.git
```

2. Vá para o diretório do repositório e instale as dependências

```
cd bimester-school-control-frontend
npm install
```

3. Tenha certeza de atualizar a URL da sua API em: `src/services/api.ts` para a rota em que seu backend está funcionando. Para isso altere a porta na variavel `PORT` nesse arquivo.

4. Por ultimo rode o comando:

```
npm start
```

### Mas qual backend utilizar?

Caso queira rodar a aplicação completa, tem um outro repositório em que é feito o backend estruturado e com os retornos adequados para o front. [CLIQUE AQUI!](https://github.com/hgo19/bimester-school-control-backend)
