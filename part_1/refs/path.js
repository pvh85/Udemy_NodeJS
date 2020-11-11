const path = require('path')

//Полный путь к файлу
console.log(__filename)
//Относительный путь к файлу
console.log(path.basename(__filename))

//Путь к папке с файлом
console.log(path.dirname(__filename))

//расширение файла
console.log(path.extname(__filename))

//Возвращает обьект, со всей инфой по файлу
console.log(path.parse(__filename))

//path.join позволяет строить пути (работает как cd)
console.log(path.join(__dirname, 'test','????'))

// ".." отработает как cd ..
console.log(path.join(__dirname, '..','????'))

// Даст относительный путь для ????
console.log(path.resolve(__dirname,'test','/????'))


/*
 ДОКУМЕНТАЦИЮ ГУГЛИ
*/