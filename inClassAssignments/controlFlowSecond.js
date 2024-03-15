try {
    // Constants
    const PI = 3.1415;
    const radius = 5; // Radius of the initial circular garden in meters
    const minSpacePerPlant = 0.8; // Minimum space required per plant in square meters
    const initialPlantCount = 100; // Starting with 100 plants
    const weeks = 10; // Number of weeks

    // Calculate the initial area of the circular garden
    const initialGardenArea = PI * radius * radius;

    // Calculate the maximum number of plants the initial garden can accommodate
    const maxPlants = initialGardenArea / minSpacePerPlant; // Without using Math.floor

    // Predict the plant growth after 10 weeks using a switch statement
    let totalPlantCount = initialPlantCount;
    switch (weeks) {
        case 10:
            totalPlantCount *= 2;
        case 9:
            totalPlantCount *= 2;
        case 8:
            totalPlantCount *= 2;
        case 7:
            totalPlantCount *= 2;
        case 6:
            totalPlantCount *= 2;
        case 5:
            totalPlantCount *= 2;
        case 4:
            totalPlantCount *= 2;
        case 3:
            totalPlantCount *= 2;
        case 2:
            totalPlantCount *= 2;
        case 1:
            totalPlantCount *= 2;
    }

    // Calculate the area occupied by plants after 10 weeks
    const expandedGardenArea = totalPlantCount * minSpacePerPlant;

    // Calculate the additional space required
    const additionalSpaceRequired = expandedGardenArea - initialGardenArea;

    // Calculate the radius of the expanded garden if the space remained circular
    const expandedRadius = ((initialGardenArea + additionalSpaceRequired) / PI) ** 0.5; // Without using Math functions

    // Output the results
    console.log(`Additional space required after ${weeks} weeks with 100 plants: ${additionalSpaceRequired.toFixed(2)} square meters.`);
    console.log(`If the space remained circular, the radius of the expanded garden would be approximately ${expandedRadius.toFixed(2)} meters.`);
} catch (error) {
    console.error("An error occurred:", error);
}