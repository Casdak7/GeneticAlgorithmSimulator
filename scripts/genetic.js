var geneticAlgorithmConstructor = require('geneticalgorithm');

// ** HELPER FUNCTIONS **
function cloneJSON( item ) { return JSON.parse ( JSON.stringify ( item ) ) }

async function createGeneticAlgorithm(size){
    var population = await createStartingPopulation(size);
    var config = {
        mutationFunction: mutationFunction,
        crossoverFunction: crossoverFunction,
        fitnessFunction: fitnessFunction,
        //doesABeatBFunction: yourCompetitionFunction,
        population: population,
        populationSize: size 	// defaults to 100
    }
    
    var geneticalgorithm = geneticAlgorithmConstructor( config )
    return geneticalgorithm;
}

function createStartingPopulation(size){
    var randomPopulation = [];
    for (let index = 0; index < size; index++) {
        var randomPhenotype = createRandomPhenotype();
        randomPopulation.push(randomPhenotype)
    }

    return randomPopulation;
}

function createRandomPhenotype(){
    var newPhenotype = {};

    newPhenotype.score = 0;
    newPhenotype.velocidade = (Math.round(Math.random() * 5));
    newPhenotype.tamanho = (Math.round(Math.random() * 32));
    newPhenotype.sentidos = 50 + (Math.random() < .5 ? -1 : 1) * (Math.round(Math.random() * 32));
    newPhenotype.stamina = 100 + (Math.random() < .5 ? -1 : 1) * (Math.round(Math.random() * 30));

    if(newPhenotype.velocidade < 1){
        newPhenotype.velocidade = 1;
    }
    if(newPhenotype.tamanho < 8){
        newPhenotype.tamanho = 8;
    }

    return newPhenotype;
}

// ** GENETIC ALGORITHM ** 
function mutationFunction(phenotype) {
    var resultPhenotype = cloneJSON(phenotype)

    resultPhenotype.velocidade += (Math.random() < .5 ? -1 : 1) * (Math.round(Math.random() * 2));
    resultPhenotype.tamanho += (Math.random() < .5 ? -1 : 1) * (Math.round(Math.random() * 8));
    resultPhenotype.sentidos += (Math.random() < .5 ? -1 : 1) * (Math.round(Math.random() * 8));
    resultPhenotype.stamina += (Math.random() < .5 ? -1 : 1) * (Math.round(Math.random() * 10));

    if(resultPhenotype.velocidade < 1){
        resultPhenotype.velocidade = 1;
    }
    if(resultPhenotype.tamanho < 8){
        resultPhenotype.tamanho = 8;
    }

    //console.log("MUTATIONS: ", resultPhenotype);
    
    return resultPhenotype;
}

//Tem que retornar um array
function crossoverFunction(a, b) {
    let crossed = cloneJSON(a)
    crossed.velocidade = Math.random() < .5 ? a.velocidade : b.velocidade;
    crossed.tamanho = Math.random() < .5 ? a.tamanho : b.tamanho;
    crossed.sentidos = Math.random() < .5 ? a.sentidos : b.sentidos;
    crossed.stamina = Math.random() < .5 ? a.stamina : b.stamina;
    
    //console.log("CROSSED: ", crossed);
    
    return [crossed];
}

function fitnessFunction(phenotype) {
    
    var fitness;
    
    if(phenotype == null){
        fitness = 0;
    } else{
        fitness = phenotype.score;
    }
    
    //console.log("FITNESS: ", fitness);
    
    return fitness;
}

module.exports = {createGeneticAlgorithm};