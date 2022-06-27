const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
        host : 'localhost',
        port : 5432,
        user : 'postgres',
        password : 'password',
        database : 'store'
    }
});

exports.get_stock = async () => {
	let stock;
	await knex.raw(`
		SELECT * FROM stock
        ORDER BY id
	`).then(response => stock = response.rows);
	return stock;
};

exports.get_value = async () => {
    let sum;
    await knex.raw(`
        SELECT SUM(price * quantity)
        FROM stock
    `).then(response => sum = response.rows);
    return sum;
};

exports.reduce_item = async (e) => {
    await knex.raw(`
        UPDATE stock
        SET quantity = quantity - 1
        WHERE id = '${e.id}'
    `).then(response => response.rows);
};

exports.order_item = async (e) =>  {
   await knex.raw(`
         UPDATE stock
         SET quantity = quantity + casesize
         WHERE id = '${e.id}'
     `).then(response => response.rows);
};