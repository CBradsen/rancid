describe("Main page", function () {
  beforeEach(() => {
  cy.fixture("movieData.json").as("movieData")
  .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 200,
    fixture: "movieData"
  })
  .visit("http://localhost:3000/")
});

  it("should sucessfully load main page, and display the rancid tomatillos logo", function () {
    cy.get("h1").contains("Rancid").should("be.visible");
  });

})


