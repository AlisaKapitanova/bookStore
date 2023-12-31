import ProfilePage from "../pageObjects/ProfilePage"

class LoginPage {
    elements = {
        getUserNameInput: () => cy.get('#userName').should('be.visible'),
        getPasswordInput: () => cy.get('#password'),
        getNewUserBtn: () => cy.get('#newUser'),
        getLogInBtn: () => cy.get('#login'),
        getWelcomeMessage: () => cy.get('#userForm div h5')
    };

    typeUserName(userName) {
        this.elements.getUserNameInput().should('be.visible').type(userName)
        return this
    };

    typePassword(password) {
        this.elements.getPasswordInput().should('be.visible').type(password)
        return this
    };

    clickLoginBtn() {
        this.elements.getLogInBtn().should('be.visible').click()
        return new ProfilePage()
    };

    clickNewUserBtn() {
        this.elements.getNewUserBtn().should('be.visible').click()
        return this
    };

    login(userName, password) {
        this.typeUserName(userName)
        this.typePassword(password)
        this.clickLoginBtn()
        return new ProfilePage()
    };
}
export default LoginPage