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

        <section className="top" id="top">
            <div className="max-width">
                <div className="top-content">
                    <div className="text-1">Temos a solução</div>
                    <div className="text-2">que a sua empresa precisa</div>
                    <div className="text-3">Podemos ajudar a sua empresa!</div>
                    <a href="#">Entrar em Contato</a>
                </div>
            </div>
        </section>

        <section className="services" id="services">
            <div className="max-width">
                <h2 className="title">Serviços</h2>
                <div className="serv-content">
                    <div className="card">
                        <div className="box">
                            <i className="fas fa-code"></i>
                            <div className="text">
                                Serviços 1
                            </div>
                            <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Atirei o pau no gatis, per gatis num morreus. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Todo mundo vê os mas ninguém vê os tombis que eu levo!</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-laptop-code"></i>
                            <div className="text">
                                Serviços 2
                            </div>
                            <p>Sapien in monti palavris qui num significa nadis i pareci latim. Quem num gosta di mim que vai caçá sua turmis! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box">
                            <i className="fas fa-mobile-alt"></i>
                            <div className="text">
                                Serviços 3
                            </div>
                            <p>Quem manda na minha terra sou euzis! Leite de capivaris, leite de mula manquis sem cabeça. Diuretics paradis num copo é motivis de denguis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contato</h2>
                <div className="contact-content">
                    <div className="column left">
                        <p>Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Nec orci ornare consequat.</p>
                        <div className="icons">
                            <div className="row">
                                <i className="fas fa-user"></i>
                                <div className="info">
                                    <div className="head">Empresa</div>
                                    <div className="sub-title">Sapup3</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="info">
                                    <div className="head">Endereço</div>
                                    <div className="sub-title">Manaus Amazonas</div>
                                </div>
                            </div>

                            <div className="row">
                                <i className="far fa-envelope"></i>
                                <div className="info">
                                    <div className="head">E-mail</div>
                                    <div className="sub-title">danieloliveira.webmaster@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column right">
                        <div className="text">Mensagem de Contato</div>
                        <form>
                            <div className="fields">
                                <div className="field name">
                                    <input type="text" placeholder="Digite o nome" required />
                                </div>
                                <div className="field email">
                                    <input type="text" placeholder="Digite o e-mail" required />
                                </div>
                            </div>

                            <div className="field">
                                <input type="text" placeholder="Digite o assunto" required />
                            </div>

                            <div className="field textarea">
                                <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
                            </div>

                            <div className="button-area">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
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