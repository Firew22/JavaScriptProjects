// Importing database functions.
import { central, db1, db2, db3, vault } from "./databases.js";

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

  // Start a timer to track the total execution time
  const startTime = Date.now();

  // Fetch the database where user's information is stored
  const dbPromise = central(id);

  // Fetch basic user information from the appropriate database
  const basicInfoPromise = dbPromise.then(db => dbs[db](id));

  // Fetch personal data from the vault database
  const vaultPromise = vault(id);

  // Wait for all promises to resolve or reject
  const [db, basicInfo, personalInfo] = await Promise.all([dbPromise, basicInfoPromise, vaultPromise]);

  // Calculate the remaining time before the 200ms limit
  const remainingTime = 200 - (Date.now() - startTime);

  if (remainingTime < 0) {
    throw new Error("Time limit exceeded");
  }

  // Construct the user data object
  const userData = {
    id: id,
    username: basicInfo.username,
    website: basicInfo.website,
    company: basicInfo.company,
    name: personalInfo.name,
    email: personalInfo.email,
    address: personalInfo.address,
    phone: personalInfo.phone
  };

  return userData;
}

// Test the function
getUserData(5)
  .then(userData => console.log(userData))
  .catch(error => console.error(error));

// Export the getUserData function (if needed)
module.exports = getUserData;