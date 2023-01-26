import ListSectionComponent from "./components/ListSectionComponent/ListSectionComponent";
import MainPageComponent from "./components/MainPageComponent/MainPageComponent";

const app = document.querySelector(".container")!;

const mainPage = new MainPageComponent(document.body);

mainPage.render();

const mainContainer = document.querySelector(".main-content")!;
const pendingList = new ListSectionComponent(mainContainer, true);

pendingList.render();

const watchedList = new ListSectionComponent(mainContainer, false);

watchedList.render();
