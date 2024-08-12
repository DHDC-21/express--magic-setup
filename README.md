
# MIDDLEWARE DE SETUP AUTOMÁTICO + TEMPLATE EJS ESTILO O REACT

## Objetivos:

- Imitar o funcionamento do React usando o EJS
- Criar um setup de configuração automático semelhante ao do wordpress e gitea
- Evitar código repetitivo
- Melhorar a estruturação, arquitetura e organização do projeto

## Tecnologias utilizadas:

Essenciais: `NodeJS`, `Express`, `EJS`, `Sequelize`, `dotenv`, `cookie-parser`.

Não-Essenciais: `Bootstrap`, `Bootstrap-icons`, `ip`, `morgan`, `noodemon`

## Como utilizar o projeto?

### Instalação do projeto:

Após instalar o NodeJS, utilize os seguintes comando no terminal:

```bash
git clone https://github.com/DHDC-21/express-magic-setup
```

```bash
cd express-magic-setup
```

```bash
npm install
```

```bash
npm start
```

### Como funciona:

Minha ideia era um seguinte, fazer com que de forma gráfica, ou seja, através do navegador o usuário pudesse configurar as variáveis de ambiente para acessar o banco de dados e criar um usuário administrador para sistemas de login.

Dessa forma foi desenvolvido um middleware para realizar essa configuração inicial no sistema fazendo as seguintes análises:

1. Verifica se o arquivo .env existe. Caso não exista acione a rota `/setup/database` para configurar as variáveis de ambiente do projeto, caso contrário então prossiga.

2. Testa a conexão com o banco de dados. Caso não der certo então acione a rota `/setup/database`, caso contrário então prossiga

3. Verifica se a tabela `Usuario` existe no sistema. Caso não exista, então crie a tabela, caso contrário então prossiga.

4. Busque por um usuário administrador no sistema. Caso não exista, acione a rota `/setup/admin` para criar um novo usuário administrador, caso exista então saia do middleware.

Antes disso, eu estava testando formas de trabalhar com o EJS que fosse semelhante ao React, e acabai juntando os dois projetos em um, veja:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>
		<%-title%> <!-- Tag ejs -->
	</title>

    <link rel="stylesheet" href="/css/bootstrap.min.css">    
    <link rel="stylesheet" href="/bootstrap-icons.min.css">

    <script src="/js/bootstrap.min.js"></script>
</head>
<body>
	<%- include(page) %> <!-- Tag ejs -->
	<!-- Renderiza o arquivo que contenha o caminho igual o passado pela variável "page" -->
</body>
</html>
```

Com isso é possível padronizar a estrutura base do html e suas importações comuns de **css** e **js**, além disso caso venha a utilizar o `i18n` fica mais simples dar manutenção na estrutura base do html alterando apenas a tag `<html lang="<%- lang %>">`.
