import React, { Component } from 'react'

import logo from '../../assets/img/logo.png'

const Footer = props => {
  return (
    <footer className="position-relative" id="footer-main">
      <div className="footer pt-lg-7 footer-dark bg-dark">
        <div className="shape-container shape-line shape-position-top shape-orientation-inverse">
          <svg width="2560px" height="100px" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" style={{ enableBackground: "new 0 0 2560 100" }}>
            <polygon points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container pt-4">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h3 className="text-secondary mb-2">Brilliant solutions for your ideas</h3>
                  <p className="lead mb-0 text-white opacity-8">Build modern looking websites fast and easy using Quick.</p>
                </div>
                <div className="col-lg-5 text-lg-right mt-4 mt-lg-0">
                  <a href="../../docs/index.html" className="btn btn-white btn-icon my-2" target="_blank">
                    <span className="btn-inner--icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book text-primary">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20">
                        </path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z">
                        </path>
                      </svg>
                    </span>
                    <span className="btn-inner--text">Documentation</span>
                  </a>
                  <a href="https://themes.getbootstrap.com/product/quick-website-ui-kit-2/" className="btn btn-primary my-2 ml-0 ml-sm-3" target="_blank">Purchase now</a>
                </div>
              </div>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-5" />
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <a href="../../index.html">
                <img src={logo} />
              </a>
              <p className="mt-4 text-sm opacity-8 pr-lg-4">O Descript tenta ofercer a melhor plataforma de audio descrição para seu negócio.</p>
              <ul className="nav mt-4">

                <li className="nav-item">
                  <a className="nav-link" href="https://www.instagram.com/sonderybr" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.facebook.com/sonderybr" target="_blank">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
              <h6 className="heading mb-3">Account</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Billing</a>
                </li>
                <li>
                  <a href="#">Notifications</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">About</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
              <h6 className="heading mb-3">Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="divider divider-fade divider-dark my-4" />
          <div className="row align-items-center justify-content-md-between pb-4">
            <div className="col-md-6">
              <div className="copyright text-sm font-weight-bold text-center text-md-left">© 2020 <a href="https://webpixels.io" className="font-weight-bold" target="_blank">Descript</a>. Todos direitos reservados</div>
            </div>
            <div className="col-md-6">
              <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">Termos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Privacidade</a>
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