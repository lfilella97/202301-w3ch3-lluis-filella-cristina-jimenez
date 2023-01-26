import series from "../../series/series";
import type SeriesStructure from "../../series/types";
import Component from "../Component/Component";

class CardComponent extends Component {
  series: SeriesStructure;
  scores;

  constructor(parentElement: Element, serieIndex: number) {
    super(parentElement, "li", "serie");
    this.series = series[serieIndex];
    this.scores = "";
    this.render();
  }

  render() {
    super.render();
    this.element.innerHTML = `
            <img class="serie__poster"
              src=${this.series.poster}
              alt=${this.series.name}poster />
            <h4 class="serie__title">${this.series.name}</h4>
            <span class="serie__info">${this.series.creator}(${this.series.year})</span>
            <ul class="score">
            ${this.scores}
            </ul>
            <button><i class="icon icon--delete fas fa-times-circle"></i></button>`;
  }
}

export default CardComponent;
