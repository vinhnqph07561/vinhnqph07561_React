import React from 'react';

export default function Navbar() {
    return (
        <div>
            <section className="home_banner_area mb-40">
        <div className="banner_inner d-flex align-items-center">
          <div className="container">
            <div className="banner_content row">
              <div className="col-lg-12">
                <p className="sub text-uppercase">men Collection</p>
                <h3><span>Show</span> Your <br />Personal <span>Style</span></h3>
                <h4>Fowl saw dry which a above together place.</h4>
                <a className="main_btn mt-40" href="#">View Collection</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="feature-area section_gap_bottom_custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-money" />
                  <h3>Money back gurantee</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-truck" />
                  <h3>Free Delivery</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-support" />
                  <h3>Alway support</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <a href="#" className="title">
                  <i className="flaticon-blockchain" />
                  <h3>Secure payment</h3>
                </a>
                <p>Shall open divide a one</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}