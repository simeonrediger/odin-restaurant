import './styles/base.css';
import './styles/layout.css';
import './styles/button.css';

import navbar from './app/navbar.js';
import container from './app/container.js';
import renderHome from './pages/home/home.js';
import renderMenu from './pages/menu/menu.js';

navbar.bindEvents(
    () => container.render(renderHome),
    () => container.render(renderMenu),
);

container.render(renderHome);
