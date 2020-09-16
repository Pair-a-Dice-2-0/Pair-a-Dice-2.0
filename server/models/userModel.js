const { Pool } = require('pg');

//URI should be new one iteration team creates
//Old URI
// const PG_URI = 'postgres://kiipxwlq:fdhZ04bcsLWpV1MWWWbGCP0rJ3D7z57w@lallah.db.elephantsql.com:5432/kiipxwlq';

const PG_URI = 'postgres://bfxxtvui:x_DkYxh6M8McNTc3Ain3oq7R_copQ76b@lallah.db.elephantsql.com:5432/bfxxtvui'

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});


module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};