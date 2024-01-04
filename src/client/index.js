import { Application } from "@hotwired/stimulus";
import OpeningController from "./opening_ctrl";
import InfoController from "./info_ctrl";
import MainController from "./main_ctrl";

window.Stimulus = Application.start();

window.Stimulus.register("opening", OpeningController);
window.Stimulus.register("info", InfoController);
window.Stimulus.register("main", MainController);
