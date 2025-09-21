import './styles/base.css';
import './styles/layout.css';
import './styles/button.css';

import navbar from './app/navbar.js';
import container from './app/container.js';
import renderHomePage from './pages/home/home.js';
import renderMenuPage from './pages/menu/menu.js';

navbar.bindEvents(
    () => container.render(renderHomePage),
    () => container.render(renderMenuPage),
);

container.render(renderHomePage);
