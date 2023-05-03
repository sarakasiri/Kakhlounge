import { Routes, Route } from 'react-router-dom';
// import { ProtectedRoute } from '../protectedRoute/ProtectedRoute';

// import Page404 from '../../containers/page404/Page404';
// import Dashboard from '../../components/adminPanel/dashboard/Dashboard';



const AppRouter = () => {
    const routes = [
        // {
        //     path: '*',
        //     component: <Page404 />,
        //     protected: false,
        //     exact: false,
        // },
        // {
        //     path: '/dashboard',
        //     component: <Dashboard />,
        //     protected: true,
        //     exact: true
        // },
    ]
    return (
        <Routes>
            {routes.map((element, index) => (
                <>
                    <Route key={`approutes_${index}`} exact={element.exact} path={element.path} element={element.protected ?
                        <>
                            {element.component}
                        </>
                        :
                        element.component
                    } />
                </>
            ))}
        </Routes>
    );
};

export default AppRouter;