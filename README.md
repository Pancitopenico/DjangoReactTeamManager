# Django React Team Manager
Django with React creating a system to Manager your Team.

#### Useful links
- [Django Rest Framework Docs](https://www.django-rest-framework.org/)
- [Django Rest Knox Docs](https://github.com/James1345/django-rest-knox)
- [Bootstrap Themes](https://www.bootstrapcdn.com/bootswatch/)
- [React](https://reactjs.org/docs/getting-started.html)
- [React Redux](https://redux.js.org/basics/usage-with-react)
- [Webpack](https://webpack.js.org/guides/getting-started/)
- [Axios](https://github.com/axios/axios)

#### API endpoints
- localhost:8000/api/teams/ => (GET) list of all results
- localhost:8000/api/teams/ => (POST) add a new team
- localhost:8000/api/days/${id} => (PUT) update data from team
- localhost:8000/api/days/${id}/ => (DELETE) delete data from team

#### Json exemple:

```Json5
{
        "name": "Teste",
        "email": "teste@teste.com",
        "username": "Testinho",
        "city": "Testelandia",
        "daysOfWeek": [
            {
                "dayOfWeek": "Mon"
            },
            {
                "dayOfWeek": "Thu"
            },
            {
                "dayOfWeek": "Sat"
            }
        ],
        "posts": 10,
        "albums": 15,
        "photos": 18
    }
```
