import { Redirect, Route } from "react-router"

export const NotFoundRoute = () => {
    return (
        <Route path="">
            <Redirect to="/not-found" />
        </Route>
    );
}