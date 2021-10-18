import { Route, Switch, useRouteMatch } from "react-router";

import { NotFoundRoute } from "components/shared";
import {
    ReducerExampleOne,
    ReducerExampleTwo,
    ReducerExampleThree
} from "components/Reducers/Examples";

export const ReducerRouting = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/example-one`} component={ReducerExampleOne} exact />
            <Route path={`${path}/example-two`} component={ReducerExampleTwo} exact />
            <Route path={`${path}/example-three`} component={ReducerExampleThree} exact />
            <NotFoundRoute />
        </Switch>
    );
}