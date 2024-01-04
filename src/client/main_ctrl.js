import { Controller } from "@hotwired/stimulus";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjs from "dayjs";

const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";
const DEFAULT_DAY_FORMAT = "D";
const WEEK_DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// dayjs config
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.guess();

class MainController extends Controller {
    static targets = [
      "calendar",
      "calendarMonth",
      "calendarDetail",
      "selecedCalendarDate",
      "selectedCalendarContent",
    ];
    static values = {};
  
    connect() {
      const today = dayjs();
      const firstDayOfMonth = today.startOf("month");
      const daysArray = Array.from({ length: today.daysInMonth() }, (_, i) => firstDayOfMonth.add(i, 'day'));
  
      // Set the calendar title
      this.calendarMonthTarget.innerHTML = today.format("MMMM YYYY");
      // Create an array representing both padding days and actual days
      const calendarDays = [
        ...WEEK_DAY_NAMES, // Weekday names
        ...Array(firstDayOfMonth.day()).fill(""), // Padding days
        ...daysArray
      ];
      // Use map to iterate over the array and create calendar elements
      calendarDays.map((day) => this.createCalendarElement(day));
    }
  
    show(evt) {
      const day = evt.params.day;
      console.log(day);
      // const date = dayjs(day);
    }
  
    createCalendarElement(content) {
      const elem = document.createElement("div");
  
      elem.classList.add(
        "border",
        "border-purple-600",
        "flex",
        "cursor-pointer",
        "shrink-0",
        "shadow-md",
        "rounded-md",
        "p-1",
        "text-xs"
      );
      // add font-bold class if content is in WEEK_DAY_NAMES
      if (WEEK_DAY_NAMES.includes(content)) {
        elem.classList.add("font-bold");
        elem.classList.add("text-teal-600");
      }
      // add data-action="mouseover->main#show" if content is a dayjs object
      if (content instanceof dayjs) {
        elem.setAttribute("data-action", "click->main#show");
        elem.setAttribute("data-main-day-param", content.format(DEFAULT_DATE_FORMAT));
  
        elem.classList.add(
          "text-purple-600",
          "hover:bg-purple-600",
          "hover:text-white",
          "transition",
          "duration-200",
          "ease-in-out",
          // "transform",
          // "hover:-translate-y-1",
        );
        // if day is sunday or saturday, add bg-purple-200 class
        if (content.day() === 0 || content.day() === 6) {
          elem.classList.add("bg-purple-200");
        }
        // if day is today, add bg-purple-600 class
        if (content.isSame(dayjs(), "day")) {
          elem.classList.add("bg-purple-600", "text-white");
        }
        elem.innerHTML = content.format(DEFAULT_DAY_FORMAT);
      } else {
        elem.innerHTML = content;
      }
      this.calendarTarget.appendChild(elem);
    }
  }

  export default MainController;