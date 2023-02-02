import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Register from '~/pages/Register';
import Profile from '~/pages/Profile';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile, layout: HeaderOnly },
];

const pirvateRoutes = [];

export { publicRoutes, pirvateRoutes };
