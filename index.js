
const app = require('./app/index');


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

/*
    1) ./app/index -   запросы app 
    2) ../app - настроенный app
    3) ../func/func - набор функции обработка данных (date - привод дату в нужный формат)
    4)../bd -  подключение к БД
    5) public - папка в котором находятся статические файлы для передачи их  клиенту
*/  