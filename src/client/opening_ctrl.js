import { Controller } from "@hotwired/stimulus";

class OpeningController extends Controller {
  static classes = ["start"];
  static targets = ["title", "subtitle", "description", "btn"];
  static values = {
    title: String,
    subtitle: String,
    description: String,
  };

  connect() {
    this.animateElement(this.titleTarget, this.titleValue)
      .then(() => this.animateElement(this.subtitleTarget, this.subtitleValue))
      .then(() =>
        this.animateElement(this.descriptionTarget, this.descriptionValue)
      );
  }

  animateElement(element, value) {
    // const duration = value.length / 20 * 1000; // Convert seconds to milliseconds
    const duration = 0;
    element.innerHTML = value;
    element.style.width = `${value.length}ch`;
    element.style.animation = `typing ${duration / 1000}s steps(${
      value.length
    }), .5s step-end infinite alternate`;

    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }

  start() {
    this.element.classList.toggle(this.startClass);
    this.subtitleTarget.classList.toggle("hidden");
  }
}

export default OpeningController;
