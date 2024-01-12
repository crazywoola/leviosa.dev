import { Application, Controller } from "@hotwired/stimulus"
import { createAuth0Client } from '@auth0/auth0-spa-js';

window.Stimulus = Application.start()
class MainController extends Controller {
  static values = {
  }

  auth0Client = null;

  login = async () => {
    await this.auth0Client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
  }

  connect = async () => {
    console.log("Hello, Stimulus!");
    const response = await fetch("/auth_config.json");
    const config = await response.json();
    this.auth0Client = await createAuth0Client({
      domain: config.domain,
      clientId: config.clientId
    });

    const query = window.location.search;
    const shouldParseResult = query.includes("code=") && query.includes("state=");

    if (shouldParseResult) {
      console.log("> Parsing redirect");
      try {
        const result = await this.auth0Client.handleRedirectCallback();

        if (result.appState && result.appState.targetUrl) {
          console.log(result);
        }
        console.log("Logged in!");
      } catch (err) {
        console.log("Error parsing redirect:", err);
      }

      window.history.replaceState({}, document.title, "/");
    }
  }
}

window.Stimulus.register("main", MainController);