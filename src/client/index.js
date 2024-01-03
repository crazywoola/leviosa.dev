import { Application, Controller } from "@hotwired/stimulus";

window.Stimulus = Application.start();

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

class InfoController extends Controller {
  static targets = ["icons"];

  static values = {
    icons: Array,
    url: String,
  };
  connect() {
    console.log(this.iconsValue);
    console.log(this.urlValue);
    this.iconsValue.forEach((icon) => {
      const url = `${this.urlValue}/${icon}`;
      fetch(url).then((resp) => resp.text()).then((data) => {
        this.iconsTarget.innerHTML += data;
      });
    });
  }
}

class MainController extends Controller {
  static values = {};

  connect() {}
}

window.Stimulus.register("opening", OpeningController);
window.Stimulus.register("info", InfoController);
window.Stimulus.register("main", MainController);
