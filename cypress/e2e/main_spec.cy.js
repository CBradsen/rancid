describe("Main page", function () {
  beforeEach(() => {
  cy.fixture("movieData.json").as("movieData")
  .intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
    statusCode: 200,
    fixture: "movieData"
  })
  .visit("http://localhost:3000/")
});

  it("should successfully load main page, and display the rancid tomatillos logo", function () {
    cy.get(".logo").should("be.visible");
  });

  it("should successfully load main page, and display all movies", function () {
    cy.get(".poster-img").should("be.visible")
      .get(".poster-img").should("have.length", 40)
  })
  
  it("should successfully render the Header component with the logo", function () {
    cy.get(".header .logo").should("be.visible")
        .and("have.attr", "alt", "Rancid Tomatillos logo");
  });

  it("should successfully render Footer component", function () {
      cy.get(".footer").should("be.visible")
        .get(".footer .footer-paragraph").should("contain", "🍿")
  });

  it("should successfully render the detailed view of a specific movie upon user selection", function () {
      cy.visit("http://localhost:3000/")
      cy.get(".poster-img").first().click()
      .get(".single-movie").should("be.visible")
      .url().should("eq", "http://localhost:3000/1013860")
  });

  it("should display error message when there is an error", function () {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500, 
      body: "Server Error" 
    });
    cy.visit("http://localhost:3000/")
    cy.contains("Error: Please try again there is an error code: 500").should("be.visible")
  });

  it("should display 'Loading...' while data is being fetched", function () {
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      delay: 500, 
      fixture: "movieData" 
    });
    cy.visit("http://localhost:3000/")
    cy.contains("Loading...").should("be.visible")
    cy.contains("Loading...").should("not.exist")
  });
});


