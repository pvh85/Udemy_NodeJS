const fs = require('fs')
const path = require('path')

// дефолтный mkdir, вторым параметром принимает callback функцию, первым параметром коллбека всегда ошибка
fs.mkdir(path.join(__dirname,'notes'), (err) =>{
   if (err) console.log(err) //throw new Error(err)
   console.log('dir created')
})


//Создание файла, 
//первый параметр путь к файлу, второй данные которые запишутся в файл, третий коллбэк
//Повторный вызов пересоздст файл
fs.writeFile(
    path.join(__dirname,'notes','test.txt'),
    'data',
    (err) =>{
        if (err) throw new Error(err)
        console.log('created')
    }   
)

//Изменение содержимого файла
fs.appendFile(
    path.join(__dirname,'notes','test.txt'),
    '\nappended data',
    (err) =>{
        if (err) throw new Error(err)
    }
)

//Чтение из файла. В коллбэке вернутся данные с типом Buffer, 
//для приведение в человекочитаемы вид, можно несколькоми способами.
// 1)используем обьект Buffer
// 2)Вторым параметром, указав кодировку
fs.readFile(
    path.join(__dirname,'notes','test.txt'),
    'utf-8',
    (err,data) => {
      if (err) throw err
    //   console.log(Buffer.from(data).toString())    
    console.log(data)
    }
)

//rename файла
fs.rename(
    path.join(__dirname,'notes','test.txt'),
    path.join(__dirname,'notes','test2.txt'),
    err=>{
        if (err) throw err
    }
)

