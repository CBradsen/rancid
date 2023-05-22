describe("Detailed page", function () {
  beforeEach(() => {
  cy.fixture("movieData.json").as("movieData")
  .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 200,
    fixture: "movieData"
  })
  .visit("http://localhost:3000/") 
  .get(".poster-img").first().click()
});

  it("should allow the user to click a movie poster and be taken to a page showing details about the movie they clicked", function() {
      cy.url().should("eq", "http://localhost:3000/1013860")
      .get(".backdrop").should("be.visible")
      .get(".single-poster").should("be.visible")
      .get("h2").contains("Rise of the")
      .get('.average').should("contain", "7")
      .get(".genre").should("contain", "FantasyActionComedyCrime")
      .get(".tagline").should("contain", "Meet the new law of the Afterlife.")
      .get(".overview").should("contain", "he joins a special police force and returns to Earth to save humanity from the undead.")
      .get(".revenue").should("contain", "78324220")
  });

  it("should allow the user to click a button to return to the main page", function() {
    cy.get('button').click()
    .url().should("eq", "http://localhost:3000/") 
  });

  it("should display error message when there is an error", function () {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/1013860", {
      statusCode: 500, 
      body:  {
       error: "Server Error" 
      }
    })
    .visit("http://localhost:3000/1013860")
    .contains("Error: Please try again there is an error. code: 500").should("be.visible")
  });
})