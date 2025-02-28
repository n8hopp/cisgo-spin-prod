const connection = require('../util/connection');

// This model uses 'connection' which is our db connection script -
// This specific model calls the query "Select * from opportunity where location id = {id}"
exports.getAllOppsByLocation = async function getAllOppsByLocation(req) {
	// query sent to db: returns all objects from opportunity that match loc id
    const sql = `SELECT * FROM opportunity WHERE location_id=${req.location_id}`;
	return new Promise((resolve, reject) =>{
		connection.query(sql, (err, data) => {
			if(err){
				reject(err);
			}
			else resolve(data);
		});
	});
}