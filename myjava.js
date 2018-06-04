var isExit = true;

do{
  var name = prompt('Введите ФИО');
  var floor = prompt('Укажите ваш пол');
  var yeares = prompt('Сколько вам лет');
  var address = prompt('Ваш e-mail');
  var result=confirm('ФИО '+name+'! Пол '+floor+'! Вам '+yeares+' Лет! Адрес '+address+'! Всё верно?');
  if (result){
  alert('Спасибо за тест');
  isExit = false;
} else { 
  alert('Всё с начало');
}

}while(isExit == true);