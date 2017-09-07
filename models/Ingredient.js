const mongoose =  require ( 'mongoose' );
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost/recipes');
const { connection: db } = mongoose;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log (' connected to recipe database')
});

const ingredientSchema = new Schema({
  name: String,
  created_at: {type: Date, default: Date.now}
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);
module.exports = Ingredient;
