import React from 'react'

const Faq = () => {
  return (
    <>
      <section className="slice slice-lg bg-cover bg-size--cover">

        <span className="mask bg-primary opacity-9">
        </span>

        <div className="container pt-5">

          <div className="row justify-content-center">

            <div className="col-lg-9">

              <h2 className="mb-4 text-center text-white">

                How can we help?</h2>

              <form>

                <div className="form-group bg-neutral rounded-pill mb-0 px-2 py-2 shadow">

                  <div className="row">

                    <div className="col">

                      <div className="input-group input-group-merge shadow-none">

                        <div className="input-group-prepend">

                          <span className="input-group-text bg-transparent border-0">

                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">

                              <circle cx="11" cy="11" r="8">

                              </circle>

                              <line x1="21" y1="21" x2="16.65" y2="16.65">

                              </line>

                            </svg>

                          </span>

                        </div>

                        <input type="text" className="form-control form-control-flush shadow-none" placeholder="Search for answers ..." />

                      </div>

                    </div>

                    <div className="col-auto">

                      <button type="button" className="btn btn-block btn-dark rounded-pill">
                        Search</button>

                    </div>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

        <div className="container position-relative zindex-100">

          <div className="my-5 text-center">

            <h6 className="text-white font-weight-light mb-0">

              or choose a category to quickly find the answer you need</h6>

          </div>

        </div>

      </section>

      <section className="slice slice-lg" id="sct-faq">

        <div className="container">

          <div className="row row-grid">

            <div className="col-lg-3">

              <div data-toggle="sticky" data-sticky-offset="50" className="">

                <div className="card">

                  <div className="list-group list-group-flush">
                    <a href="#theme-integration" data-scroll-to="" data-scroll-to-offset="50" className="list-group-item list-group-item-action d-flex justify-content-between">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layout mr-2">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2">
                          </rect>
                          <line x1="3" y1="9" x2="21" y2="9">
                          </line>
                          <line x1="9" y1="21" x2="9" y2="9">
                          </line>
                        </svg>
                        <span>
                          Theme integration</span>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                          <polyline points="9 18 15 12 9 6">
                          </polyline>
                        </svg>
                      </div>
                    </a>
                    <a href="#customization" data-scroll-to="" data-scroll-to-offset="50" className="list-group-item list-group-item-action d-flex justify-content-between">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sliders mr-2">
                          <line x1="4" y1="21" x2="4" y2="14">
                          </line>
                          <line x1="4" y1="10" x2="4" y2="3">
                          </line>
                          <line x1="12" y1="21" x2="12" y2="12">
                          </line>
                          <line x1="12" y1="8" x2="12" y2="3">
                          </line>
                          <line x1="20" y1="21" x2="20" y2="16">
                          </line>
                          <line x1="20" y1="12" x2="20" y2="3">
                          </line>
                          <line x1="1" y1="14" x2="7" y2="14">
                          </line>
                          <line x1="9" y1="8" x2="15" y2="8">
                          </line>
                          <line x1="17" y1="16" x2="23" y2="16">
                          </line>
                        </svg>
                        <span>
                          Customization</span>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                          <polyline points="9 18 15 12 9 6">
                          </polyline>
                        </svg>
                      </div>
                    </a>
                    <a href="#fonts-and-colors" data-scroll-to="" data-scroll-to-offset="50" className="list-group-item list-group-item-action d-flex justify-content-between">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3 mr-2">
                          <path d="M12 20h9">
                          </path>
                          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z">
                          </path>
                        </svg>
                        <span>
                          Fonts and colors</span>
                      </div>
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                          <polyline points="9 18 15 12 9 6">
                          </polyline>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 ml-lg-auto">
              <div className="mb-5">
                <h4 className="mb-4" id="theme-integration">
                  Theme integration</h4>
                <div id="accordion-1" className="accordion accordion-spaced">
                  <div className="card">
                    <div className="card-header py-4" id="heading-1-1" data-toggle="collapse" role="button" data-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file mr-3">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z">
                          </path>
                          <polyline points="13 2 13 9 20 9">
                          </polyline>
                        </svg>
Which license do I need?</h6>
                    </div>
                    <div id="collapse-1-1" className="collapse" aria-labelledby="heading-1-1" data-parent="#accordion-1">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header py-4" id="heading-1-2" data-toggle="collapse" role="button" data-target="#collapse-1-2" aria-expanded="false" aria-controls="collapse-1-2">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-unlock mr-3">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
                          </rect>
                          <path d="M7 11V7a5 5 0 0 1 9.9-1">
                          </path>
                        </svg>
How do I get access to a theme?</h6>
                    </div>
                    <div id="collapse-1-2" className="collapse" aria-labelledby="heading-1-2" data-parent="#accordion-1">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header py-4" id="heading-1-3" data-toggle="collapse" role="button" data-target="#collapse-1-3" aria-expanded="false" aria-controls="collapse-1-3">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder mr-3">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                          </path>
                        </svg>
How do I see previous orders?</h6>
                    </div>
                    <div id="collapse-1-3" className="collapse" aria-labelledby="heading-1-3" data-parent="#accordion-1">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right py-4">
                  <a href="#theme-integration" data-scroll-to="" data-scroll-to-offset="50" className="text-sm font-weight-bold">
                    Back to top<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up ml-2">
                      <polyline points="18 15 12 9 6 15">
                      </polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mb-md">
                <h4 className="mb-4" id="customization">
                  Customization</h4>
                <div id="accordion-2" className="accordion accordion-spaced">
                  <div className="card">
                    <div className="card-header py-4" id="heading-2-1" data-toggle="collapse" role="button" data-target="#collapse-2-1" aria-expanded="false" aria-controls="collapse-2-1">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file mr-3">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z">
                          </path>
                          <polyline points="13 2 13 9 20 9">
                          </polyline>
                        </svg>
Which license do I need?</h6>
                    </div>
                    <div id="collapse-2-1" className="collapse" aria-labelledby="heading-2-1" data-parent="#accordion-2">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header py-4" id="heading-2-2" data-toggle="collapse" role="button" data-target="#collapse-2-2" aria-expanded="false" aria-controls="collapse-2-2">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-unlock mr-3">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
                          </rect>
                          <path d="M7 11V7a5 5 0 0 1 9.9-1">
                          </path>
                        </svg>
How do I get access to a theme?</h6>
                    </div>
                    <div id="collapse-2-2" className="collapse" aria-labelledby="heading-2-2" data-parent="#accordion-2">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header py-4" id="heading-2-3" data-toggle="collapse" role="button" data-target="#collapse-2-3" aria-expanded="false" aria-controls="collapse-2-3">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder mr-3">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                          </path>
                        </svg>
How do I see previous orders?</h6>
                    </div>
                    <div id="collapse-2-3" className="collapse" aria-labelledby="heading-2-3" data-parent="#accordion-2">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right py-4">
                  <a href="#customization" data-scroll-to="" data-scroll-to-offset="50" className="text-sm font-weight-bold">
                    Back to top<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up ml-2">
                      <polyline points="18 15 12 9 6 15">
                      </polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="mb-md">
                <h4 className="mb-4" id="fonts-and-colors">
                  Fonts and colors</h4>
                <div id="accordion-3" className="accordion accordion-spaced">
                  <div className="card">
                    <div className="card-header py-4" id="heading-3-1" data-toggle="collapse" role="button" data-target="#collapse-3-1" aria-expanded="false" aria-controls="collapse-3-1">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file mr-3">
                          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z">
                          </path>
                          <polyline points="13 2 13 9 20 9">
                          </polyline>
                        </svg>Which license do I need?</h6>
                    </div>
                    <div id="collapse-3-1" className="collapse" aria-labelledby="heading-3-1" data-parent="#accordion-3">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header py-4" id="heading-3-2" data-toggle="collapse" role="button" data-target="#collapse-3-2" aria-expanded="false" aria-controls="collapse-3-2">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-unlock mr-3">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2">
                          </rect>
                          <path d="M7 11V7a5 5 0 0 1 9.9-1">
                          </path>
                        </svg>
How do I get access to a theme?</h6>
                    </div>
                    <div id="collapse-3-2" className="collapse" aria-labelledby="heading-3-2" data-parent="#accordion-3">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header py-4" id="heading-3-3" data-toggle="collapse" role="button" data-target="#collapse-3-3" aria-expanded="false" aria-controls="collapse-3-3">
                      <h6 className="mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder mr-3">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z">
                          </path>
                        </svg>
How do I see previous orders?</h6>
                    </div>
                    <div id="collapse-3-3" className="collapse" aria-labelledby="heading-3-3" data-parent="#accordion-3">
                      <div className="card-body">
                        <p>
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right py-4">
                  <a href="#fonts-and-colors" data-scroll-to="" data-scroll-to-offset="50" className="text-sm font-weight-bold">
                    Back to top<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up ml-2">
                      <polyline points="18 15 12 9 6 15">
                      </polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq