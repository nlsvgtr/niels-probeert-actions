// polyfills
import 'core-js/es/array/find';
import 'core-js/es/array/find-index';
import 'core-js/es/array/includes';
import 'core-js/es/string/includes';
import 'core-js/es/object/assign';
import 'whatwg-fetch';

// react
import React from 'react';
import ReactDOM from 'react-dom';

// import css to make sure it is generated in the result
import './index.less';

// the module
import OpenStadComponent from './component/index.jsx';
import Libs from './libs/index.jsx';
import BaseMap from './base-map/index.jsx';

export {
  OpenStadComponent,
  Libs,
  BaseMap,
}


