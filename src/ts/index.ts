import ListSectionComponent from "./components/ListSectionComponent/ListSectionComponent";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";

const app = document.querySelector(".container")!;

const mainPage = new MainPageComponent(document.body);

mainPage.render();

const pendingList = new ListSectionComponent(mainPage.element, true);

pendingList.render();

const watchedList = new ListSectionComponent(mainPage.element, false);

watchedList.render();
