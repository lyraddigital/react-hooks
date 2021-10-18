import { Route, Switch, useRouteMatch } from "react-router";

import { NotFoundRoute } from "components/shared";
import { ReducerExampleOne } from "components/Reducers/Examples";

export const ReducerRouting = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/example-one`} component={ReducerExampleOne} exact />
            <NotFoundRoute />
        </Switch>
    );
}