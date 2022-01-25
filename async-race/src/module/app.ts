import Page from '../Components/Page/page';
import GaragePage from '../Pages/Garage/garage';
import WinnersPage from '../Pages/Winners/winners';
import ErrorPage, { ErrorTypes } from '../Pages/Error';
import Header from '../Components/Header/header';
import Footer from '../Components/Footer/footer';

export const enum PageIds {
  GaragePage = 'garage-page',
  WinnersPage = 'winners-page',
  ErrorPage = 'erroe-page',
}

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'current-page';

  private header: Header;

  private footer: Footer;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.GaragePage) {
      page = new GaragePage(idPage);
    } else if (idPage === PageIds.WinnersPage) {
      page = new WinnersPage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.header = new Header('header', 'header-container');
    this.footer = new Footer('footer', 'footer-container');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('garage-page');
    App.container.append(this.footer.render());
    this.enableRouteChange();
  }
}

export default App;
