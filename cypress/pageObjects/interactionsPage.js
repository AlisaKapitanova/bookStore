import SelectablePage from "./SelectablePage"

class InteractionsPage {
  getSelectableBtn = () => cy.get(".element-group:nth-child(5) #item-1")
  clickSelectableBtn() {
    this.getSelectableBtn().click();
    return new SelectablePage();
  }
}

export default InteractionsPage;