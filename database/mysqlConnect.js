var mysql      = require('mysql');
const pool = function (domain){
  let cosPool = mysql.createPool({
    host: '127.0.0.1',
    user: 'dev',
    password: '00000000',
    database: domain
  });
  return cosPool;
}

let query = function( sql, values,domain ) {
    return new Promise(( resolve, reject ) => {
      pool(domain).getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            connection.release()
          })
        }
      })
    })
  }
  
  module.exports =  query