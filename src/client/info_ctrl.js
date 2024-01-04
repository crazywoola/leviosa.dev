import { Controller } from "@hotwired/stimulus";

class InfoController extends Controller {
    static targets = ["icons"];
  
    static values = {
      icons: Array,
      url: String,
    };
    connect() {
      this.iconsValue.forEach((icon) => {
        const url = `${this.urlValue}/${icon}`;
        fetch(url)
          .then((resp) => resp.text())
          .then((data) => {
            this.iconsTarget.innerHTML += data;
          });
      });
    }
  }

    export default InfoController;