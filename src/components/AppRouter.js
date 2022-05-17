import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {appRoutes} from '../routes';

function AppRouter () {

    return (
        <Routes>
            {appRoutes.map(({path, Component}) =>  
                <Route key={path} path={path} element={<Component/>} />
            )}
        </Routes>
    )

}

export default AppRouter;