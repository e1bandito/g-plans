// require('../../blocks/modal/modal');

import burger from "../../blocks/burger/burger";
import {mainNavClose} from "../../blocks/main-nav/main-nav";
import {toggleDropdown} from "../../blocks/main-nav/main-nav"

burger('.burger', '.main-nav');
mainNavClose();
toggleDropdown();
