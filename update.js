var db = require("./db_config");
db.connect(function(err) {
  if (err) throw err;

  // kita akan mengubah alamat
  let sql = `update customers set address='Lem Lantai' where id =1`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log("number result record inserted" + result.affectedRows);
  });
});
