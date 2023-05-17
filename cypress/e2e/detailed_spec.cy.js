describe("Detailed page", function () {
  beforeEach(() => {
  cy.fixture("movieData.json").as("movieData")
  .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 200,
    fixture: "movieData"
  })
  .visit("http://localhost:3000/")
  .then(() => {
    cy.get(".poster-img").first().click()
  })
});


  it("should allow the user to click a movie poster and be taken to a page showing details about the movie they clicked", function() {
      cy.get(".backdrop").should("be.visible");
      cy.get(".single-poster").should("be.visible");
      cy.get("h2").contains("Rise of the");
      cy.get('.average').should("contain", "7");
      cy.get(".genre").should("contain", "FantasyActionComedyCrime");
      cy.get(".tagline").should("contain", "Meet the new law of the Afterlife.");
      cy.get(".overview").should("contain", "he joins a special police force and returns to Earth to save humanity from the undead.");
      cy.get(".revenue").should("contain", "78324220");

  });

  it("should allow the user to click a button to return to the main page", function() {
    cy.get('button').click()
    .url().should("eq", "http://localhost:3000/") 
  });

  it("should display error message when there is an error", function () {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500, 
      body: "Server Error" 
    });
    cy.visit("http://localhost:3000/dog")
    cy.contains("Error: Please try again there is an error code: 500").should("be.visible")
  });


})

