import './App.css'
import { Provider } from 'react-redux';
import {useRoutes}  from 'react-router-dom' ;
import { Auth0Provider } from '@auth0/auth0-react';
import Home from './components/homepage';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
 
 
import useAuthListener from './components/auth/useAuthListner';
import ProtectedRoute from './components/protectedRoute';
import { store } from './app/store';

 
function App() {
   const domain = import.meta.env.VITE_AUTH0_DOMAIN ;
   const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID ;
   return (
    <> 
    <Auth0Provider
    domain={domain}
    clientId={clientId} 
    authorizationParams={{
      redirect_uri: import.meta.env.VITE_REDIRECT_URI ,
    }}
    >
     <Provider store={store}> 
         <AppContent/>
     </Provider>
     </Auth0Provider>
    </>
  )
}

function AppContent() {
  const auth = useAuthListener()
   const routeArray = [
    {
      path:"/" ,
      element : <Home/>
    } ,
    {
      path:"/dashboard" ,
      element :  <ProtectedRoute auth={auth}> <Dashboard/> </ProtectedRoute> ,
    } ,
   ]

   const routeElement = useRoutes(routeArray) 
   return (
    <div className='flex flex-col'>
      <Navbar/>
      <div className='w-full h-screen flex flex-col pt-12'>
        {routeElement}
      </div>
    </div>
   )

}
export default App



// import './App.css'
// import { Provider } from 'react-redux';
// import { useRoutes } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';
// import Home from './components/homepage';
// import Navbar from './components/navbar';
// import Dashboard from './components/dashboard';
// import SidebarWithHeader from './components/navbar/SidebarWithHeader';
// import useAuthListener from './components/auth/useAuthListner';
// import ProtectedRoute from './components/protectedRoute';
// import { store } from './app/store';

// function App() {
//   const domain = import.meta.env.VITE_AUTH0_DOMAIN;
//   const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
//   return (
//     <> 
//       <Auth0Provider
//         domain={domain}
//         clientId={clientId}
//         authorizationParams={{
//           redirect_uri: import.meta.env.VITE_REDIRECT_URI,
//         }}
//       >
//         <Provider store={store}> 
//           <AppContent />
//         </Provider>
//       </Auth0Provider>
//     </>
//   )
// }

// function AppContent() {
//   const auth = useAuthListener();
//   const routeArray = [
//     {
//       path: "/",
//       element: <Home />
//     },
//     {
//       path: "/dashboard",
//       element: <ProtectedRoute auth={auth}> <Dashboard /> </ProtectedRoute>,
//     },
//   ];

//   const routeElement = useRoutes(routeArray);
//   return (
//     <div className='flex flex-col'>
//       <SidebarWithHeader />
//       <div className='flex flex-col ml-60'>
//         <Navbar />
//         <div className='w-full h-screen flex flex-col pt-12'>
//           {routeElement}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App;


//.............................................//

 