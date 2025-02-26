function solve(athletes) {
    function getAthletesBySport(sport) {
        return athletes.filter(athlete => athlete.sport === sport);
    }

    function addAthlete(id, name, sport, medals, country) {
        const newAthlete = {
            id, name, sport, medals, country
        }
        athletes.push(newAthlete);
        return athletes;
    }

    function getAthleteById(id) {
        const foundAthleteById = athletes.find(athlete => athlete.id === id);
        return foundAthleteById || `Athlete with ID ${id} not found`;
    }

    function removeAthleteById(id) {
        const initialLength = athletes.length
        athletes = athletes.filter(athlete => athlete.id !== id);
        if (initialLength !== athletes.length) {
            return athletes;
        }
        else {
            return `Product with ID ${id} not found!`
        };
    }

    function updateAthleteMedals(id, newMedals) {
        const foundAthlete = athletes.find(athlete => athlete.id === id);
        if (foundAthlete) {
            foundAthlete.medals = newMedals;
            return athletes;
        }
        else {
            return `Athlete with ID ${id} not found`;
        }
    }

    function updateAthleteCountry(id, newCountry) {
        const foundAthlete = athletes.find(athlete => athlete.id === id);
        if (foundAthlete) {
            foundAthlete.country = newCountry;
            return athletes;
        }
        else {
            return `Athlete with ID ${id} not found`;
        }
    }


    return {
        getAthletesBySport,
        addAthlete,
        getAthleteById,
        removeAthleteById,
        updateAthleteMedals,
        updateAthleteCountry
    };
}

let athletes = [
    { id: 1, name: "Usain Bolt", sport: "Sprinting", medals: 8, country: "Jamaica" },
    { id: 2, name: "Michael Phelps", sport: "Swimming", medals: 23, country: "USA" },
    { id: 3, name: "Simone Biles", sport: "Gymnastics", medals: 7, country: "USA" }
];

//const olympics = solve(athletes);
//const filteredAthleteBySport = olympics.getAthletesBySport("Swimming");
//console.log(JSON.stringify(filteredAthleteBySport));

//const olympics = solve(athletes);
//const newAthlete = olympics.addAthlete(4, "Martin Kirov", "Sleeping", 1, "Bulgaria");
//console.log(JSON.stringify(newAthlete));

/*const olympics = solve(athletes);
const foundAthleteById = olympics.getAthleteById(4);
console.log(JSON.stringify(foundAthleteById));*/

/*const olympics = solve(athletes);
const removedAthlete = olympics.removeAthleteById(4);
console.log(JSON.stringify(removedAthlete));*/

/*const olympics = solve(athletes);
const newMedals = olympics.updateAthleteMedals(1, 4);
console.log(JSON.stringify(newMedals));*/

/*const olympics = solve(athletes);
const newCountry = olympics.updateAthleteCountry(1, "Burkina Faso");
console.log(JSON.stringify(newCountry));*/

