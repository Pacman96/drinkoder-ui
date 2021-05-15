import { lazy, StrictMode } from 'react';
import ReactDOM from 'react-dom';
// import './lib/styles/root.scss';
import './drinkit-ui/scss/index.scss';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from './services/auth';
import { RouthWrapper } from './Routh';
import App from './App';



ReactDOM.render(
  <StrictMode>

    <AuthProvider config={{
      extraUserCollection: 'profiles', // extra collection ('' = no extra)
      rolesList: [
        {
          label: 'Manager',
          value: 'manager',
          initialAuthorizations: ['MANAGE']
        },
        {
          label: 'Transporter',
          value: 'transporter',
          initialAuthorizations: ['TRANSPORT']
        },
      ], // array of { value: '', label: '',initialAuthorizations : [''] }
      authorizationsList: [], // array of { value: '', label: ''}
      initialRole: '', // string
      initialAuthorizations: [], // for all users (config in rolesList for each specific role)
    }
    }
    >
      <RouthWrapper
        PreWrapper={({ children }) => <App children={children} />}
        routes={[
          {
            title: 'Protected page',
            id: 'protected', path: '/buttons', component: lazy(() => import('./pages/ButtonsPage')),
            authenticated: false, roles: '', authorizations: ''
          },
          {
            title: 'Registration page',
            id: 'register', path: '/register', component: lazy(() => import('./Routh/pages/auth/Register')),
            authenticated: false, roles: '', authorizations: ''
          },
          {
            title: 'Login page',
            id: 'login', path: '/login', component: lazy(() => import('./Routh/pages/auth/Login')),
            authenticated: false, roles: '', authorizations: ''
          },
          {
            title: '',
            id: '401', path: '/401', component: lazy(() => import('./Routh/pages/misc/Unauthorized')),
            authenticated: false, roles: '', authorizations: ''
          },
          {
            title: '',
            id: '403', path: '/403', component: lazy(() => import('./Routh/pages/misc/Forbidden')),
            authenticated: false, roles: '', authorizations: ''
          },
          {
            title: 'Homepage',
            id: 'home', path: '/', component: lazy(() => import('./Routh/pages/Homepage')),
            authenticated: false, roles: '', authorizations: ''
          },
          {
            title: '',
            id: '404', path: '', component: lazy(() => import('./Routh/pages/misc/NotFound')),
            authenticated: false, roles: '', authorizations: ''
          }
        ]} />

    </AuthProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
