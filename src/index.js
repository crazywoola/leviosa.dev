import { Application, Controller } from "@hotwired/stimulus"
import { createAuth0Client } from '@auth0/auth0-spa-js';

window.Stimulus = Application.start()

let auth0 = null;
class MainController extends Controller {
  static targets = ['loginStatus']
  static values = {}

  async handleRedirectCallback() {
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/");
    }
  }
  async updateLoginStatus() {
    if (auth0 !== null) {
      if (await auth0.isAuthenticated())
        this.loginStatusTarget.innerHTML = "Logged In"
    } else {
      this.loginStatusTarget.innerHTML = "Logged Out"
    }
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

window.Stimulus.register("main", MainController);
