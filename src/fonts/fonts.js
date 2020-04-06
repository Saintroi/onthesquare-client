import { createGlobalStyle } from 'styled-components'

import RobotoBlack from './Roboto-Black.ttf';
import RobotoBlackItalic from './Roboto-BlackItalic.ttf';
import RobotoBold from './Roboto-Bold.ttf';
import RobotoBoltItalic from './Roboto-BoldItalic.ttf';
import RobotoLight from './Roboto-Light.ttf';
import RobotoLightItalic from './Roboto-LightItalic.ttf';
import RobotoMedium from './Roboto-Medium.ttf';
import RobotoMediumItalic from './Roboto-MediumItalic.ttf';
import Roboto from './Roboto-Regular.ttf';
import RobotoThin from './Roboto-Thin.ttf';
import RobotoThinItalic from './Roboto-ThinItalic.ttf';


export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto'),
        url(${Roboto}) format('ttf'),
        url(${RobotoBold}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;