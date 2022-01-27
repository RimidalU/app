import Page from '../../Components/Page/page';
import './style.scss';
import Car from '../../Components/Car/car';

class GaragePage extends Page {
  static TextObject = {
    GarageTitle:
    `
    <div class="forms-container">
        <form class="form create-form" id="create-form">
              <input class="input" id="create-name" name="name" type="text" required />
              <input class="color" id="create-color" name="color" type="color" value="#4645b0"/>
              <button class="btn" type="submit">Create</button>
            </form>
            <form class="form update-form" id="update-form">
              <input class="input" id="update-name" name="name" type="text" disabled required/>
              <input class="color" id="update-color" name="color" type="color" value="#fce5bb" disabled/>
              <button class="btn" id="update-btn" type="submit" disabled >Update</button>
            </form>
          </div>
          <ul class="cont-wrap">
            <li class="item" ><button class="btn race-btn" id="race">Race</button></li>
            <li class="item" ><button class="btn reset-btn" id="reset" disabled>Reset</button></li>
            <li class="item" ><button class="btn generate-btn" id="generate">Generate</button></li>
          </ul>
          <div class="garage">
            <p class="garage-title">Garage (<span class="garage-count">4</span>) </p>
            <p class="page-title">Page #<span class="page-count">1</span></p>
          </div>
          <div id="garage-wrap" class="garage-wrap"></div>
          <div>
            <p class="win-title hidden" id="win-title"></p>
          </div>
          <div class="pagination-wrap">
            <button class="btn prev-button" disabled id="prev">Prev</button>
            <button class="btn next-button" disabled id="next">Next</button>
          </div>    
    `,
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(GaragePage.TextObject.GarageTitle);
    this.container.append(title);
    this.renderCar();
    this.renderCar();
    this.renderCar();
    this.renderCar();
    return this.container;
  }

  renderCar() {
    const car = new Car();
    const titleCar = this.createHeaderTitle(car.render());
    this.container.append(titleCar);
    return this.container;
  }
}

export default GaragePage;
