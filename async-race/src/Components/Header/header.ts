import BaseComponent from '../BaseComponent/baseComponent';
import { PageIds } from '../../module/app';
import './style.scss';

const Buttons = [
  {
    id: PageIds.GaragePage,
    text: 'to garage',
  },
  {
    id: PageIds.WinnersPage,
    text: 'to winners',
  },
];

class Header extends BaseComponent {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    pageButtons.classList.add('header-wrapper');
    pageButtons.innerHTML = '<img src=".../../assets/Cemagraphics-Classic-Cars-Bmw-mini.ico" alt="Bmw mini" class="header-ico">';
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.classList.add('header-button');
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });

    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
