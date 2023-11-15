import ElementsPage from "./elementsPage";
import homePageData from "../fixtures/homePage.json";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);

  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }
}

export default HomePage;