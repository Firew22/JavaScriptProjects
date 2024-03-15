const PI = 3.1415;
const radius = 5; // Radius of the circular garden in meters
const minSpacePerPlant = 0.8; // Minimum space required per plant in square meters
const initialPlantCount = 20; // Starting with 20 plants


// Calculate the area of the circular garden
const gardenArea = PI * radius * radius;

// Calculate the maximum number of plants the garden can accommodate
const maxPlants = gardenArea / minSpacePerPlant; // Without Math.floor

// Predict the plant growth after 4 weeks without using loops or Math.pow
let predictedPlantCount = initialPlantCount * 2 * 2 * 2; // Plants double in number every week

// Implement control flow to make decisions based on predicted plant growth
let action;
if (predictedPlantCount > 0.8 * maxPlants) {
    action = "Prune"; // Prune if plant count exceeds 80% of maximum capacity
} else if (predictedPlantCount > 0.5 * maxPlants) {
    action = "Monitor"; // Monitor if plant count is between 50% and 80% of maximum capacity
} else {
    action = "Plant"; // Plant more plants if there is room
}

// Output the results
console.log(`Predicted plant count after 4 weeks: ${predictedPlantCount}`);
console.log(`Based on this, you should ${action.toLowerCase()} the plants.`);