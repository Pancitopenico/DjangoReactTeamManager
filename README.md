# Django React Team Manager
Django with React creating a system to Manager your Team.

### Useful links
- [Django Rest Framework Docs](https://www.django-rest-framework.org/)
- [Django Rest Knox Docs](https://github.com/James1345/django-rest-knox)
- [Bootstrap Themes](https://www.bootstrapcdn.com/bootswatch/)
- [React](https://reactjs.org/docs/getting-started.html)
- [React Redux](https://redux.js.org/basics/usage-with-react)
- [React Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Webpack](https://webpack.js.org/guides/getting-started/)
- [Axios](https://github.com/axios/axios)

#### API endpoints
- localhost:8000/api/teams/ => (GET) list of all results
- localhost:8000/api/teams/ => (POST) add a new team
- localhost:8000/api/teams/${id}/ => (PUT) update data from team
- localhost:8000/api/teams/${id}/ => (DELETE) delete data from team

#### Json exemple:

```Json5
{
    "name": "Teste8",
    "email": "teste8@teste.com",
    "username": "Testinho8",
    "city": "Testelandia8",
    "daysOfWeek": "Sat",
    "rideInGroup": "Sometimes",
    "posts": 19,
    "albums": 150,
    "photos": 200
}
```
### Testando meu projeto

Este projeto fiz como um aplicação fullstack, sendo o django como backend e o reactjs como frontend, não utilizei o famoso "npx create-react-app my-app" em vez disto fui instalando as dependencias como está descrito na documentação do [React](https://reactjs.org/docs/getting-started.html) e alguns passo a passo que já estou acostumado a utilizar.

#### Instalando a API (BackEnd)
Passo a passo utilizando ubuntu, presumindo que você já tenha o pip, python3, nodejs eo react instalados globalmente na sua máquina. Abra o terminal e utileze os seguintes comandos como especificados.

- Crie um novo ambiente virtual (env) e ative o mesmo:
  - python3 -m venv nomeDoAmbiente

- Ative o ambiente virtual:
  - . nomeDoAmbiente/bin/activate

- Clone o meu projeto do github
  -  `git clone 'https://github.com/Pancitopenico/DjangoReactTeamManager.git'`

- Instalando os requerimentos da API
  - pip install -r requirements.txt
  
- Instalando primeiros passos
  - python3 manage.py makemigrations
  - python3 manage.py migrate
  - python3 manage.py createsuperuser
  - python3 manage.py runserver
  
- Agora provavelmente tudo irá rodar perfeitamente.
  - Abra a seguinte url: http://localhost:8000/ e lá você tera a sua aplicação rodando.
- Utilizando o postman ou outro programa similar você pode acessar os endpoints com a seguinte url, também é possivel acessar esse endpoint pelo navegador utilizando umas das features do Django Rest Framework, porém ele não suporta Nested Relationships, se mesmo assim você não conseguir utilizar você pode criar tudo manualmente pela interface do Django ADMIN, pela url: http://localhost:8000/admin/.
  - localhost:8000/api/teams/ aqui você irá conseguir ver os endpoints

#### Instalando o FrontEnd

- Para gerar a versão final para dar deploy build dos arquivos utilize
  - npm run build

- Caso queira rodar localmente o sistema e fazer alguns testes ou melhorias utilize 'npm run dev', com este comando ao realizar alguma alteração no template com apenas um F5 irá aplicar as atualizações feitas.
  - npm run dev

- Caso haja necessidade de criar outros comandos, vá até o arquivo package.json que está localizado na raiz do projeto e procure por "scripts", lá você podera adicionar outros comandos se achar necessário.

#### IMPORTANTE
- Está é uma aplicação Django rodando Reactjs.
- Para que a aplicação funcione perfeitamente em modo de desenvolvimento é necessario que esteja rodando os 2 servidores, sendo o Django (python3 manage.py runserver) e o Reactjs (npm run dev), já em modo de produção só é necessario o Django.
