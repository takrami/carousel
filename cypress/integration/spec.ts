// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import { slide } from "../../src/data";

describe("Test Carousel functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("dots length", () => {
    cy.get(".dots li").should("have.length", slide.items.length);
  });

  it("dots", () => {
    cy.get(".dots li").each((dot, index) => {
      dot.trigger("click");
      cy.get(".slide-title").eq(index).should("be.visible");
      cy.get(".slide-title").eq(index).contains(slide.items[index].title);
      cy.get(".slide-description")
        .eq(index)
        .contains(slide.items[index].description);
    });
  });

  it("arrow", () => {
    slide.items.forEach((item, index) => {
      cy.get(".slide-title").eq(index).should("be.visible");
      cy.get(".slide-title").eq(index).contains(item.title);
      cy.get(".slide-description").eq(index).contains(item.description);
      cy.get(".next-arrow").click();
    });
  });
});
