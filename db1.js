const mysql=require('mysql');
const con=mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'root',
	database:'empdb'
});
con.connect(function(err)
{
	if(err)
		throw err;
	else
		console.log("database connected");
});
module.exports=con;
/*var sql="insert into employee(ename,salary,address) values('Pawan',200000.00,'bhopal indore')";
con.query(sql,function(err){
	if(err)
		throw err;
	else
		console.log("Data Inserted");
});
*/