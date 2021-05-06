import './index.css';
import Menu from '../scripts/components/Menu.js';
import {menuSettings} from '../scripts/utils/utils.js';

const menu = new Menu(menuSettings);
menu.setEventListeners();



