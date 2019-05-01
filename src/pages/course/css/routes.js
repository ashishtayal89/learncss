import React, { Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Advanced from './modules/advanced/index';
import Animations from './modules/advanced/animations/index';
import RoundedCorners from './modules/advanced/roundedCorners/index';
import BorderImages from './modules/advanced/borderImages/index';
import Background from './modules/advanced/backgrounds/index';
import BoxSizing from './modules/advanced/boxsizing/index';
import FlexBox from './modules/advanced/flexbox';
import Variables from './modules/advanced/variables';
import UserInterface from './modules/advanced/userInterface';
import MultipleColumns from './modules/advanced/multipleColumns';
import ObjectFit from './modules/advanced/objectFit';
import Transforms from './modules/advanced/transforms';
import Transition from './modules/advanced/transition';
import WebFonts from './modules/advanced/webfonts';
import TextEffects from './modules/advanced/textEffects';
import Shadows from './modules/advanced/shadows';
import Gradients from './modules/advanced/gradients';
import Color from './modules/advanced/color';
import Basic from './modules/basic';
import Introduction from './modules/basic/introduction';
import BoxModel from './modules/basic/boxModel';
import Selectors from './modules/basic/selectors';

const AdvancedRoutes = ({ match }) => (
    <Fragment>
        <Route exact path={`${match.url}/advanced`} component={Advanced} />
        <Route exact path={`${match.url}/advanced/animations`} component={Animations} />
        <Route exact path={`${match.url}/advanced/roundedCorners`} component={RoundedCorners} />
        <Route exact path={`${match.url}/advanced/borderImages`} component={BorderImages} />
        <Route exact path={`${match.url}/advanced/backgrounds`} component={Background} />
        <Route exact path={`${match.url}/advanced/boxsizing`} component={BoxSizing} />
        <Route exact path={`${match.url}/advanced/flexbox`} component={FlexBox} />
        <Route exact path={`${match.url}/advanced/variables`} component={Variables} />
        <Route exact path={`${match.url}/advanced/userInterface`} component={UserInterface} />
        <Route exact path={`${match.url}/advanced/multipleColumns`} component={MultipleColumns} />
        <Route exact path={`${match.url}/advanced/objectFit`} component={ObjectFit} />
        <Route exact path={`${match.url}/advanced/transforms`} component={Transforms} />
        <Route exact path={`${match.url}/advanced/transition`} component={Transition} />
        <Route exact path={`${match.url}/advanced/webfonts`} component={WebFonts} />
        <Route exact path={`${match.url}/advanced/textEffects`} component={TextEffects} />
        <Route exact path={`${match.url}/advanced/shadows`} component={Shadows} />
        <Route exact path={`${match.url}/advanced/gradients`} component={Gradients} />
        <Route exact path={`${match.url}/advanced/color`} component={Color} />
    </Fragment>
)

const BasicRoutes = ({ match }) => (
    <Fragment>
        <Route exact path={`${match.url}/basic`} component={Basic} />
        <Route exact path={`${match.url}/basic/introduction`} component={Introduction} />
        <Route exact path={`${match.url}/basic/boxModel`} component={BoxModel} />
        <Route exact path={`${match.url}/basic/selectors`} component={Selectors} />
    </Fragment>
)

const routes = ({ match }) => (
    <Fragment>
        <BasicRoutes match={match} />
        <AdvancedRoutes match={match} />
    </Fragment>)

export default withRouter(routes);