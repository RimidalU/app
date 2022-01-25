import Page from '../../Components/Page/page';
import './style.scss';

class WinnersPage extends Page {
  static TextObject = {
    WinnersTitle:
      `
      <div class="winners-wrap" > 
        <p class="winners-title">Garage (<span class="winners-count">0</span>) </p>
        <p class="winners-title">Page #<span class="winners-count">0</span></p>
        <div class="table">
          <div class="header__table">
            <div class="number__id">
              <p class="number__id-title">Number</p>            
            </div>
            <div class="car">
            <p class="car-title">Car</p>  
            </div>
            <div class="name__car">
              <p class="name__car-title">Name</p>
              </div>
            <div class="win_car">
              <p class="win-car-title">Win</p>
            </div>
            <div class="best__time">
              <p class="best__time-title">Best time(second)</p>
            </div>
          </div>
        </div>
        <div class="pagination-wrap">
        <button class="btn prev-button prev-button-win" disabled id="prev-win">Prev</button>
        <button class="btn next-button next-button-win" disabled id="next-win">Next</button>
      </div>    
      `,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(WinnersPage.TextObject.WinnersTitle);
    this.container.append(title);
    return this.container;
  }
}

export default WinnersPage;
