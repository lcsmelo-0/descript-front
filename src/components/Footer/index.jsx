import logo from '../../assets/img/logo-branco.png'
import './footer.module.css'

const Footer = () => {
  return (
    <footer className="position-relative" id="footer-main">
      <div className="footer pt-lg-7 footer-dark bg-dark">
        <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
          <svg
            width="2560px"
            height="100px"
            preserveAspectRatio="none"
            x="0px"
            y="0px"
            style={{ enableBackground: 'new 0 0 2560 100' }}
          >
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container">
          <h2 className="teste">O Descript é uma plataforma da Sondery</h2>
          <p>
            Nós criamos uma plataforma de tecnologia para agilizar e automatizar todos os processos de contratação,
            criação e aprovação de audiodescrições, que são feitas pelos melhores profissionais do mercado.
          </p>
        </div>
        <div className="container pt-4">
          <hr className="divider divider-fade divider-dark my-5" />
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <a href="index.html">
                <img src={logo} alt="Logo" />
              </a>
              <p className="mt-4 text-sm opacity-8 pr-lg-4">
                O Descript tenta oferecer a melhor plataforma de audio descrição para o seu negócio.
              </p>
              <ul className="nav mt-4">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/sonderybr"
                    target="_blank"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/sondery"
                    target="_blank"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3">Account</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Profile</a>
                </li>
                <li>
                  <a href="/">Settings</a>
                </li>
                <li>
                  <a href="/">Billing</a>
                </li>
                <li>
                  <a href="/">Notifications</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">About</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Pricing</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Community</a>
                </li>
                <li>
                  <a href="/">Help center</a>
                </li>
                <li>
                  <a href="/">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
              <div className="copyright text-sm font-weight-bold text-center text-md-left">
                © 2021{' '}
                <a href="https://webpixels.io" className="font-weight-bold">
                  Descript
                </a>
                . Todos direitos reservados
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Termos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
