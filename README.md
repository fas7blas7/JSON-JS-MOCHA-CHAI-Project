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

🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
