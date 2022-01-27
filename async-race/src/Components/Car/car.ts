import { flagIco } from '../../assets/finish';
import { carIco } from '../../assets/car';

export interface ICar {
  nameCar: string;
  colorCar: string;
  id: number;
}

export default class Car implements ICar {
  nameCar: string;

  colorCar: string;

  id: number;

  constructor(name = 'BMW', color = 'green', id = 1) {
    this.nameCar = name;
    this.colorCar = color;
    this.id = id;
  }

  setName(newName: string): void {
    this.nameCar = newName;
  }

  getName(): string {
    return this.nameCar;
  }

  setColor(newColor: string): void {
    this.colorCar = newColor;
  }

  getColor(): string {
    return this.colorCar;
  }

  getID(): number {
    return this.id;
  }

  async createCar() {
    const url = 'http://127.0.0.1:3000/garage';

    const dataParams = {
      name: this.nameCar,
      color: this.colorCar,
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataParams),
    });
    const result = await response.json();
    console.log(result.JSON.s);
    
    return result;
  }

  async getCar() {
    const url = 'http://127.0.0.1:3000/garage';
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }

  render = (): string => `
      <div class="carIco-wrap">
        <div class="car-controls">          
          <button class="select-car" id="select-${this.id}">Select</button>
          <button class="delete-car" id="delete-${this.id}">Delete</button>
          <div>
            <button class="car-button start-button" id="start-${this.id}">A</button>
            <button class="car-button stop-button" id="stop-${this.id}">B</button>
          </div>
          <p class="carIco-title">${this.nameCar}</p>
        </div>
        <div class="road">
          ${carIco}
          ${flagIco}
        </div>
      </div>
    `;
}
