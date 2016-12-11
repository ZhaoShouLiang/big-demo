import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/github.css';
import './post.css';
import Routers from './router.js'
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();


// import Test from './Test.'



render(<Routers />,document.getElementById('root'));
