import { expect } from "chai";
import { gameService } from "../functionGameService/gameService.js";

describe("gameService Tests", function () {

  describe("getGames()", function () {
    // Test: Should return a successful response with a list of games
    // 1. Verify the response status is 200.
    // 2. Ensure the data is an array with a length of 3.
    // 3. Check that the first game includes the required keys: 'id', 'title', 'genre', 'year', 'developer', 'description'.

    it("Should return a successful response with a list of games", function () {
      const response = gameService.getGames();
      expect(response.status).to.eq(200);
      expect(response.data).to.be.an('array').that.has.lengthOf(3);
      expect(response.data[0]).to.have.all.keys('id', 'title', 'genre', 'year', 'developer', 'description');
    });

    describe("addGame()", function () {
      // Test: Should add a new game successfully
      // 1. Create a valid new game object.
      // 2. Verify the response status is 201 and the success message is correct.
      // 3. Check that the newly added game appears in the game list.

      // Test: Should return an error for invalid game data
      // 1. Create an invalid game object (missing required fields).
      // 2. Check that the response status is 400 and the error message is "Invalid Game Data!".

      it("Should return a successful response with a list of games", function () {
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

      it("Should return a successful response with a list of games", function () {
        const newGame = {
          id: "4",
          title: "Aion Online",
          genre: "MMORPG",          
        };
        const response = gameService.addGame(newGame)
        expect(response.status).to.eq(400);
        expect(response.error).to.eq("Invalid Game Data!");
      });

    });

    describe("deleteGame()", function () {
      // Test: Should delete an existing game by ID
      // 1. Delete a game by its ID.
      // 2. Verify the response status is 200 and the success message is correct.
      // 3. Ensure the game is successfully removed from the list.

      // Test: Should return an error if the game is not found
      // 1. Attempt to delete a game with a non-existent ID.
      // 2. Check that the response status is 404 and the error message is "Game Not Found!".

      it("Should delete an existing game by ID", function () {
        const gameIdForDeletion = "3";
        const response = gameService.deleteGame(gameIdForDeletion);        
        expect(response.status).to.eq(200);
        expect(response.message).to.eq("Game deleted successfully.");

        const allGames = gameService.getGames().data;
        const foundGame = allGames.filter(game => game.id === gameIdForDeletion);
        expect(foundGame.length).to.be.eq(0);
      });

      it("Should return status 404 and error message when trying to delete game with non-existent ID", function(){
        const gameIdForDeletion = "123456789";
        const response = gameService.deleteGame(gameIdForDeletion);        
        expect(response.status).to.eq(404);
        //console.log(response);
        expect(response.error).to.eq("Game Not Found!");
        //console.log(response);
      });



    });

    describe("updateGame()", function () {
      // Test: Should update an existing game with new data
      // 1. Create updated game data and update an existing game by its ID.
      // 2. Verify the response status is 200 and the success message is correct.
      // 3. Ensure the updated game is reflected in the game list.

      // Test: Should return an error if the game to update is not found
      // 1. Attempt to update a game that doesn't exist.
      // 2. Check that the response status is 404 and the error message is "Game Not Found!".

      // Test: Should return an error if the new game data is invalid
      // 1. Provide incomplete or invalid data for an existing game.
      // 2. Check that the response status is 400 and the error message is "Invalid Game Data!".

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

        //console.log(foundUpdatedGame);        
      });

      it("Should return an error if the game to update is not found", function(){
        const oldGameId = "123456789";

        const newGame = {
          id: "123456789",
          title: "Aion Online",
          genre: "MMORPG",
          year: 2010,
          developer: "NCSoft",
          description: "Fantasy world online game."
        };

        const response = gameService.updateGame(oldGameId, newGame)

        expect(response.status).to.be.eq(404);
        expect(response.error).to.be.eq("Game Not Found!")
      });

      it("Should return an error if the new game data is invalid", function(){
        const oldGameId = "1";
        const newGame = {
          id: "123456789",
          title: "Aion Online"        
        };
        const response = gameService.updateGame(oldGameId, newGame)
        expect(response.status).to.be.eq(400);
        expect(response.error).to.be.eq("Invalid Game Data!")
      });
    });
  });
});
