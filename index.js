const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


const  comentarioSchema = new mongoose.Schema({
	nombre: String,
	contenido: String
})
const Comentario = mongoose.model("Comentario", comentarioSchema); 
const tweetsSchema = new mongoose.Schema({
	fecha: { type: Date, default: Date.now },
	tweet:{ type: String, default: 'Este Tweet no esta disponible.' },
	rt: Number,
	comentarios: [comentarioSchema]
})
const Tweet = mongoose.model("Tweet", tweetsSchema); 

/* Tweet.create(
{rt:4}, (error, tweet) =>{
	console.log(tweet)
}
)
console.log(Tweet) */
Tweet.findById('5f0f7ca5942e6c099aa53e92',(error, tweet)=>{
	tweet.comentarios.push(
	{
		nombre: 'Camilo',
		contenido:'Primer comentario asdjaiuj'
	})
	tweet.save((error,tweet)=>{
		console.log(tweet);
	})
})

// CAMBIAAADOOOO



