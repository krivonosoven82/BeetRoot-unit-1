const ADMIN = 'admin';
const PASSWORD = 'Черный властелин';
let who, name, password;


function enterPassword(){
  if(password == false){
    alert('Вход отменен');
  }else if(password != PASSWORD){
    alert('Пароль неверен');
  }else{
    alert('Добро пожаловать!!!)))');
  }
}


who = prompt('Кто вы?');

if(who == null){
  alert('Вход отменен');
}else if(who != ADMIN){
  alert('Я вас не знаю');
}else{
  password = prompt('Введите пароль', '');
  enterPassword();
}

















// who = prompt('Enter who are you...', '');
//
//  if(who == ADMIN){
//    password = prompt('Enter password');
//  }else{
//    console.log('no');
//
//  }
//
//  if(password == PASSWORD){
//    console.log('ok');
//  }else{
//    console.log('no');
//  }
//
//
// let text = prompt('');
// alert(text);
