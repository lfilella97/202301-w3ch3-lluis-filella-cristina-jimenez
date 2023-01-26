import MainPageComponent from "./components/MainPageComponent/MainPageComponent";

const app = document.querySelector(".container")!;

const mainPage = new MainPageComponent(document.body);

mainPage.render();
