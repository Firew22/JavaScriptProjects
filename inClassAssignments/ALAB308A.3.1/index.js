const { central, db1, db2, db3, vault } = require("./databases.js");

// Define the object to store database functions
const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
};

async function getUserData(id) {
    // Check if id is within the valid range
    if (typeof id !== "number" || id < 1 || id > 10) {
        throw new Error("Invalid Input -- Out of Range");
    }

    // Get the database where user's information is stored
    const db = await central(id);

    // Define an object to store the retrieved data
    const userData = {
        id: id
    };

    try {
        // Fetch basic user information from the appropriate database
        const basicInfo = await dbs[db](id);
        userData.username = basicInfo.username;
        userData.website = basicInfo.website;
        userData.company = basicInfo.company;
    } catch (error) {
        // Handle errors from accessing basic info databases
        return Promise.reject(new Error(`Error accessing ${db} database`));
    }

    try {
        // Fetch personal data from the vault database
        const personalInfo = await vault(id);
        userData.name = personalInfo.name;
        userData.email = personalInfo.email;
        userData.address = personalInfo.address;
        userData.phone = personalInfo.phone;
    } catch (error) {
        // Handle errors from accessing vault database
        return Promise.reject(new Error("Error accessing vault database"));
    }

    // Return the assembled user data
    return userData;
}

// Test the function
getUserData(5)
    .then(userData => console.log(userData))
    .catch(error => console.error(error));