//layout
import { HeaderOnly } from "~/component/layout";
import Home from "~/Pages/Home";
import Following from "~/Pages/Following";
import Profile from "~/Pages/Profile";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: HeaderOnly }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }