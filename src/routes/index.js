
// import { HeaderOnly } from "~/component/layout";
import routes from "~/config/routes";
import Home from "~/Pages/Home";
import Following from "~/Pages/Following";
import Profile from "~/Pages/Profile";

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.following, component: Following },
    { path: routes.profile, component: Profile },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }