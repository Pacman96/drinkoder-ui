import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../services/auth";


export const RouthWrapper = ({
    routes = [],
    PreWrapper = ({ children }) => children,
    top,
    bottom,
}) => {
    const { user, signout, isAuthorized } = useAuth()
    return <BrowserRouter>
        <PreWrapper>
            <Suspense fallback={<div> Loading route </div>}>
                {top}
                <Switch>
                    {routes.map(({ id, title, path, component: Component, authenticated, roles, authorizations }) => {
                        const shouldCheckRoles = (Array.isArray(roles) || typeof roles === 'string') && roles.length > 0
                        const shouldCheckAuthorizations = (Array.isArray(authorizations) || typeof authorizations === 'string') && authorizations.length > 0
                        const { next, code } = isAuthorized(roles, authorizations)
                        return <Route
                            key={id}
                            exact
                            path={path}
                            render={(props) => (authenticated || shouldCheckRoles || shouldCheckAuthorizations) ? (
                                next ? <Component props={props} /> :
                                    code === 401 ? <Redirect to={{ pathname: '/401', state: { title } }} /> :
                                        code === 403 ? <Redirect to={{ pathname: '/403', state: { title } }} /> :
                                            <Redirect to='/404' />
                            ) :
                                <Component props={props} />
                            }
                        />
                    })}
                </Switch>
                {bottom}
            </Suspense>
        </PreWrapper>
    </BrowserRouter>

}