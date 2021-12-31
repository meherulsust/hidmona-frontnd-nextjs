export default function Footer({ children, footer }) {
    return (
        <footer className="footer">
          <div className="mt-5 p-4 text-white text-center">
            <div className="row">
              <div className="col-sm-6 mt-5 p-4">
                <p>Transaction information help: support@hidmona.ch</p>
                <ul className="nav nav-pills flex-column">
                  <li className="nav-item">
                    <strong>Support (USA) :</strong> +1 607 354 4284
                  </li>
                  <li className="nav-item">
                    <strong>Support (UK) :</strong> +44 1244 94 0789
                  </li>
                  <li className="nav-item">
                    <strong>Support(Sweden) :</strong> +46 40-693 98 96
                  </li>
                </ul>
                <hr className="d-sm-none" />
              </div>
              <div className="col-sm-6 mt-5 p-4">
                <ul className="nav nav-pills flex-column">
                  <li>
                    <a href="#" className="link-secondary footer-link">
                      Global Home
                    </a>
                    &nbsp;
                    <a href="#" className="link-secondary footer-link">
                      Privacy policy
                    </a>
                    &nbsp;
                    <a href="#" className="link-secondary footer-link">
                      Terms and conditions
                    </a>
                  </li>
                  <li>© 2020 Hidmona Money Transfer - All Rights Reserved </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    )
  }