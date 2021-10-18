import { Route, Switch, useRouteMatch } from "react-router";

import { NotFoundRoute } from "components/shared";
import {
    StateExampleOne,
    StateExampleTwo,
    StateExampleThree,
    StateExampleFour
} from "components/State/Examples";

export const StateRouting = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/example-one`} component={StateExampleOne} exact />
            <Route path={`${path}/example-two`} component={StateExampleTwo} exact />
            <Route path={`${path}/example-three`} component={StateExampleThree} exact />
            <Route path={`${path}/example-four`} component={StateExampleFour} exact />
            <NotFoundRoute />
        </Switch>
    );
}