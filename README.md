🚗 1. JSON Parser for Cars Data

This C# project parses and displays car data from a JSON file using System.Text.Json.
✨ Features

    📁 Reads car data from Datasets/Cars.json.
    🔄 Deserializes JSON data into a list of Car objects.
    📊 Displays car details, including:
        🆔 Model ID
        🚘 Car Name
        📅 Year of Manufacture
        ⛽ Fuel Efficiency
        🛠️ Features
    ⚠️ Handles JSON parsing errors gracefully.

🚀 Getting Started
📋 Prerequisites

    .NET 6.0 SDK or later

📥 Installation

    Clone the repository:

git clone https://github.com/yourusername/JsonParser.git
cd JsonParser

    Restore dependencies:

dotnet restore

▶️ Running the Program

Ensure the JSON file is located at Datasets/Cars.json. The JSON should follow this structure:

[
  {
    "ModelId": 1,
    "CarName": "Tesla Model S",
    "YearOfManufacture": 2020,
    "FuelEfficiency": "120 MPGe",
    "Features": ["Autopilot", "Electric", "Luxury Interior"]
  },
  {
    "ModelId": 2,
    "CarName": "Ford Mustang",
    "YearOfManufacture": 2019,
    "FuelEfficiency": "25 MPG",
    "Features": ["V8 Engine", "Convertible", "Sport Mode"]
  }
]

To run the program:

dotnet run

📌 Example Output

Cars:
Car #1
ID: 1 Name: Tesla Model S
Year Manufactured: 2020 Fuel Efficiency: 120 MPGe
Features: Autopilot, Electric, Luxury Interior

Car #2
ID: 2 Name: Ford Mustang
Year Manufactured: 2019 Fuel Efficiency: 25 MPG
Features: V8 Engine, Convertible, Sport Mode

⚠️ Error Handling

    🚫 Displays an error message if:
        ❌ JSON format is invalid.
        📂 Cars.json file is missing.
        🔥 Any other unexpected error occurs during execution.

🏅 2. Athletes-Skeleton.js

This JavaScript function solves problems related to managing a list of athletes. It provides various functionalities to add, retrieve, update, and remove athletes.
✨ Features

    🏃 getAthletesBySport(sport) – Filters athletes by sport.
    ➕ addAthlete(id, name, sport, medals, country) – Adds a new athlete.
    🔎 getAthleteById(id) – Retrieves an athlete by their ID.
    ❌ removeAthleteById(id) – Removes an athlete by ID.
    🥇 updateAthleteMedals(id, newMedals) – Updates the medal count of an athlete.
    🌍 updateAthleteCountry(id, newCountry) – Updates the country of an athlete.

🚀 Getting Started
📋 Prerequisites

    Node.js installed

📁 Installation

    Clone the repository:

git clone https://github.com/yourusername/Athletes-Skeleton.git
cd Athletes-Skeleton

    Install any dependencies (if needed):

npm install

▶️ Running the Program

const olympics = solve(athletes);
const filteredAthleteBySport = olympics.getAthletesBySport("Swimming");
console.log(JSON.stringify(filteredAthleteBySport));

📌 Example Use Cases

    Filter by Sport:

const olympics = solve(athletes);
const filteredAthleteBySport = olympics.getAthletesBySport("Swimming");
console.log(JSON.stringify(filteredAthleteBySport));

    Add a New Athlete:

const olympics = solve(athletes);
const newAthlete = olympics.addAthlete(4, "Martin Kirov", "Sleeping", 1, "Bulgaria");
console.log(JSON.stringify(newAthlete));

    Find Athlete by ID:

const olympics = solve(athletes);
const foundAthleteById = olympics.getAthleteById(4);
console.log(JSON.stringify(foundAthleteById));

    Remove Athlete by ID:

const olympics = solve(athletes);
const removedAthlete = olympics.removeAthleteById(4);
console.log(JSON.stringify(removedAthlete));

    Update Athlete's Medals:

const olympics = solve(athletes);
const newMedals = olympics.updateAthleteMedals(1, 4);
console.log(JSON.stringify(newMedals));

    Update Athlete's Country:

const olympics = solve(athletes);
const newCountry = olympics.updateAthleteCountry(1, "Burkina Faso");
console.log(JSON.stringify(newCountry));

⚠️ Error Handling

    Displays appropriate messages if:
        🔎 Athlete is not found by ID.
        ❌ Attempt to remove a non-existent athlete.
        🔄 Update operation fails due to invalid ID.

🎮 3. GameService Tests

This module contains unit tests for the gameService functionalities using Chai as the assertion library. These tests ensure that the game management system (CRUD operations) works as expected.
✨ Features

    📚 getGames() – Retrieves a list of games.
    ➕ addGame() – Adds a new game to the list.
    ❌ deleteGame() – Deletes a game by its ID.
    🔄 updateGame() – Updates the details of an existing game.

🚀 Getting Started
📋 Prerequisites

    Node.js installed
    Chai for assertions
    Mocha as the testing framework

📁 Installation

    Clone the repository:

git clone https://github.com/yourusername/GameServiceTests.git
cd GameServiceTests

    Install dependencies:

npm install chai mocha

▶️ Running the Tests

Run the tests using Mocha:

npx mocha

Or, add a script in package.json:

"scripts": {
  "test": "mocha"
}

Then run:

npm test

📌 Test Scenarios
🔍 getGames()

it("Should return a successful response with a list of games", function () {
  const response = gameService.getGames();
  expect(response.status).to.eq(200);
  expect(response.data).to.be.an('array').that.has.lengthOf(3);
  expect(response.data[0]).to.have.all.keys('id', 'title', 'genre', 'year', 'developer', 'description');
});

    ✔️ Should return a status of 200.
    ✔️ Should return an array of games with a length of 3.
    ✔️ Each game object should have the required keys.

➕ addGame()

it("Should add a new game successfully", function () {
  const newGame = {
    id: "4",
    title: "Aion Online",
    genre: "MMORPG",
    year: 1999,
    developer: "NCSoft",
    description: "Fantasy world online game."
  };
  const response = gameService.addGame(newGame)
  expect(response.status).to.eq(201);
  expect(response.message).to.eq("Game added successfully.");

  const allGames = gameService.getGames().data;
  expect(allGames).to.deep.include(newGame);
});

    ✔️ Should add a new game with a status of 201.
    ✔️ Should return a success message.
    ✔️ The new game should appear in the list of games.

❌ deleteGame()

it("Should delete an existing game by ID", function () {
  const gameIdForDeletion = "3";
  const response = gameService.deleteGame(gameIdForDeletion);        
  expect(response.status).to.eq(200);
  expect(response.message).to.eq("Game deleted successfully.");

  const allGames = gameService.getGames().data;
  const foundGame = allGames.filter(game => game.id === gameIdForDeletion);
  expect(foundGame.length).to.be.eq(0);
});

    ✔️ Should delete the specified game and return a status of 200.
    ✔️ Should return a success message.
    ✔️ The game should no longer be in the list.

🔄 updateGame()

it("Should update an existing game with new data", function(){
  const oldGameId = "1";

  const newGame = {
    id: "1",
    title: "Aion Online",
    genre: "MMORPG",
    year: 2010,
    developer: "NCSoft",
    description: "Fantasy world online game."
  };

  const response = gameService.updateGame(oldGameId, newGame);

  expect(response.status).to.eq(200);
  expect(response.message).to.eq("Game updated successfully.")
  
  const allGames = gameService.getGames().data;
  const foundUpdatedGame = allGames.filter(game => game.id === oldGameId);

  expect(allGames).to.deep.include(newGame);
  expect(foundUpdatedGame.length).to.be.eq(1);
});

    ✔️ Should update the game details with new data.
    ✔️ Should return a status of 200 and a success message.
    ✔️ The updated game should be reflected in the list.

⚠️ Error Handling

    ❗ Invalid Game Data: Returns a status of 400 and the message "Invalid Game Data!"
    ❗ Game Not Found: Returns a status of 404 and the message "Game Not Found!"

🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
📞 Contact

For questions or feedback, feel free to reach out or open an issue on GitHub.
