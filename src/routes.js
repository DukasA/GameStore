import Home from './pages/HomePage/index';
import GamePage from './pages/GamePage/index';
import { HOME_ROUTE, GAMEPAGE_ROUTE, REVIEWS_ROUTE } from './utils/consts';
import ReviewsPage from './pages/ReviewsPage';


export const appRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: GAMEPAGE_ROUTE + '/:id',
        Component: GamePage 
    },
    {
        path: REVIEWS_ROUTE,
        Component: ReviewsPage 
    }
]