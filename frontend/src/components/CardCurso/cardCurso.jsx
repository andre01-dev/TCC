    import "./cardCurso.scss"

    export default function CardCurso1({imagem, titulo, duracao, tema, descricao, nivel, rota}) {
        return (
            <div className="container-cardCurso">
                <div className="cardCurso">
                    <img className="imagem" src= {imagem} />
                    <div className="titulo-carga">
                        <h2 className="josefin-sans">{titulo}</h2>
                        <div className="tempo">
                        <img src="https://img.icons8.com/ios7/200/clock--v3.png" height={20} />
                        <h2 className="josefin-sans">{duracao}</h2>
                        </div>
                    </div>
                    <h1>{tema}</h1>
                    <p className="average-sans"> 
                        {titulo === "Fake News"
    ? "Neste curso, você aprenderá a reconhecer e analisar conteúdos falsos que circulam nas redes. Serão abordados os principais tipos de fake news, suas estratégias de disseminação e formas de verificação da informação. O objetivo é desenvolver um olhar crítico e responsável para garantir uma navegação mais segura e consciente na internet."
     
    : titulo === "Compras Online de Forma Segura"
                        ? "Neste curso, você aprenderá a reconhecer práticas enganosas e evitar fraudes em ambientes digitais. Serão apresentados os principais tipos de golpes online, como identificar sites e ofertas suspeitas e quais cuidados adotar ao realizar compras na internet. Além disso, você vai entender como controlar impulsos de consumo, desenvolvendo hábitos mais seguros e conscientes nas suas transações digitais."
                    
                        : titulo === "Pagamentos Seguros"
                        ? "Neste curso, você vai aprender a realizar pagamentos online com segurança e confiança. Serão apresentadas as principais formas de pagamento digital, como cartões, boletos e carteiras virtuais, além dos cuidados necessários para proteger seus dados financeiros. Você também aprenderá a identificar sites e plataformas confiáveis, evitar golpes e compreender como funcionam as medidas de proteção oferecidas pelos bancos e sistemas de pagamento. O objetivo é garantir que cada transação seja feita de forma segura, consciente e sem riscos."
                    
                        : titulo === "Organização Digital"
                        ? "Neste curso, você aprenderá a manter seus arquivos, contas e informações organizadas no ambiente digital. Serão abordadas ferramentas e estratégias para gerenciar documentos, senhas e tarefas de forma prática e eficiente. O objetivo é ajudar você a criar um sistema digital limpo, seguro e produtivo, facilitando o seu dia a dia online."
                    
                         : titulo === "Criando e Usando E-mail"
                         ? "Aprenda a criar e utilizar seu e-mail de forma prática e segura. Neste curso, você vai entender como configurar uma conta, enviar e receber mensagens, organizar sua caixa de entrada e reconhecer tentativas de fraude. Ideal para quem deseja se comunicar com confiança no mundo digital."
                         
                         : titulo === "Introdução a Inteligência Artificial"
                        ? "Descubra o que é Inteligência Artificial e como ela está presente no seu cotidiano. Neste curso, você aprenderá os conceitos básicos da IA, suas aplicações em diferentes áreas e os cuidados éticos e de segurança no uso dessas tecnologias. Um primeiro passo para compreender o futuro digital de forma consciente e informada"
                       
                        : titulo === "Educação Financeira Digital"
                        ? "Aprenda a lidar com o dinheiro de forma inteligente no ambiente online. Este curso aborda os principais conceitos de finanças digitais, como bancos digitais, carteiras virtuais, investimentos e segurança nas transações. O objetivo é desenvolver hábitos financeiros saudáveis e responsáveis no mundo conectado."
                         : titulo === "Senhas Seguras"
                        ? "Aprenda a criar e gerenciar senhas fortes para proteger suas contas e dados pessoais. Este curso mostra boas práticas de segurança digital e ensina como evitar os erros mais comuns que facilitam invasões e vazamento de informações."
                         : titulo === "Golpes"
                        ? "Neste curso, você vai aprender a identificar e evitar golpes conhecidos como phishing — tentativas de roubo de dados pessoais por meio de e-mails falsos. Serão apresentadas as principais táticas usadas por golpistas e estratégias simples para proteger suas informações e navegar com segurança."

                    
                    
                    
                    : descricao}
    </p>
                    <div className="nivel-button">
                        <h2 className="josefin-sans">{nivel}</h2>
                        <button className="average-sans">Gratuito</button>
                    </div>
                </div>
            </div>
        );
    }