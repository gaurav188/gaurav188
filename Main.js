const readline=require('readline-sync');
var insertEmp=require('./DBOperation');
var id=readline.question('Enter your id:');
var ename=readline.question('Enter your name:');
var salary=readline.question('Enter your salary:');
var address=readline.question('Enter your address:');
insertEmp(id,ename,salary,address);
//op.select();