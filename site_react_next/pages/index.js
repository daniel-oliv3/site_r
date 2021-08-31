import Head from 'next/head';
import Script from 'next/script';

function Home() {
    return (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
            <title>Site - Sapup3</title>
        </Head>
        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="#top">Sapup3</a>
                </div>
                <ul className="menu">
                    <li><a href="#top" className="menu-btn">Home</a></li>
                    <li><a href="#services" className="menu-btn">Serviços</a></li>
                    <li><a href="#contact" className="menu-btn">Contato</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>

        <section class="top" id="top">
            <div class="max-width">
                <div class="top-content">
                    <div class="text-1">Temos a solução</div>
                    <div class="text-2">que a sua empresa precisa</div>
                    <div class="text-3">Podemos ajudar a sua empresa!</div>
                    <a href="#">Entrar em Contato</a>
                </div>
            </div>
        </section>


        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"/>
        <Script src="custom.js" strategy="afterInteractive"/>    
    </div>
    );
  }
  
  export default Home;