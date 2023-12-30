import { Application, Controller } from "@hotwired/stimulus";

window.Stimulus = Application.start();

class OpeningController extends Controller {
  static targets = ['title', 'subtitle', 'description'];
  static values = {
    title: String,
    subtitle: String,
    description: String
  };

  connect() {
    this.animateElement(this.titleTarget, this.titleValue)
        .then(() => this.animateElement(this.subtitleTarget, this.subtitleValue))
        .then(() => this.animateElement(this.descriptionTarget, this.descriptionValue));   
  }

  animateElement(element, value) {
    // const duration = value.length / 20 * 1000; // Convert seconds to milliseconds
    const duration = 0
    element.innerHTML = value;
    element.style.width = `${value.length}ch`;
    element.style.animation = `typing ${duration / 1000}s steps(${value.length}), .5s step-end infinite alternate`;

    return new Promise(resolve => {
      setTimeout(resolve, duration);
    });
  }
}

class InfoController extends Controller {
  static targets = ['btn'];
  connect() {
  }
  toggle(){
    this.btnTarget.classList.toggle('shadow-lg');
    this.btnTarget.classList.toggle('rounded-lg');
    this.btnTarget.classList.toggle('bg-purple-400');
  }
}

window.Stimulus.register("opening", OpeningController);
window.Stimulus.register("info", InfoController);
