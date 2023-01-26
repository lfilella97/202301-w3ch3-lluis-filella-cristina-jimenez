import series from "../../series/series";
import { type SeriesStructure } from "../../series/types";
import Component from "../Component/Component";

class ListSectionComponent extends Component {
  public isPendingSection: boolean;
  private readonly series: SeriesStructure[];

  constructor(parentElement: Element, isPendingSection: boolean) {
    super(parentElement, "section", "list");
    this.series = series;
    this.isPendingSection = isPendingSection;
  }

  public render() {
    super.render();
    this.element.innerHTML = `
    <h3 class="list__title">${
      this.isPendingSection ? "Pending series" : "Watched series"
    }</h3>
        <span class="list__info">You have 
${
  this.isPendingSection
    ? this.getNumberOfPendingSeries()
    : this.getNumberOfWatchedSeries()
} series ${this.isPendingSection ? "pending to watch" : "watched"}</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
        </ul>
      </section>`;
  }

  private getNumberOfWatchedSeries(): number {
    return this.series.filter(({ isWatched }) => isWatched).length;
  }

  private getNumberOfPendingSeries(): number {
    return this.series.filter(({ isWatched }) => !isWatched).length;
  }
}

export default ListSectionComponent;
