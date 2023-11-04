# Aplicação Exemplo

## Passos de Configuração e Estruturação

#### Inicie um novo projeto NodeJS:
```bash
npm init -y
```

#### Inicie um novo projeto Typescript:
```
npx tsc --init 
```

#### Instale as dependências de desenvolvimento:
```bash
npm i -D typescript tsx tsup eslint dotenv @types/node @rocketseat/eslint-config
```

#### Instale as dependências de produção:
```bash
npm i fastify zod
```

#### Crie o arquivo _.eslintrc.json_ com o seguinte conteúdo:
```json
{
  "extends": [
    "@rocketseat/eslint-config/node"
  ],
  "rules": {
    "camelcase": "off",
    "no-useless-return": "off",
    "no-useless-constructor": "off"
  }
}
```

#### Crie o arquivo _.env_ com o seguinte conteúdo:
```bash
PORT=3333
```

#### Crie a seguinte estrutura de pastas (a partir da raiz do projeto):
```bash
- src
  - config
  - database
  - env
  - http
    - controllers
      - users
  - models
  - repositories
    - in-memory
  - use-cases
    - factories
    - errors
```

#### Adicione os scripts principais dentro do arquivo _package.json_:
```json
{
  "dev": "tsx watch src/server.ts",
  "lint": "eslint src --ext .ts --fix", 
  "build": "tsup src --minify --out-dir build"
}
```
