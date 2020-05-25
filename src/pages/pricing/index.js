import React from 'react'

const Princing = () => {
  return (
    <section>
      <div class="container">
        <div class="row mb-5 justify-content-center text-center">
          <div class="col-lg-8 col-md-10">
            <h2 class="mt-4">Simple, Straight Pricing</h2>
            <div class="mt-2">
              <p class="lead lh-180">Thousands of developers around the world have already made Quick the main tool for building websites.</p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md">
            <div class="card card-pricing text-center px-3 shadow hover-scale-110">
              <div class="card-header py-5 border-0 delimiter-bottom">
                <div class="h1 text-center mb-0">$<span class="price font-weight-bolder">49</span></div>
                <span class="h6 text-muted">Standard License</span>
              </div>
              <div class="card-body">
                <ul class="list-unstyled text-sm mb-4">
                  <li>1 end product</li>
                  <li>Use for personal or a client</li>
                  <li>Use in a free end product</li>
                  <li>6 months technical support</li>
                </ul>
                <a href="https://themes.getbootstrap.com/product/quick-website-ui-kit-2/" class="btn btn-sm btn-warning hover-translate-y-n3 hover-shadow-lg mb-3" target="_blank">Purchase now</a>
              </div></div></div><div class="col-lg-4 col-md"><div class="card card-pricing bg-primary text-center px-3 shadow hover-scale-110">
                <div class="card-header py-5 border-0 delimiter-bottom">
                  <div class="h1 text-white text-center mb-0">
                    $<span class="price font-weight-bolder">590</span></div>
                  <span class="h6 text-white">Extended License</span>
                </div><div class="card-body">
                  <ul class="list-unstyled text-white text-sm opacity-8 mb-4">
                    <li>1 end product</li>
                    <li>Use for personal or a client</li>
                    <li>Use in a free end product</li>
                    <li>Use in an end product that is <strong class="text-success text-underline--dashed">sold</strong></li>
                    <li>6 months technical support</li>
                  </ul>
                  <a href="https://themes.getbootstrap.com/product/quick-website-ui-kit-2/" class="btn btn-sm btn-white hover-translate-y-n3 hover-shadow-lg mb-3" target="_blank">Purchase now</a>
                </div>
              </div>
          </div>
        </div>
        <div class="mt-5 text-center">
          <p class="mb-2">Both pricings contains all 6 months free support. Need more?</p>
          <a href="#" class="text-primary text-underline--dashed">Contact us
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="feather feather-arrow-right ml-2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Princing