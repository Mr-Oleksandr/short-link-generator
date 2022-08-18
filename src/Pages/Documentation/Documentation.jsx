import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
const Documentation = () => {
  /* eslint-disable */
  const text = `
#### API

(інтерфейс програмування додатків) - це набір інструментів для автоматизації роботи з cервісом «Short Link».

#### Точки входу:

JSON - http://localhost:4000/api/

#### Формат запиту - POST GET

Формат, обов'язково повинний бути вказаний нижнім регістром (маленькими літерами), наприклад http://localhost:4000/api/

Уразі неправильного запиту повертається статус 500

#### Регістрація на сервісі Short link

##### Тип запиту POST

###### content-type\\['application/json'\\]

| API URL            | Параметр  | Тип    | Опис                                       |   |
|--------------------|-----------|--------|--------------------------------------------|---|
| /api/auth/register | email*    | STRING | {"email":"asd@asd.asd", "password":"1234"} |   |
|                    | password* | STRING | {"email":"asd@asd.asd", "password":"1234"} |   |
|                    |           |        |                                            |   |

###### Відповідь:{"message":"Ви успішно зареєстровані"}

#### Авторизація на сервісі Short link

##### Тип запиту POST


| API URL            | Параметр  | Тип    | Опис                                       |   |
|--------------------|-----------|--------|--------------------------------------------|---|
| /api/auth/login    | email*    | STRING | {"email":"asd@asd.asd", "password":"1234"} |   |
|                    | password* | STRING | {"email":"asd@asd.asd", "password":"1234"} |   |
|                    |           |        |                                            |   |

###### Віповідь:{token: "eyJhbGciOiJIU...", 'userId: "62f3f5978ec1966e6e...}

#### Генерація коротокого посилання на сервісі Short link

##### Тип запиту POST

| API URL            | Параметр                                        | Тип    | Опис                                        |   |
|--------------------|-------------------------------------------------|--------|---------------------------------------------|---|
| /api/link/register | from*   headers:{Authorization:\`Bearer token\`}| STRING | {"from": "https://ru.wikipedia.org/wiki/Q"}   |   |


###### Віповідь:{link: "http://localhost:4000/asd.link/pI4Vfx66G"}

#### Пошук короткого посилання на сервісі Short link

##### Тип запиту POST

| API URL            | Параметр                                        | Тип    | Опис                                           |   |
|--------------------|-------------------------------------------------|--------|----------------------------------------------- |---|
| /api/link/from | to*   headers:{Authorization:\`Bearer token\`}  | STRING |{"to": "http://localhost:4000/asd.link/pI4Vfx66G"}  |   |

###### Віповідь:{link: "https://ru.wikipedia.org/wiki/Q"}


`;
  return (
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]}/>
  );
};

export default Documentation;
