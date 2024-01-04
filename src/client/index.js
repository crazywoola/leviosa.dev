import { Application, Controller } from "@hotwired/stimulus";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs from "dayjs";

// dayjs config
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.guess();

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

class MainController extends Controller {
  static targets = ["calendar", "calendarMonth", "calendarDetail"];
  static values = {};

  connect() {
    const today = dayjs();
    const firstDayOfMonth = today.startOf("month");
    const daysInMonth = today.daysInMonth();
    const paddingDaysCount = firstDayOfMonth.day();
    const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Set the calendar title
    this.calendarMonthTarget.innerHTML = today.format("MMMM YYYY");
    // Create an array representing both padding days and actual days
    const calendarDays = [
      ...weekdayNames, // Weekday names
      ...Array(paddingDaysCount).fill(""), // Padding days
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1), // Actual days
    ];
    // Use map to iterate over the array and create calendar elements
    calendarDays.map((day) => this.createCalendarElement(day));
  }

  show(evt) {
    const day = evt.params.day;
    this.calendarDetailTarget.innerHTML = day;
  }

  createCalendarElement(content) {
    const elem = document.createElement("div");
    // add data-action="mouseover->main#open"
    elem.setAttribute("data-action", "mouseover->main#show");
    elem.setAttribute("data-main-day-param", content);
    elem.classList.add(
      "border",
      "border-purple-600",
      "flex",
      "justify-center",
      "items-center",
      "text-purple-600",
      "cursor-pointer",
      "hover:bg-purple-600",
      "hover:text-white"
    );

    const day = dayjs().date(content);
    if (day.day() === 0 || day.day() === 6) {
      elem.classList.add("bg-purple-200");
    }

    if (day.isSame(dayjs(), "day")) {
      elem.classList.add("bg-purple-600", "text-white");
    }
    elem.innerHTML = content;
    this.calendarTarget.appendChild(elem);
  }
}

window.Stimulus.register("opening", OpeningController);
window.Stimulus.register("info", InfoController);
window.Stimulus.register("main", MainController);
