const express = require('express');
const router = express.Router();

app.get('/', (req, res) => {
	res.send('Hello World');
});
router.route('/:id')
	.get((req, res) => {
		const {id} = req.params;
		res.send(`Hello World ${id}`);
	})
	.put((req, res) => {
		const {id} = req.params;
		res.send(`Hello World ${id}`);
	})
	.delete((req, res) => {
		const {id} = req.params;
		res.send(`Hello World ${id}`);
	});

router.param('id', (req, res, next, id) => {
	req.id = id;
	next();
});

module.exports = router;
