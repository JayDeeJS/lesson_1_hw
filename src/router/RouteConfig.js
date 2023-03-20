import AboutPage from "../pages/aboutPage/AboutPage"
import BlogsPage from "../pages/blogsPage/BlogsPage"
import LoginPage from "../pages/loginPage/LoginPage"
import MainPage from "../pages/mainPage/MainPage"
import UsersPage from "../pages/usersPage/UsersPage"

export const PATHS = {
    MAIN: '/',
    ABOUT: '/about',
    BLOGS: '/blogs',
    LOGIN: '/login',
    USERS: '/users'
}

export const routes = [
    {
        id: 1,
        path: PATHS.MAIN,
        element: <MainPage/>
    },
    {
        id: 2,
        path: PATHS.ABOUT,
        element: <AboutPage/>
    },
    {
        id: 3,
        path: PATHS.BLOGS,
        element: <BlogsPage/>
    },
    {
        id: 4,
        path: PATHS.LOGIN,
        element: <LoginPage/>
    },
    {
        id: 5,
        path: PATHS.USERS,
        element: <UsersPage/>
    },
]