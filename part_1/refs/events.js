const EventEmitter = require('events')

class Logger extends EventEmitter{
  log(msg){
    //emit инициирует евент, первый параметр, имя евента, второй это "data"
    this.emit('message', `${msg} ${Date.now()}`)
  }
}

const logger = new Logger()

//подписка на евент
logger.on('message', data =>{
    console.log(data)
})

//здесь понятно, вызов метода класса, который инициирует метод
logger.log('Hello')
