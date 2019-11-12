import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {Clock} from './clock';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleDown, faAngleUp, faPlay, faPause, faSyncAlt} from '@fortawesome/free-solid-svg-icons';
library.add(faAngleDown, faAngleUp, faPlay, faPause, faSyncAlt);


ReactDOM.render(<Clock />, document.getElementById('app'));