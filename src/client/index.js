import { Application, Controller } from "@hotwired/stimulus";

window.Stimulus = Application.start();

class OpeningController extends Controller {
  static targets = ['title', 'description'];
  static values = {
    title: String,
    description: String
  };

  connect() {
    this.animateElement(this.titleTarget, this.titleValue)
        .then(() => this.animateElement(this.descriptionTarget, this.descriptionValue));
  }

  animateElement(element, value) {
    const duration = value.length / 20 * 1000; // Convert seconds to milliseconds
    element.innerHTML = value;
    element.style.width = `${value.length}ch`;
    element.style.animation = `typing ${duration / 1000}s steps(${value.length}), .5s step-end infinite alternate`;

    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }
}

window.Stimulus.register("opening", OpeningController);
