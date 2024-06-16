/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
// import typography from './typography';
// typography()

// const TextRendrer = Text.render;

// Text.render = function render(props) {
//     props = {...props, style: [{fontFamily: 'Poppins-Black'}, props.style]}
//     return TextRendrer.apply(this, [props]);



// }




AppRegistry.registerComponent(appName, () => App);
