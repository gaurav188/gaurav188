const con=require('./db1');

//insertEmp(121,"Raj",25000,"vijay nagar indore");
fetchData();
/*function insertEmp(id,ename,salary,address)
{
	var sql="insert into employee values("+id+",'"+ename+"',"+salary+",'"+address+"')";
	console.log(sql);
	con.query(sql,function(err){
	if(err) throw err;
	else
		console.log("Record Inserted");
});
}
*/
function fetchData()
{
	var sql="select * from employee";
	con.query(sql,(err,result)=>{
		if (err)
			throw err;
		else
			for(temp of result)
				console.log("id"+temp.id);
				console.log("ename"+temp.ename);
				console.log("salary"+temp.salary);
				console.log("address"+temp.address);
				console.log("---------------------");
});
}
//module.exports=insertEmp;