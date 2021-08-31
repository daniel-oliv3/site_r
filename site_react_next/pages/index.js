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

        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title">Serviços</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-code"></i>
                            <div class="text">
                                Serviços 1
                            </div>
                            <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Atirei o pau no gatis, per gatis num morreus. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Todo mundo vê os mas ninguém vê os tombis que eu levo!</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <i class="fas fa-laptop-code"></i>
                            <div class="text">
                                Serviços 2
                            </div>
                            <p>Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <i class="fas fa-mobile-alt"></i>
                            <div class="text">
                                Serviços 3
                            </div>
                            <p>Quem manda na minha terra sou euzis! Leite de capivaris, leite de mula manquis sem cabeça. Diuretics paradis num copo é motivis de denguis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"/>
        <Script src="custom.js" strategy="afterInteractive"/>    
    </div>
    );
  }
  
  export default Home;