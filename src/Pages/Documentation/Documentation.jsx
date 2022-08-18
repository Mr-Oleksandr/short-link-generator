import React from 'react';

const Documentation = () => {
    return (
        <div>
            <h4>API</h4>
            <p> (інтерфейс програмування додатків) - це набір інструментів для автоматизації роботи з cервісом «Short Link».</p>
            <h4>Точки входу:</h4>
            <p>JSON - http://localhost:4000/api/</p>
            <h4>Формат запиту - POST GET</h4>
            <p>Формат, обов'язково повинний бути вказаний нижнім регістром (маленькими літерами), наприклад  http://localhost:4000/api/ </p>
            <p>Уразі неправильного запиту повертається статус 500</p>
            <h4>Регістрація на сервісі Short link</h4>
            <h5>Тип запиту POST</h5>
            <h6>content-type['application/json']</h6>
            <table>
                <thead>
                <tr>
                    <th>API URL</th>
                    <th>Параметр</th>
                    <th>Тип</th>
                    <th>Опис</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>/api/auth/register</td>
                    <td>
                        email*
                    </td>
                    <td>STRING</td>
                    <td dangerouslySetInnerHTML={{__html:'{email:asd@asd.asd, password:1234}'}}>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>password*</td>
                    <td>STRING</td>
                    <td dangerouslySetInnerHTML={{__html:'{email:asd@asd.asd, password:1234}'}}></td>
                </tr>
                </tbody>
            </table>
            <h6 dangerouslySetInnerHTML={{__html:' Відповідь:{"message":"Ви успішно зареєстровані"}'}}>

            </h6>
            <h4>Авторизація на сервісі Short link</h4>
            <h5>Тип запиту POST</h5>
            <h6>content-type['application/json']</h6>
            <table>
                <thead>
                <tr>
                    <th>API URL</th>
                    <th>Параметр</th>
                    <th>Тип</th>
                    <th>Опис</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>/api/auth/login</td>
                    <td>
                        email*
                    </td>
                    <td>STRING</td>
                    <td dangerouslySetInnerHTML={{__html:'{email:asd@asd.asd, password:1234}'}}></td>
                </tr>
                <tr>
                    <td></td>
                    <td>password*</td>
                    <td>STRING</td>
                    <td dangerouslySetInnerHTML={{__html:'{email:asd@asd.asd, password:1234}'}}></td>
                </tr>
                </tbody>
            </table>
            <h6 dangerouslySetInnerHTML={{__html:'Віповідь:{token: "eyJhbGciOiJIU..."\n' +
                    'userId: "62f3f5978ec1966e6e...}'}}></h6>
            <h4>Генерація коротокого посилання на сервісі Short link</h4>
            <h5>Тип запиту POST</h5>
            <table>
                <thead>
                <tr>
                    <th>API URL</th>
                    <th>Параметр</th>
                    <th>Тип</th>
                    <th>Опис</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>/api/link/generate</td>
                    <td>
                        from* <br/>
                       <span dangerouslySetInnerHTML={{__html:' headers:{Authorization:`Bearer token`}'}}></span>
                    </td>
                    <td>STRING</td>
                    <td dangerouslySetInnerHTML={{__html:'{from: "https://ru.wikipedia.org/wiki/Q"}'}}>
                    </td>
                </tr>
                </tbody>
            </table>
            <h6 dangerouslySetInnerHTML={{__html:'Віповідь:{link: "http://localhost:4000/asd.link/pI4Vfx66G"}'}}></h6>
            <h4>Пошук короткого посилання</h4>
            <h5>Тип запиту POST</h5>
            <table>
                <thead>
                <tr>
                    <th>API URL</th>
                    <th>Параметр</th>
                    <th>Тип</th>
                    <th>Опис</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>/api/link/from</td>
                    <td>
                        to* <br/>
                        <span dangerouslySetInnerHTML={{__html:' headers:{Authorization:`Bearer token`}'}}></span>
                    </td>
                    <td>STRING</td>
                    <td dangerouslySetInnerHTML={{__html:'{to: "http://localhost:4000/asd.link/pI4Vfx66G"}'}}>
                    </td>
                </tr>
                </tbody>
            </table>
            <h6 dangerouslySetInnerHTML={{__html:'Віповідь:{link: "https://ru.wikipedia.org/wiki/Q"}'}}></h6>
        </div>
    );
};

export default Documentation;
