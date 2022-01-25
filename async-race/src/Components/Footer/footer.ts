import BaseComponent from '../BaseComponent/baseComponent';
import './style.scss';

class Footer extends BaseComponent {
  
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }
  
  renderFooter() {
    const footerWrap = document.createElement('div');
    footerWrap.classList.add('footer__wrap');
    footerWrap.innerHTML = `
    <div class='footer__cont'>
    <a href='https://rs.school/js/' class='footer__link-rss' target='blank'>
      <img class='footer__img' src='././assets/rss.svg' alt='RS school' />
    </a>
    <span class='footer__span'>2022</span>
    <a href='https://github.com/RimidalU' target='blank' class='footer__link'
      >RimidalU</a>
  </div>  
    `;
    this.container.append(footerWrap);
  }

  render() {
    this.renderFooter();
    return this.container;
  }
}

export default Footer;
