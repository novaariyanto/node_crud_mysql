var db = require("./db_config");
db.connect(function(err) {
  if (err) throw err;

  let sql = "select * from customers";
  db.query(sql, function(err, result) {
    if (err) throw err;
    // console.log(result);
    console.log(`ID \t NAME \t\t ADDRESS`);
    console.log(`----------------------------------------------------------`);
    result.forEach(customer => {
      console.log(`${customer.id} \t ${customer.name} \t ${customer.address}`);
    });
  });
});
