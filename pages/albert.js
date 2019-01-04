import React from 'react'
import { Link, withNamespaces } from '../i18n'

class Albert extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'footer']
    }
  }
  render() {
    const { t } = this.props
    return (
      <React.Fragment>
        <div>
            {/* 
                Start of global snippet: Please do not remove
                Place this snippet between the <head> and </head> tags on every page of your site.
                */}
            {/* Global site tag (gtag.js) - Google Marketing Platform */}
            {/* End of global snippet: Please do not remove */} 
            {/* Adform Tracking Code BEGIN */}
            <noscript>
                &lt;p style="margin:0;padding:0;border:0;"&gt;
                &lt;img src="https://track.adform.net/Serving/TrackPoint/?pm=1511642" width="1" height="1" alt="" /&gt;
                &lt;/p&gt;
            </noscript>
            {/* Adform Tracking Code END */}
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
            <title>Albert</title>
            {/* This site is optimized with the Yoast SEO plugin v6.1.1 - https://yoa.st/1yg?utm_content=6.1.1 */}
            <link rel="canonical" href="https://www.hejalbert.se/" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Main Page - Albert" />
            <meta property="og:url" content="https://www.hejalbert.se/" />
            <meta property="og:site_name" content="Albert" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content="Main Page - Albert" />
            {/* / Yoast SEO plugin. */}
            <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
            <link rel="dns-prefetch" href="//s.w.org" />
            <link rel="stylesheet" id="sb_instagram_styles-css" href="https://www.hejalbert.se/wp-content/plugins/instagram-feed/css/sb-instagram.min.css?ver=1.5.1" type="text/css" media="all" />
            <link rel="stylesheet" id="videojs-plugin-css" href="https://www.hejalbert.se/wp-content/plugins/videojs-html5-video-player-for-wordpress/plugin-styles.css?ver=4.9.3" type="text/css" media="all" />
            <link rel="stylesheet" id="videojs-css" href="https://www.hejalbert.se/wp-content/plugins/videojs-html5-video-player-for-wordpress/videojs/video-js.css?ver=4.9.3" type="text/css" media="all" />
            <link rel="stylesheet" id="bfa-font-awesome-css" href="//cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css?ver=4.7.0" type="text/css" media="all" />
            <link rel="https://api.w.org/" href="https://www.hejalbert.se/wp-json/" />
            <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://www.hejalbert.se/xmlrpc.php?rsd" />
            <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://www.hejalbert.se/wp-includes/wlwmanifest.xml" /> 
            <meta name="generator" content="WordPress 4.9.3" />
            <link rel="shortlink" href="https://www.hejalbert.se/" />
            <link rel="alternate" type="application/json+oembed" href="https://www.hejalbert.se/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.hejalbert.se%2F" />
            <link rel="alternate" type="text/xml+oembed" href="https://www.hejalbert.se/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fwww.hejalbert.se%2F&format=xml" />
            {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
            {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
            {/*[if lt IE 9]>


                <![endif]*/}
            {/* Facebook Pixel Code */}
            <noscript>&lt;img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=271034299921078&amp;ev=PageView&amp;noscript=1"
                /&gt;</noscript>
            {/* DO NOT MODIFY */}
            {/* End Facebook Pixel Code */}
            <header id="fixed-header">
                <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                    {/*
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded=false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    </button>
                    */}
                    <a className="navbar-brand" href="/"><img id="navbar-logo" src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-logo2.svg" alt /></a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <Link href='/mypages'>
                        <div id="loginPanelButton"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/icon-setting.png" title="Kontoinställningar" /></div>
                    </Link>
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                        <a href="/parent-register/" className="modal-parent"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/parents-b-t-n-n-a-v-b-a-r.svg" alt /></a>
                        </li>
                        <li className="headerSignUpBtn">
                        <a href="/register/" className="modal-students"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/students-b-t-n-n-a-v-b-a-r.svg" alt /></a>
                        </li>
                        <li className="login-cust">
                        <a href="https://login.hejalbert.se"> LOGGA IN</a>
                        </li>
                    </ul>
                    </div>{/* /.navbar-collapse */}
                </div>{/* /.container */}
                </nav>
                <div id="loginPanel">
                <div id="login-section-login">
                    <h3>LOGGA IN PÅ MINA SIDOR</h3>
                    {/*
                    <a class='btn btn-ghost' href="#" id="fbLoginButton">Facebook login</a>
                    <a class='btn btn-ghost' href="#" id="goLoginButton">Google login</a>
                */}
                    <input type="text" id="loginUsername" placeholder="Telefonnummer eller e-mail" pattern="\d*" inputMode="numeric" />
                    <input type="password" id="loginPassword" placeholder="Lösenord" />
                    <p id="login-error-small">Fel användare eller lösenord</p>
                    <a className="button button-full" href="#" id="loginButton">LOGGA IN</a>
                    <svg className="login-loader" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" xmlSpace="preserve" width={32} height={32}><g className="nc-icon-wrapper" fill="#00b08d"><g className="nc-loop_bars-32"> <line data-color="color-2" fill="none" stroke="#00b08d" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} x1={16} y1={7} x2={16} y2={24} transform="translate(0 2.5762240000367163) scale(1 0.8389859999977052)" style={{opacity: '0.8389859999977052'}} strokeLinejoin="round" /> <line fill="none" stroke="#00b08d" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} x1={3} y1={7} x2={3} y2={24} transform="translate(0 7.023775999963283) scale(1 0.5610140000022947)" style={{opacity: '0.5610140000022947'}} strokeLinejoin="round" /> <line fill="none" stroke="#00b08d" strokeWidth={2} strokeLinecap="round" strokeMiterlimit={10} x1={29} y1={7} x2={29} y2={24} transform="translate(0 7.023775999963283) scale(1 0.5610140000022947)" style={{opacity: '0.5610140000022947'}} strokeLinejoin="round" /> </g> </g></svg>
                    <a href="#" id="forgotPasswordLink">Glömt lösenordet?</a>
                </div>
                <div id="login-section-forgot-password" style={{display: 'none'}}>
                    <h3>GLÖMT LÖSENORD?</h3>
                    <p>Skriv in ditt telefonnummer eller e-mailadress nedan så skickar vi instruktioner om hur du återställer ditt lösenord!</p>
                    <input type="text" id="forgotPasswordPhoneMail" />
                    <a className="button button-full" href="#" id="forgotPasswordSendButton">SKICKA</a>
                    <a href="#" id="loginLink">Logga in?</a>
                </div>
                <div id="login-section-error" style={{display: 'none'}}>
                    <h3 id="login-error-title" style={{color: '#9999A7'}}>HOPPSAN!</h3>
                    <p id="login-error-body">Mina sidor är en tjänst för dig som köpt en prenumeration direkt här på hemsidan.</p>
                    <h3 style={{color: '#BDBDC7', marginTop: '50px'}}>HAR DU INGEN PRENUMERATION?</h3>
                    <p id="login-error-subtext">
                    Testa premium i 7 dagar gratis <a href="/parent-register/">här</a>. 
                    Har du en prenumeration via App Store / Google Play? 
                    Läs mer under <a href="/faq/">"Vanliga frågor och svar"</a>
                    </p>
                </div>
                </div>
                <nav role="navigation">
                <div id="menuToggle">
                    <input type="checkbox" id="mobileMenuChecker" />
                    <span />
                    <span />
                    <span />
                    <ul id="menu">
                    <img className="menu-logo" src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-logo-white2.svg" />
                    <div className="menu-container">
                        <div className="sidebar-items">
                        <a id="cta-text" href="/parent-register/"><li>Jag vill bjuda mitt barn<br />på läxhjälp</li></a>
                        </div>
                        <div className="sidebar-items">
                        <a id="cta-text" href="/register/"><li>Jag är elev som vill<br />skapa konto</li></a>
                        </div>
                        <div className="sidebar-items">
                        <a id="cta-text" href="https://hejalbert.edimia.se/login" style={{fontSize: '22px'}}><li>LOGGA IN</li></a>
                        </div>
                        <hr />
                        <br />
                        <div className="sidebar-items" id="loginPanelButtonMobile">
                        <img className="menu-icon2" src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/lock2.svg" />
                        <p href="#" /><li>MINA SIDOR</li><p />
                        </div>
                    </div>
                    </ul>
                </div>
                </nav>
            </header>
            <main>
                <section className="greeting-section two-column-section">
                <a id="newslink" href="javascript:void(0)">
                    <img id="nationella" src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/desk-banner.gif" />
                </a>
                <div className="container">
                    <div className="greeting-description">
                    <h2>Hej, Albert här!</h2>
                    <p>Din <strong>digitala mattelärare</strong> som hjälper dig att<br /><span id="greeting-type" /></p>
                    <div className="greeting-links">
                        <a href="/register-now" className="modal-registration green-link">
                        PROVA GRATIS I 14 DAGAR!
                        </a><br />
                        <a href="/ica" className="modal-registration green-link ica">
                        Aktivera din gratismånad med ICA
                        </a>
                        {/*<span class="teacher-link-span"><a href="#newsletter" class="teacher-link">Lärare eller Skola <i class="fa fa-arrow-down" aria-hidden="true"></i></a></span>*/}
                    </div>
                    </div>{/* greeting-description */}
                    <div className="greeting-image">
                    <img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/greeting-background.svg" alt />
                    </div>
                </div>{/* /.container */}
                </section>
                <section className="for-all-section two-column-section image-left-section summer">
                <div className="container">
                    <div className="summer-all-image col-sm-5 col-md-6 col-lg-5 col-xs-12">
                    <img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-matsmart.png" alt />
                    </div>
                    <div className="for-all-description  col-sm-7 col-md-6 col-lg-7 col-xs-12">
                    <h2>JUST NU: SKOLSTARTSKAMPANJ 2019</h2>
                    <p>Kickstarta skolåret med Albert och bidra till minskat matsvinn! 
                        <br />I samarbete med Matsmart får alla nya kunder möjligheten att testa Albert gratis i 14 dagar plus 100 kr i rabatt på sitt nästa köp hos Matsmart.se.</p>
                    <a href="/matsmart" className="green-link btn-summer"> TA DEL AV ERBJUDANDET HÄR!</a>
                    </div>
                </div>
                </section>
                <section className="tutorial-section two-column-section image-right-section">
                <div className="container">
                    <div className="tutorial-description  col-sm-7 col-md-6 col-lg-7 col-xs-12">
                    <h2>Jag är den digitala matteläraren tillgänglig när som helst, var som helst. På dina villkor.</h2>
                    <p>Min kunskap är baserad på skolplanen och jag anpassar mig efter just den årskursen eleven går i. Jag vet, rätt coolt! Man kan fråga mig om just det kapitlet och matematiska område man befinner sig i. Eleverna gillar mig.</p>
                    <a href="https://www.hejalbert.se/tutoring/" className="green-link">
                        Läs mer        <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                    </div>{/* /.tutorial-description */}
                    <div className="tutorial-image  col-sm-5 col-md-5 col-lg-5 col-xs-12">
                    <img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/tutor-available.svg" alt />
                    </div>
                </div>{/* /.container */}
                </section>
                {/*
            <section class="newsletter-section" id="newsletter">
                <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-98" method="post" data-id="98" data-name="">
                <div class="mc4wp-form-fields">
            <div>
            <h2>Intresserad skola eller kommun?</h2>
            <p>Fyll i kontaktuppgifterna nedan så lovar vi att vi hör av oss väldigt snabbt. Vår svarstid imponerar!</p>
            <fieldset>
                <input id="fieldEmail" type="email" name="semail" placeholder="E-post" data-cip-id="fieldEmail">
                <input id="fieldPhone" type="text" name="sphone" placeholder="Telefonnr" data-cip-id="fieldPhone">
            </fieldset> 
            <input type="submit" class="green-link" name="" id="schoolInfoSubmit" value="SKICKA">
            </div>
                </div>
                <div class="mc4wp-response">
            <div id="newsletter-success" class="mc4wp-alert mc4wp-success" style="display:none;">
            <p>Tack för visat intresse! Vi kontaktar dig inom kort.</p>
            </div>
                </div>
            </form>
            </section>
            */}
                <section className="fun-lessons-section two-column-section image-left-section">
                <div className="container">
                    <div className="fun-lessons-image  col-sm-6 col-md-6 col-lg-5 col-xs-12">
                    <img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-lessons.svg" alt />
                    </div>
                    <div className="fun-lessons-description  col-sm-6 col-md-6 col-lg-7 col-xs-12">
                    <h2>Gör det lite roligare och enklare att lära sig.</h2>
                    <p>Jag skapades för att göra matematik lättförståeligt och roligt. Jag har som mål att få din inlärning att bli enkel och kul. Förutom läxhjälp ger jag dig över 200 korta roliga animerade lektioner som antagligen kommer få dig att gilla matten lite mer än tidigare.</p>
                    <a href="https://www.hejalbert.se/lessons/" className="green-link">
                        Läs mer        <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                    </div>
                </div>{/* /.container */}
                {/* custom background between the sections */}
                <div className="rectangle"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/rectangle.svg" alt /></div>
                </section>
                <section className="need-section two-column-section image-right-section">
                <div className="container">
                    <div className="need-description  col-sm-5 col-md-5 col-lg-5 col-xs-12">
                    <h2>Jag vet vad du behöver. Jag är smart.</h2>
                    <p>Med mitt inbyggda provcenter och min smarta teknik kommer jag kunna lära känna dig bättre och bättre. Mitt spelcenter och troféskåp hjälper dig på ett roligt och utmanande sätt att bygga dina matteskills. Dessutom får du individuellt framtagna rekommendationer för att dina svagheter ska vändas till styrkor. Allt för att du ska bli en mattemästare!</p>
                    <a href="https://www.hejalbert.se/tests/" className="green-link">
                        Läs mer        <i className="fa fa-arrow-right" aria-hidden="true" />
                    </a>
                    </div>
                    <div className="need-image  clearfix col-sm-7 col-md-6 col-lg-7 col-xs-12">
                    <img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-brain-tests.svg" />
                    </div>
                </div>{/* /.container */}
                </section>
                <section className="for-all-section two-column-section image-left-section">
                <div className="container">
                    <div className="for-all-image  col-sm-5 col-md-6 col-lg-5 col-xs-12">
                    <img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-for-all.png" alt />
                    </div>
                    <div className="for-all-description  col-sm-7 col-md-6 col-lg-7 col-xs-12">
                    <h2>Från Förskoleklass till första året på Gymnasiet!</h2>
                    <p>Nu är jag även anpassad för barn och elever i lägre åldrar och täcker in i hela grundskolan. Registrera er är på hemsidan och ange vilken ålder ni vill att jag ska anpassa mig för så får ni en skräddarsydd upplevelse för just er. Jag funkar utmärkt för alla barn och elever mellan 5-17 år. </p>
                    </div>
                </div>{/* /.container */}
                </section>
                <section className="reviews-section">
                <div className="container">
                    <div className="owl-carousel">
                    <div className="slide">
                        <p className="user">Rose, Åk 9</p>
                        <div className="review">
                        <p>Albert är en fantastisk app som hjälper både mig och de som behöver extra mycket hjälp i matte. När jag löste uppgifter i Albert så märkte jag inte att det var lika svårt eftersom hans förklaringar får mig att fatta! Hade jag löst uppgifterna utan stöd från Albert hade det tagit väldigt lång tid för mig att förstå.</p>
                        </div>
                    </div>{/* /.slide */}
                    <div className="slide">
                        <p className="user">Johanna, Åk 8</p>
                        <div className="review">
                        <p>Jag älskar Albert, jag tycker att det är superbra att det finns en app som hjälper alla på högstadiet att verkligen kunna räkna ut matteuppgifter på rätt sätt så att man förstår. Albert hjälper mig att räkna ut uppgifter som jag fastnat på fortare och bättre, med snabba tips, hela uträkningar och roliga videos att titta på.</p>
                        </div>
                    </div>{/* /.slide */}
                    <div className="slide">
                        <p className="user">Teo, Åk 7</p>
                        <div className="review">
                        <p>Albert är grym! Jag tycker mest om lektionerna som enkelt förklarar olika kapitel. Jag förstod inte vad algebra var riktigt, men genom Alberts lektion som bara var typ 2 minuter så fattade jag direkt! Han är bäst!</p>
                        </div>
                    </div>{/* /.slide */}
                    </div>{/* /.carousel-wrapper */}
                </div>{/* /.container */}
                </section>
                <section className="benefit-section">
                <div className="container">
                    <div className="benefit-wrapper">
                    <div className="benefit benefit-improve">
                        <div className="benefit-percent">
                        <p>9<span>/10</span></p>
                        </div>
                        <p>av dem som har provat Albert tror att Albert kan hjälpa dom uppnå högre betyg. </p>
                    </div>{/* /.benefit */}
                    <div className="benefit benefit-improve">
                        <div className="benefit-percent">
                        <p>99<span>%</span></p>
                        </div>
                        <p>av alla som provat Albert tycker att plugget blir enklare och roligare.</p>
                    </div>{/* /.benefit */}
                    <div className="benefit benefit-improve">
                        <div className="benefit-percent">
                        <p>97<span>%</span></p>
                        </div>
                        <p>av alla föräldrar vi pratat med säger att dom hade betalat runt hundralappen för obegränsad läxhjälp via Albert.</p>
                    </div>{/* /.benefit */}
                    </div>{/* /.benefit-wrapper */}
                </div>{/* /.container */}
                </section>
                <section className="register-section">
                <div className="container">
                    <div className="register-image col-sm-3 col-md-4 col-lg-3 col-xs-12">
                    <img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/albert-forever.gif" alt />
                    </div>
                    <div className="register-description col-sm-9 col-md-8 col-lg-9 col-xs-12">
                    <h2 />
                    <div className="links">
                        <a href="/parent-register/" className="modal-parent"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/parents-b-t-n-n-a-v-b-a-r.svg" alt /></a>
                        <a href="/register/" className="modal-students"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/students-b-t-n-n-a-v-b-a-r.svg" alt /></a>
                    </div>
                    </div>{/* /.register-description */}
                </div>{/* /.container */}
                </section>
            </main>
            <footer>
                <div className="container">
                <div className="col-md-6">
                    <div className="app-and-social-links">
                    <div className="app-links">
                        {/*<a href="https://itunes.apple.com/se/app/albert/id1094979901?ls=1&mt=8"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/app-store-sw.svg" alt=""></a>*/}
                        {/*<a href="https://play.google.com/store/apps/details?id=se.mralbert.albert2"><img src="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/img/google-play-sw.svg" alt=""></a>*/}
                    </div>{/* /.app-links */}
                    <div className="social-links">
                        <a href="https://www.facebook.com/hejalbert/"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="https://www.instagram.com/hej_albert/"><i className="fa fa-instagram" aria-hidden="true" /></a>
                        <a href="https://www.snapchat.com/add/hejalbert"><i className="fa fa-snapchat-ghost" aria-hidden="true" /></a>
                    </div>
                    </div>{/* /.app-and-social-links */}
                </div>{/* /.col-md-6 */}
                <div className="col-md-6">
                    <div className="pages-list-wrapper">
                    <ul className="pages-list">
                        <li>Företaget Albert</li>
                        <li><a href="https://www.hejalbert.se/about/">Om Albert</a></li>
                        <li><a href="https://www.hejalbert.se/press/">Press</a></li>
                        <li><a href="https://www.hejalbert.se/contacts/">Kontakta oss</a></li>
                    </ul>
                    <ul className="pages-list">
                        <li>Support</li>
                        <li><a href="https://www.hejalbert.se/faq/">Vanliga frågor och svar</a></li>
                        {/*<li><a href="https://play.google.com/store/apps/details?id=se.mralbert.albert2" target="_blank">Ladda hem för Android</a></li>
                    <li><a href="https://itunes.apple.com/se/app/albert/id1094979901?ls=1&mt=8" target="_blank">Ladda hem för iOS</a></li>*/}
                    </ul>
                    <ul className="pages-list">
                        <li>Mer information</li>
                        <li><a href="/register" className="modal-registration">Prova Albert Gratis i 14dagar</a></li>
                        <li><a href="https://www.hejalbert.se/terms-and-conditions/">Medlemsvillkor</a></li>
                        <li><a href="https://www.hejalbert.se/job/">Jobba hos oss</a></li>
                    </ul>
                    </div>
                    <p className="copyrights">eEducation Albert AB | All rights reserved</p>
                </div>{/* col-md-7 */}
                </div>{/* /.container */}
            </footer>
            <div id="screenDimmer">
                {/* This site is running CAOS: Complete Analytics Optimization Suite for Wordpress */}<link rel="stylesheet" id="bootstrap-css" href="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/bootstrap.min.css?ver=4.9.3" type="text/css" media="all" />
                <link rel="stylesheet" id="base-styles-css" href="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/style.min.css?vr=1.1.3&ver=4.9.3" type="text/css" media="all" />
                <link rel="stylesheet" id="owl-carousel-css" href="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/owl.carousel.min.css?ver=4.9.3" type="text/css" media="all" />
                <link rel="stylesheet" id="albert2-styles-css" href="https://www.hejalbert.se/wp-content/themes/mr-albert/assets/css/albert2.css?ver=4.9.3" type="text/css" media="all" />
                {/* Google Code for AlbertWebsiteConversionAdwords Conversion Page */}
                {/*
                
                <noscript>
                <div style="display:inline;">
                <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/870270394/?label=5rlSCNvHn2wQuov9ngM&amp;guid=ON&amp;script=0"/>
                </div>
                </noscript>
                

            */}
                {/* Googles kod för remarketing-taggen */}
                {/*------------------------------------------------
            Remarketing-taggar får inte vara kopplade till personligt identifierande information eller placeras på sidor relaterade till    känsliga kategorier. Läs mer information och anvisningar om hur du ställer in taggen på: http://google.com/ads/remarketingsetup
            -------------------------------------------------*/}
                <noscript>
                &lt;div style="display:inline;"&gt;
                &lt;img height="1" width="1" style="border-style:none;" alt="" 	src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/937554832/?guid=ON&amp;amp;script=0"/&gt;
                &lt;/div&gt;
                </noscript>
            </div></div>

      </React.Fragment>
    )
  }
}

export default withNamespaces('common')(Albert)