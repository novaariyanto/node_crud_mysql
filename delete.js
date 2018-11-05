var db = require("./db_config");

db.connect(function(err){
    if(err)throw err;
    let sql = "delete from customers where id = 1";
    db.query(sql,function(err,result){
        if(err)throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    })
})