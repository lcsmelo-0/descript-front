import { useState } from 'react'
import { useRouter } from 'next/router'
import { excludeData } from '../../services/auth'

const Header = () => {
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    console.log('toggle')
    setCollapsed(!collapsed)
  }

  const logout = () => {
    excludeData()
    window.location.reload(true)
  }

  const goTo = route => {
    router.push(route)
  }

  return (
    <header className="" id="header-main">
      <nav className="navbar navbar-main navbar-expand-lg navbar-light" id="navbar-main">
        <div className="container">
          <a className="navbar-brand" onClick={() => goTo('/')}>
            <img src="https://storage.googleapis.com/teste-front.appspot.com/logonovo.png" alt="Logo do descript" />
          </a>
          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar-collapse-overlay"
            isOpen={!collapsed}
            id="navbar-main-collapse"
          >
            <div className="position-relative">
              <button
                className="navbar-toggler"
                type="button"
                dataToggle="collapse"
                dataTarget="#navbar-main-collapse"
                ariaControls="navbar-main-collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <ul className="navbar-nav ml-lg-auto">
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a
                  className="nav-link"
                  onClick={() => goTo('/planos-e-precos')}
                  role="button"
                  dataToggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Planos e preços
                </a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a
                  className="nav-link"
                  onClick={() => goTo('/como-funciona')}
                  role="button"
                  dataToggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Como funciona
                </a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a
                  className="nav-link"
                  onClick={() => goTo('/quem-somos')}
                  role="button"
                  dataToggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Quem somos
                </a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a
                  className="nav-link"
                  onClick={() => goTo('/termos')}
                  role="button"
                  dataToggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Termos
                </a>
              </li>
              <li className="nav-item nav-item-spaced dropdown dropdown-animate" dataToggle="hover">
                <a
                  className="nav-link"
                  onClick={() => goTo('/faq')}
                  role="button"
                  dataToggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Perguntas frequentes
                </a>
              </li>
            </ul>
            <ul className="navbar-nav align-items-lg-center d-none d-lg-flex ml-lg-auto">
              <li className="nav-item">
                {localStorage.getItem('front-descript') ? (
                  <a
                    onClick={() => {
                      goTo('/logout')
                      logout
                    }}
                  >
                    Logout
                  </a>
                ) : (
                  <a onClick={() => goTo('/login')}>Login</a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
