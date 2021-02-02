var mysql      = require('mysql');
const pool = mysql.createPool({
  host     : '127.0.0.1',
  user     : 'dev',
  password : '00000000',
  database : 'wp_db'
});
 
let query = function( sql, values ) {
    // 返回一个 Promise
    return new Promise(( resolve, reject ) => {
      pool.getConnection(function(err, connection) {
        if (err) {
          reject( err )
        } else {
          connection.query(sql, values, ( err, rows) => {
  
            if ( err ) {
              reject( err )
            } else {
              resolve( rows )
            }
            // 结束会话
            connection.release()
          })
        }
      })
    })
  }
  
  module.exports =  query