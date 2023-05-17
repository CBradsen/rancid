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
    cy.get(".single-movie")
    cy.get(".backdrop").should("be.visible");
    cy.get(".single-poster").should("be.visible");
  });

  it("should allow the user to click a button to return to the main page", function() {
    
    
  })

  

})
