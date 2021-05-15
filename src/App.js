
import { useLocation } from 'react-router';
import { LayoutProvider } from './drinkit-ui/layout/index';

// props
function App({ children }) {
  const { pathname } = useLocation()

  const sidebars = {
    customer: {
      visible: true,
      menu: [],
      top: null,
      bot: null,
    },
    manager: {
      visible: true,
      menu: [],
      top: null,
      bot: null,
    },
    transporter: {
      visible: true,
      menu: [],
      top: null,
      bot: null,
    },
    ordersManager: {
      visible: true,
      menu: [],
      top: null,
      bot: null,
    },
    default: {
      visible: true,
      menu: [
        { id: 'homepage', path: '/', label: 'Homepage', isActive: pathname === '/' },
        { id: 'buttons', label: 'Buttons', path: '/buttons', isActive: pathname === '/buttons' },
        { id: 'form', label: 'Inputs', path: '/inputs', isActive: pathname === '/inputs' },
        { id: 'cards', label: 'Crads', path: '/cards', isActive: pathname === '/cards' },
      ],
      top: null,
      bot: null,
    }
  }
  const headers = {
    customer: {
      visible: true,
      fixed: true,
      hamburger: <> H </>,
      logo: <> Logo </>,
      right: <> Customer mode </>
    },
    manager: {
      visible: true,
      fixed: true,
      hamburger: <> H </>,
      logo: <> Logo </>,
      right: <> Manager mode </>
    },
    transporter: {
      visible: true,
      fixed: true,
      hamburger: <> H </>,
      logo: <> Logo </>,
      right: <> Transporter mode </>
    },
    ordersManager: {
      visible: true,
      fixed: true,
      hamburger: <> H </>,
      logo: <> Logo </>,
      right: <> Orders Manager mode </>
    },
    default: {
      visible: true,
      fixed: true,
      hamburger: <> H </>,
      logo: <> Logo </>,
      right: <> Public mode </>
    }
  }
  const footers = {
    default: {
      visible: true,
      content: <div> Footer here </div>
    }
  }
  return (
    <LayoutProvider
      sidebars={sidebars}
      headers={headers}
      footers={footers}
    >
      {children}
    </LayoutProvider>
  );
}

export default App;
