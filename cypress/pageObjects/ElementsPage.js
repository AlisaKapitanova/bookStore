import ElementsTextBoxPage from "./elementsTextBoxPage";

class ElementsPage {
  getTextBoxElement = () => cy.get("#item-0");

  chooseTextBoxElement() {
    this.getTextBoxElement().click();
    return new ElementsTextBoxPage();
  }
}

export default ElementsPage;