
// import { HeaderOnly } from "~/layouts";
import config from "~/config";
import Home from "~/Pages/Home";
import Following from "~/Pages/Following";
import Profile from "~/Pages/Profile";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }