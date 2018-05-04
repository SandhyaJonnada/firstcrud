const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

//Genre =require('./models/genre');
Cosmetic=require('./models/cosmetic');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/warehouse');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/cosmetics');
});



/*
app.get('/api/genres', (req, res) => {
	Genre.getGenres((err, genres) => {
		if(err){
			throw err;
		}
		res.json(genres);
	});
});


app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});


app.put('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	var genre = req.body;
	Genre.updateGenre(id, genre, {}, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});


app.delete('/api/genres/:_id', (req, res) => {
	var id = req.params._id;
	Genre.removeGenre(id, (err, genre) => {
		if(err){
			throw err;
		}
		res.json(genre);
	});
});

*/


app.get('/api/cosmetics', (req, res) => {
	Cosmetic.getCosmetics((err, cosmetics) => {
		if(err){
			throw err;
		}
		res.json(cosmetics);
	});
});

app.get('/api/cosmetics/:_id', (req, res) => {
	Cosmetic.getCosmeticById(req.params._id, (err, cosmetic) => {
		if(err){
			throw err;
		}
		res.json(cosmetic);
	});
});

app.post('/api/cosmetics', (req, res) => {
	var cosmetic = req.body;
	Cosmetic.addCosmetic(cosmetic, (err, cosmetic) => {
		if(err){
			throw err;
		}
		res.json(cosmetic);
	});
});

app.put('/api/cosmetics/:_id', (req, res) => {
	var id = req.params._id;
	var cosmetic = req.body;
	Cosmetic.updateCosmetic(id, cosmetic, {}, (err, cosmetic) => {
		if(err){
			throw err;
		}
		res.json(cosmetic);
	});
});

app.delete('/api/cosmetics/:_id', (req, res) => {
	var id = req.params._id;
	Cosmetic.removeCosmetic(id, (err, cosmetic) => {
		if(err){
			throw err;
		}
		res.json(cosmetic);
	});
});

app.listen(process.env.PORT||3000);
console.log('Running on port 3000...');
