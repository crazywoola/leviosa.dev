import { Application, Controller } from "@hotwired/stimulus"

window.Stimulus = Application.start()

class AppController extends Controller {
  connect() {
    this.element.textContent = "Hello Stimulus!"
  }
}

window.Stimulus.register("app", AppController)