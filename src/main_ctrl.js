import { Controller } from "@hotwired/stimulus";
import { createAuth0Client } from '@auth0/auth0-spa-js';

let auth0 = null;

class MainController extends Controller {
  static targets = ['loginStatus', 'title', 'subtitle',]
  static values = {
    title: String,
    subtitle: String,
    isAuthenticated: { type: Boolean, default: false },
  }

  setupInfo() {
    this.titleTarget.innerHTML = this.titleValue
    this.subtitleTarget.innerHTML = this.subtitleValue
  }

  async handleRedirectCallback() {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/");
    }
  }
  async updateLoginStatus() {
    if (auth0 !== null) {
      if (await auth0.isAuthenticated()) {
        this.isAuthenticatedValue = true
      }
    } else {
      this.isAuthenticatedValue = false
    }
    if (this.isAuthenticatedValue) {
      this.loginStatusTarget.setAttribute('data-action', 'click->main#logout')
      this.loginStatusTarget.innerHTML = 'Logout'
    } else {
      this.loginStatusTarget.setAttribute('data-action', 'click->main#login')
      this.loginStatusTarget.innerHTML = 'Login'
    }
  }
  initialize() {
    this.setupInfo()
  }
  async connect() {
    const resp = await fetch("/auth_config.json").then(resp => resp.json())
    auth0 = await createAuth0Client({
      domain: resp.domain,
      clientId: resp.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
    await this.handleRedirectCallback()
    await this.updateLoginStatus()
  }
  async login() {
    if (auth0 !== null) {
      await auth0.loginWithRedirect()
    }
  }

  async logout() {
    if (auth0 !== null) {
      await auth0.logout()
    }
  }
}
export default MainController;
