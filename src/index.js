import { Application } from "@hotwired/stimulus"
import MainController from "./main_ctrl"
import InfoController from "./info_ctrl"

window.Stimulus = Application.start()

window.Stimulus.register("main", MainController);
window.Stimulus.register("info", InfoController);
