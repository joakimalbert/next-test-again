import React from 'react';
import { withNamespaces } from '../i18n';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer__wrapper">
        <div className="container">
        <h3>@ 2018 eEducation Albert AB | All rights reserved</h3>
          <div className="social_links">
            <h2>{this.props.t("Follow Us")}</h2>
            <ul>
              {/*<li><FontAwesomeIcon icon={ ['fas', 'faCheckSquare'] }/></li>*/}
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
          
          <div className="more_info">
            <h2>{this.props.t("more information")}</h2>
            <a href="#">Frequently asked questions</a>
            <a href="#">Terms & Conditions</a>
          </div>

          <div className="company_info">
            <h2>{this.props.t("company information")}</h2>
            <a href="#">About Albert</a>
            <a href="#">Press</a>
            <a href="#">Contact us</a>
          </div>
          <div className="albert_header">
            <h1>albert</h1>
          </div>
        </div>

        <style jsx>{`
                    .footer__wrapper {
                        background-color: #68B8CA;
                        padding-top: 100px;
                        margin: 0px;
                      
                    }
                    .container {
                      display: flex;
                      flex-direction: column-reverse;

                    }
                    .company_info a, .more_info a {
                      flex-direction: column;
                      flex: 1;
                      color: #fff;
                      margin: 5px 0px 5px 0px;
                      text-decoration: none;
                    
                    }

                    .social_links, .company_info, .more_info, .albert_header {
                      margin: 20px;
                    }
                    .social_links ul {
                      list-style-type: none;
                    }
                    h1 {
                      color: #fff;
                      font-size: 30pt;
                    }
                    h2 {
                      color: #fff;
                      font-size: 18pt;
                      text-transform: uppercase;
                    }
                    h3 {
                      font-size: 14pt;
                      color: #fff;
                      text-align: center;
                      margin-bottom: 10px;
                    }
                    a {
                      font-size: 16pt;
                    }
                    @media (min-width: 600px) {
                      .social_links, .company_info, .more_info {
                        flex-direction: row;
                      }
                    
                     
                    }



                  
            `}</style>
      </footer>
    )
  }
}

export default withNamespaces('footer')(Footer)
