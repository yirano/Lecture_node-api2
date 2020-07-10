# Node API 2 Guided Project Starter Code

Guided project starter code for **Node API 2** module.

In this project we will learn how to create a very simple Web API using `Node.js` and `Express`, and cover how to use `Express Routers` to break up the application to make it more maintainable.

## Prerequisites

- a REST client like [insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.

Please follow along as the instructor builds the API step by step.

---
## Notes

| Action           | Non RESTful way | RESTful Design |
| :--------------- | :-------------- | :------------- |
| Add a client     | /newclient      | POST /clients  |
| List all clients | /clientlist     | GET /clients   |

Organizing API Files

#### By type
  - /routes
    - clientsRouter.js
    - profilesRouter.js
  - /models
  - /tests
    - clients.test.js
    - profiles.test.js
  
#### By feature/resource
  - /clients
    - client.router.js
    - client.model.js
    - client.test.js
  - /vehicles
  - /profiles

#### Hybrid
  - Components
    - Users
      - UserList.js
      - UserDetails.js
      - NewUser.js
  
  - Users
    - reducers
    - action
    - components

---
### Four things you need in Router

1. Import the router into your index.js 
2. Concatenate the urls inside the -router.js
3. Put everything on the router from the server *
4. Export the router

---

https://www.google.com
/search
? --> marks the beginning of the query string
source=hp --> key/value pair
& --> separates key/value pairs
ei=tacEX4
&
q=mdn+query+string
&oq=mdn+query+string

```js
req.query = {
  source: 'hp',
  ei: 'tacEX4',
  q: 'mdn+query+string',
}
```
---


URL --> 'http://localhost:4000/api/hubs?page=1&limit=4'

```js
{
    "query": {
        "page": "1",
        "limit": "4"
    },
    "data": [
        {
            "id": 1,
            "name": "api-1",
            "created_at": "2019-02-18 13:53:36",
            "updated_at": "2019-02-18 13:53:36"
        },
        {
            "id": 2,
            "name": "api-2",
            "created_at": "2019-02-18 13:53:36",
            "updated_at": "2019-02-18 13:53:36"
        },
        {
            "id": 3,
            "name": "api-3",
            "created_at": "2019-02-18 13:53:36",
            "updated_at": "2019-02-18 13:53:36"
        },
        {
            "id": 4,
            "name": "api-4",
            "created_at": "2019-02-18 13:53:36",
            "updated_at": "2019-02-18 13:53:36"
        }
    ]
}
```

---
### Ways a client can send data to server

  - req.params
  - req.query
  - req.body
  - req.headers

---

### Sub Routes
Chat 
- org
  - channels
    - messages
      - reactions --> emoji

- /orgs       CRUD
- /channels   {orgid: 1, ...channelData} POST , GET /orgs/23/channels; DELETE /channels/23
- /messages   {}
- /reactions  ->>> sub route candidate, it does not make sense outside of a message
- /emojis