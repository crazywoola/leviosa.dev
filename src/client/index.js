import { Application, Controller } from "@hotwired/stimulus"

window.Stimulus = Application.start()

class HelloController extends Controller {
  static targets = ["loading", 'title']
  static values = {
    url: String
  }
  connect() {
    console.log("connect")
    this.loadingTarget.innerHTML = "Loading..."
    this.titleTarget.innerHTML = "Hello Stimulus!"
    
  }

  load() {
    console.log("load")
    fetch(this.urlValue).then((response) => {
      response.json().then((data) => {
        this.loadingTarget.innerHTML = ""
        console.log(data)
      })
    })
  }
}

window.Stimulus.register("hello", HelloController)