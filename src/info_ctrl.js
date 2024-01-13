import { Controller } from "@hotwired/stimulus";

class InfoController extends Controller {
  static targets = ["icons"];

  static values = {
    url: String,
  };
  connect() {
    fetch(this.urlValue)
        .then((resp) => resp.text())
        .then((data) => {
          this.iconsTarget.innerHTML = data;
        });
  }
}

export default InfoController;
