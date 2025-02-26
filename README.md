🚗 JSON Parser for Cars Data

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

🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.
