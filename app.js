const GeneticAlgorithm = require('./scripts/genetic') //Codigo Altgoritmo Genético
var geneticAlgorithmInstance;

//console.log("STARTING: ", geneticAlgorithmInstance.population())
// for (let index = 0; index < 3; index++) {
//     geneticalgorithm.geneticalgorithm.evolve()
//     console.log("EPOCH "+ index +": ", geneticalgorithm.geneticalgorithm.population())
//     var population = geneticalgorithm.geneticalgorithm.population();
//     population.map((element) => {element.score = 0; return element;})
//     geneticalgorithm.geneticalgorithm = geneticalgorithm.geneticalgorithm.clone({population: population})
// }

const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(express.static('public'));// Usado para localizar arquivos estáticos na pasta public
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Rotas
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/start/:size', async function (req, res) {
    console.log(req.params.size)
    geneticAlgorithmInstance = await GeneticAlgorithm.createGeneticAlgorithm(req.params.size);
    var population = geneticAlgorithmInstance.population();
    console.log("STARTING: ", geneticAlgorithmInstance.population())
    res.json(population);
})

app.post('/evolve', async function(req, res) {
    console.log("TO EVOLVE: ", req.body.population)
    var population = req.body.population;
    geneticAlgorithmInstance = await geneticAlgorithmInstance.clone({population: population})
    await geneticAlgorithmInstance.evolve()
    population = await geneticAlgorithmInstance.population();
    console.log("EVOLVED: ", population)
    res.json(population)
})

app.listen(8081 , function() {
    console.log("Servidor rodando na url http://localhost:8081...")
}) //Tem que ser a ultima linha