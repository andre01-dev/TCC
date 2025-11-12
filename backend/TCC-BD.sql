create database TCC;
use TCC;
drop database TCC;

create table tb_curso(
	id_curso int primary key auto_increment,
    nome_curso varchar(100),
    descricao varchar (300),
    duracao varchar(100),
    url varchar(100),
    caminho_img varchar(100)
);

create table noticias(
id_noticias int primary key auto_increment,
caminho_img1 varchar (300),
titulo text (10000),
subtitulo text (10000),
conteudo1 text (100000),
conteudo2 text (100000)
);

create table tb_usuario (
	id_usuario int primary key auto_increment,
    nome_usuario varchar (200),
    email varchar (300) UNIQUE,
    telefone varchar (20),
    dt_nascimento varchar (20),
    senha varchar(500),
    fotoPerfil longtext,
    id_curso int,
    foreign key (id_curso) references tb_curso(id_curso)
);

create table tb_matricula(
id_matricula int primary key auto_increment,
cursando boolean,
concluido boolean,
id_usuario int,
id_curso int,
foreign key (id_usuario) references tb_usuario(id_usuario),
foreign key (id_curso) references tb_curso(id_curso)
);

select*from tb_matricula;


create table tb_adm(
	id_adm int primary key auto_increment,
    nome varchar (200),
    email varchar (200),
    senha varchar (300),
    id_curso int,
    id_usuario int,
    id_matricula int,
    foreign key (id_curso) references tb_curso(id_curso),
    foreign key (id_usuario) references tb_usuario(id_usuario),
    foreign key (id_matricula) references tb_matricula(id_matricula)
);

create table ModulosCursos (
	id_modulo int primary key auto_increment,
    id_curso int,
	foreign key (id_curso) references tb_curso(id_curso),
    titulo varchar(500),
    conteudo text(10000)
);

create table QuizCursos (
	id_quiz int primary key auto_increment,
    id_curso int,
    foreign key (id_curso) references tb_curso(id_curso),
    pergunta varchar(500),
    alternativa1 varchar(500),
    alternativa2 varchar(500),
    alternativa3 varchar(500),
    alternativa4 varchar(500),
    resposta int
);

create table denuncia(
id_denuncia int primary key auto_increment,
assunto varchar(300),
data date,
ocorrido varchar(5000),
email varchar(200)
);

create table depoimentos(
id_depoimento int primary key auto_increment,
url varchar(100),
imagem varchar(500),
titulo varchar(200),
depoimento varchar(250)
);

create table tb_conquistas(
	id_conquista int primary key auto_increment,
    titulo_curso varchar(200),
    img_url varchar(200),
    id_curso int,
    foreign key (id_curso) references tb_curso(id_curso)
);


insert into tb_curso (nome_curso, descricao, duracao, url, caminho_img)
values
("Fake News", "Nesse Curso vamos te ensinar como indentificar mensagens suspeitas", "3 min", "/curso1", "images/curso1.png"),
("Compras Online de Forma Segura", "Nesse Curso vamos te ensinar como evitar fraudes e compras impulsivas", "10 min", "/curso2", "images/curso2.png"),
("Pagamentos Seguras", "Nesse Curso vamos te ensinar a navegar de modo segura no seu Banco", "30 min", "/curso3", "images/curso3.png"),
("Organização Digital", "Nesse Curso vamos te ensinar a Armazenar documentos e fotos com segurança", "40 min", "/curso4", "images/curso4.png"),
("Criando e Usando E-mail", "Nesse Curso vamos te ensinar a criar uma conta e usar o E-mail", "15 min", "/curso5", "images/curso5.png"),
("Introdução a Inteligência Artificial", "Nesse Curso vamos te ensinar a usar a Inteligencia Artificial com o ChatGPT", "27 min", "/curso6", "images/curso6.png"),
("Educação Financeira Digital", "Nesse Curso vamos te dar dicas de como controlar seus gastos e evitar fraudes", "55 min", "/curso7", "images/curso7.png"),
("Senhas Seguras", "Nesse Curso vamos te ensinar a criar uma Senha Forte.", "23 min", "/curso8", "images/curso8.png"),
("Golpes", "Nesse Curso vamos te ensinar a como Reconhecer e-mail falsos e o que fazer?", "30 min", "/curso9", "images/curso9.png");

insert into tb_conquistas(titulo_curso, img_url, id_curso)
values
("Fake News", "/images/conquista1.png",1),
("Compras Online de Forma Segura", "/images/conquista2.png",2),
("Pagamentos Seguras", "/images/conquista3.png",3),
("Organização Digital", "/images/conquista4.png",4),
("Criando e Usando E-mail", "/images/conquista5.png",5),
("Introdução a Inteligência Artificial", "/images/conquista6.png",6);

insert into ModulosCursos (id_curso, titulo, conteudo)
values
(1, "Porque é importante?", "É importante identificar mensagens suspeitas para proteger seus dados pessoais e financeiros de golpes, ataques de vírus e roubo de identidade. Criminosos usam mensagens fraudulentas, como o phishing, para enganar as pessoas e fazê-las clicar em links maliciosos ou baixar anexos com vírus."),
(1, "Como identificar uma mensagem suspeita?", "Para identificar mensagens suspeitas, desconfie de erros de português, pedidos urgentes de dados pessoais ou dinheiro, links e anexos suspeitos (especialmente se mudam o URL), e mensagens que prometem prêmios ou empregos fáceis."),
(2, "Porque é importante?", "Fazer compras online de forma segura é fundamental para proteger suas informações pessoais e financeiras de criminosos cibernéticos. Ao tomar precauções, você evita problemas como roubo de dados, fraudes e prejuízos financeiros."),
(2, "Como identificar se o site é seguro?", "Para identificar se uma compra online é segura, verifique o cadeado e o “HTTPS” na URL, pesquise a reputação da loja em sites como Reclame Aqui, desconfie de ofertas muito baixas, confira os dados de contato e CNPJ no site, e prefira usar cartões virtuais ou intermediadores de pagamento."),
(3, "Oque é Bancos Digitais?", "Um banco digital é uma instituição financeira que opera 100% online, sem agências físicas, oferecendo serviços como abertura de conta, pagamentos, transferências e investimentos por meio de aplicativose fácil."),
(3, "Como usar?", "Para usar um banco digital, você deve baixar o aplicativo do banco escolhido, abrir sua conta informando dados e enviando fotos de documentos, criar senhas fortes e ativar a autenticação de dois fatores (2FA), e então acessar o app para realizar todas as operações, como Pix, pagamentos, transferências e gestão de cartões, sem precisar ir a uma agência física"),
(4, "Porque é importante?", "É crucial para otimizar o fluxo de trabalho, aumentar a produtividade e reduzir o estresse. Em vez de gastar tempo procurando por arquivos perdidos em uma bagunça digital, um sistema organizado permite encontrar o que você precisa de forma rápida e fácil."),
(4, "Como usar?", "Crie uma estrutura de pastas clara e consistente, use nomenclaturas descritivas para arquivos e pastas, centralize seus arquivos, faça backups regulares (local e na nuvem), e limpe arquivos desnecessários periodicamente."),
(5, "Porque é importante?", "É importante porque serve como uma ferramenta de comunicação oficial e profissional, criando registros documentais, oferecendo eficiência e rapidez na troca de informações e sendo essencial para o acesso a diversos serviços digitais e plataformas online, além de ser um pilar para a segurança digital e a conformidade regulatória."),
(5, "Como usar?", "Para usar o e-mail, faça login na sua conta (como Gmail ou Outlook), clique em “Escrever” ou “Compor” para abrir uma nova mensagem, insira o endereço do destinatário no campo “Para”, digite um assunto e sua mensagem, anexe arquivos usando o ícone de clipe se precisar, e clique em “Enviar” para despachar o e-mail."),
(6, "O que é Inteligência Artificial?", "Inteligência Artificial (ou IA) é quando o computador aprende a “pensar” como uma pessoa, sendo capaz de conversar, entender perguntas e dar respostas, como se fosse um ajudante digital. Exemplos de IA que você provavelmente já utilizou incluem o celular respondendo a comandos como “Ok Google” ou “Oi Siri”, o GPS indicando o caminho até o destino e as recomendações automáticas de vídeos e filmes no YouTube ou na Netflix. Essas tecnologias observam o que você faz e aprendem com o tempo para oferecer sugestões e ajuda de forma cada vez mais personalizada. No entanto, é importante lembrar que elas não sentem nem pensam como os humanos — são apenas ferramentas inteligentes criadas para facilitar o nosso dia a dia."),
(6, "O que é o ChatGPT?", "O ChatGPT é uma ferramenta inteligente com a qual você pode conversar por escrito, e ele responde como se fosse um amigo virtual. Ele pode explicar coisas que você não entende, ajudar a escrever textos ou receitas, contar curiosidades, piadas e histórias, dar dicas de saúde e bem-estar (sem substituir o médico) e ensinar passo a passo como usar o celular, o computador e aplicativos. Por exemplo: você pode pedir “ChatGPT, me ensine uma receita simples de bolo de cenoura”, e ele responderá com uma receita deliciosa e fácil de preparar."),
(6, "Como usar o ChatGPT para aprender e se divertir", "Para usar o ChatGPT, entre no site chat.openai.com e crie uma conta. Depois, escreva uma pergunta como se estivesse falando com alguém e leia a resposta. Se não entender, peça para explicar de forma mais simples. Dica: quanto mais clara for a pergunta, melhor será a resposta. Exemplo: em vez de perguntar 'Como faz bolo?', diga 'ChatGPT, me ensine uma receita de bolo de chocolate simples, com poucos ingredientes'. Cuidados importantes: nunca compartilhe nome completo, CPF, endereço, telefone ou dados bancários. Não conte senhas nem informações pessoais. Lembre-se: o Chat"),
(7, "Por que é importante?", "Hoje, aposentadorias, pagamentos e benefícios estão disponíveis online. Usar a internet para cuidar do dinheiro é muito prático, mas também exige atenção. Este capítulo vai te ensinar a cuidar das suas finanças sem cair em golpes."),
(7, "Como usar aplicativos do banco com segurança", "Baixe o aplicativo oficial do banco e confira o nome e o logotipo. Nunca use Wi-Fi público para acessar o app e evite clicar em links de mensagens. Sempre saia da conta ao terminar e ative a verificação em duas etapas se o banco oferecer. Se alguém ligar pedindo sua senha, desligue — nenhum banco pede senha por telefone! Para controlar seus gastos, anote as despesas, defina um limite mensal, guarde parte da aposentadoria como reserva e evite compras por impulso. Lembre-se: se parece bom demais para ser verdade, desconfie! Para acessar o Meu INSS e o Gov.br com segurança, entre apenas pelos sites www.gov.br ou meu.inss.gov.br, nunca clique em links de mensagens, use senha forte e mantenha o antivírus do celular atualizado."),
(8, "Por que as senhas são tão importantes?", "Sua senha é a chave da sua vida digital. Com ela, alguém pode acessar suas contas, seu dinheiro e suas mensagens. Por isso, é essencial aprender a criar senhas fortes e seguras. Misture letras maiúsculas e minúsculas, números e símbolos. Evite usar nomes, datas de nascimento ou números de telefone. Crie uma senha fácil de lembrar, mas difícil de adivinhar. Exemplo: fraca: maria123 | forte: M@ria!1975"),
(8, "Como se manter seguro", "Não compartilhe sua senha com ninguém — nem com familiares, amigos ou atendentes. Nenhum banco, aplicativo ou empresa pede sua senha. Se alguém pedir, é golpe! Pense assim: a senha é como a escova de dentes — só você pode usar. A verificação em duas etapas (2FA) é uma proteção extra que pede um código além da senha. Mesmo que alguém descubra sua senha, não conseguirá entrar. Ative o 2FA no WhatsApp, e-mail, Facebook, Instagram e Gov.br."),
(9, "O que é Phishing?", "O phishing é um tipo de golpe em que criminosos enviam e-mails falsos que parecem reais. Eles fingem ser bancos, lojas, correios ou até o governo, pedindo que você clique em links ou informe senhas. O objetivo é roubar seus dados pessoais."),
(9, "Como reconhecer e-mails falsos e oque fazer", "Para identificar e-mails falsos, veja o remetente — bancos não usam endereços que terminam em '@gmail.com'. Desconfie de mensagens com tom urgente ou promessas de prêmios. Cuidado com erros de português e logotipos diferentes. Nunca clique em links ou abra anexos suspeitos. Se receber algo assim, não responda, não clique em nada e apague o e-mail. Em caso de dúvida, ligue diretamente para o número oficial do banco ou empresa.");


insert into QuizCursos (id_curso, pergunta, alternativa1, alternativa2, alternativa3, alternativa4, resposta)
values
(1, "Qual é uma boa prática ao receber mensagens suspeitas?", "A) Clicar nos links imediatamente", "B) Responder pedindo mais informações", "C) Baixar anexos sem verificar", "D) Ignorar e verificar a autenticidade do remetente", 3),
(2, "Qual dessas atitudes é segura ao comprar pela internet?", "A) Comprar em sites confiáveis com https:// e cadeado no navegador", "B) Clicar em links de promoções recebidos por e-mail", "C) Digitar dados pessoais em qualquer site", "D) Compartilhar o cartão com amigos", 1),
(3, "Qual é uma vantagem dos bancos digitais?", "A) Cobram muitas taxas", "B) Fecham nos fins de semana", "C) Permitem resolver tudo pelo celular, sem precisar ir à agência", "D) Precisam de comprovante em papel", 2),
(4, "Qual dessas práticas ajuda na organização digital?", "Ter uma pasta “Documentos Importantes” e subpastas por categoria", "B) Deixar todos os arquivos na área de trabalho", "C) Nunca renomear os arquivos", "D) Baixar o mesmo arquivo várias vezes", 0),
(5, "Para criar um e-mail, o que você precisa fazer primeiro?", "A) Escolher um nome de usuário e uma senha", "B) Instalar um programa no computador", "C) Pagar uma taxa ao provedor", "D) Ligar para o suporte técnico", 0),
(6, "Para que serve o ChatGPT?", "A) Apenas para traduzir textos", "B) Para conversar, responder perguntas e ajudar em tarefas de estudo e trabalho", "C) Para jogar online", "D) Para assistir vídeos", 1),
(7, "O que é educação financeira digital?", "A) Aprender a usar o dinheiro apenas em papel", "B) Aprender a cuidar do dinheiro usando ferramentas e recursos digitais", "C) Aprender a gastar mais pela internet", "D) Usar o celular só para jogos", 1),
(8, "Qual destas é uma senha segura?", "A) 123456", "B) senha123", "C) G@t0Azul#2025", "D) meuNome", 2),
(9, "Como identificar um e-mail de golpe (phishing)?", "A) Tem erros de português, pedidos urgentes e links estranhos", "B) Sempre vem do seu banco verdadeiro", "C) É enviado apenas por amigos", "D) É colorido e cheio de emojis", 0);

select*from tb_usuario;

insert into noticias(caminho_img1,titulo,subtitulo,conteudo1,conteudo2)
values
("/images/noticia1.png"
,
"Golpes no Instagram: perfis falsos clonam a conta de negócios para sumir com o dinheiro de clientes"
,

"Vítimas lesadas pelos fraudadores denunciaram as contas falsas, mas foram os negócios reais que acabaram punidos. 
Em alguns casos, o prejuízo leva à falência.Por Fantástico 08/06/2025 22h10  Atualizado há 4 meses"
,

"Golpistas têm usado o Instagram para uma nova fraude, que copia os perfis de empresas reais, anuncia promoções falsas e desaparece com o dinheiro de quem compra.

Em Florianópolis, o brechó Brechik virou alvo de criminosos. Eu recebi um print de uma cliente falando que tinha um perfil se passando pela gente, usando o nosso nome, a nossa logo, a nossa mesma descrição e algumas imagens nossas, conta Carla Machado, gestora do negócio fundado pela avó há mais de 40 anos.

O perfil falso passou a anunciar promoções com preços muito abaixo do normal. Eu já seguia a loja oficial deles. Começou a aparecer muito anúncio, com preços maravilhosos. Acabei caindo no golpe, relata Jeniffer Santos, uma das vítimas.

Comprovantes de pagamento indicam que os golpistas podem ter feito mais de 17 mil vendas falsas. As vítimas denunciaram o perfil falso, mas quem acabou banido foi o perfil verdadeiro da loja.
A gente chora, a gente fica frustrado. Além de trabalho, é a nossa história familiar também ali, desabafa Carla.
A orientação de especialistas é buscar a Justiça. Como a plataforma não fornece um prazo de resposta, a saída para uma medida rápida é entrar com pedido judicial, explica o advogado Luís Restanho.
Em alguns casos, o prejuízo é tão grande que leva empresas à falência. Segundo a Fecomércio-SP, 60% das pequenas empresas vítimas de ataques cibernéticos fecham as portas em até seis meses.
O setor hoteleiro também é alvo frequente. Em Trancoso, na Bahia, mais da metade dos donos de hotéis já relatou ter sido vítima de fraudes em redes sociais.
A empresária Carol Kratz convive com o problema há cinco anos. Essa semana eu denunciei um perfil novo. Eles falaram que o perfil não era contra as diretrizes, e que o máximo que eu podia fazer era bloquear. Mesmo o meu perfil sendo verificado.
Os golpistas clonam todas as fotos do hotel e anunciam promoções falsas. Muita gente cai porque se vê vislumbrado com a ideia de ganhar 3, 4, 5 diárias aqui no hotel, diz Carol.

Para alcançar mais vítimas, os criminosos pagam por anúncios nas próprias plataformas.
Essas organizações acabavam gastando uma grande quantia em dinheiro para impulsionar os anúncios. (...) Quando quebramos o sigilo bancário de um dos investigados, encontramos um pagamento de R$ 106 mil para o Facebook, afirma o delegado Thiago Henrique Moreira.
Segundo ele, as investigações esbarram na falta de colaboração das plataformas. Temos uma investigação há cinco anos parada, aguardando informações básicas sobre faturamento das redes sociais de quanto gastaram com impulsionamento.
A pedido do Fantástico, o NetLab da UFRJ analisou anúncios feitos por contas falsas se passando por grandes marcas de varejo do Brasil. Em apenas quatro dias, foram identificados 277 anúncios fraudulentos, com 72% ativos por dois dias."
,

"A plataforma não fez absolutamente nada. São anúncios que devem ser muito efetivos, porque seguem no ar, provavelmente angariando vítimas e os consumidores seguem clicando neles”, afirma Marie Santini, professora e diretora do NetLab.
O jornal americano The Wall Street Journal revelou que a Meta dona do Instagram, Facebook e WhatsApp é responsável por quase metade dos golpes identificados por uma plataforma de pagamentos entre 2023 e 2024.
Um relatório interno de 2022 da Meta apontou que 70% das novas contas de anunciantes são criadas para promover fraudes ou produtos ilícitos.
Hoje nós temos a capacidade computacional para combater isso. Só que a Meta não faz propositalmente, em busca de aumentar sua receita, afirma David Nemer, professor da Universidade da Virgínia.

Ex-funcionários ouvidos pelo jornal disseram que são necessárias mais de 30 denúncias para derrubar um perfil.
Procurada, a Meta afirmou que não permite fraudes em suas plataformas, que aprimora constantemente suas tecnologias contra atividades suspeitas e orienta que irregularidades sejam denunciadas nos próprios aplicativos.
Disse ainda que 85% das contas de anúncios banidas nunca gastaram dinheiro na plataforma e que quase 70% são removidas em até uma semana.
No Brasil, o Supremo Tribunal Federal retomou o julgamento sobre a validade do artigo 19 do Marco Civil da Internet, que estabelece que plataformas só podem ser responsabilizadas por conteúdos de usuários após decisão judicial. O julgamento deve continuar nesta semana.
Essas empresas superpoderosas, em última instância, estão protegendo esses criminosos. Garantem o anonimato deles, não entregam os dados e eles ficam impunes. Elas continuam ganhando dinheiro com os anúncios e eles continuam ganhando dinheiro com os golpes, afirma Marie Santini.
E questiona: A gente vai deixar a sociedade continuar sofrendo tudo isso?
https://g1.globo.com/fantastico/noticia/2025/06/08/golpes-no-instagram-perfis-falsos-clonam-a-conta-de-negocios-para-sumir-com-o-dinheiro-de-clientes.ghtml"
),

("/images/noticia2.png"
,
"Quais os sinais de alerta para desconfiar de um golpe"
,
"Haverá sinais: estes são os indícios de que você está caindo em um golpe.
01/05/2025 05h30
Atualizada em
01/05/2025 05h30"
,
"Os golpes virtuais se tornaram uma febre perigosa em nosso país. Pelo menos 71% dos brasileiros já
sofreram alguma tentativa de fraude eletrônica, mostra pesquisa publicada em junho de 2023 pela Nord 
Security, empresa de segurança digital. A incidência é reforçada por outro estudo, da AllowMe 
especialista em cibersegurança, que aponta que pelo menos 51% dos brasileiros sofreram tentativas de 
golpes entre janeiro e setembro de 2023. Especialistas em cibersegurança ouvidos por Tilt afirmam que, 
embora os golpistas se aperfeiçoem, padrões podem ser identificados entre as fraudes, o que torna menos 
difícil para a vítima saber se está sendo alvo de um golpe em curso."
,
"Quais os sinais de alerta para desconfiar de um golpe

1.PEDIDOS DE SENHAS

Alguém liga ou entra em contato via mensagem e pede para confirmar senha do banco ou de qualquer
outra conta (rede social, aplicativos etc.) É cilada. As abordagens nesse tipo de golpe são as mais
variadas, vão desde falso atendente de banco a funcionário de instituições financeiras de crédito.

2.URGÊNCIA EM PEDIDOS

O tempo é crucial para alguns golpistas. Devido a isso, eles entram em contato para confirmar dados
pessoais sensíveis das vítimas utilizando da estratégia de urgência, para dar a sensação de pressa à vítima
e forçá-la a fornecer os dados sem pensar nas consequências.

3.PREÇO BAIXO

Quem não gosta de comprar um produto dos sonhos com aquele descontinho, não é? À primeira vista, a
ideia pode até parecer boa. O problema é que por trás pode ser um golpe, alerta a Silverguard. Pesquise a 
reputação da empresa e/ou do site que oferta o produto e verifique a URL (campo no navegador que 
contém o endereço da página) para saber se, de fato, condiz com a da loja virtual de verdade. Se a oferta
do produto ou serviço está muito abaixo do preço ou boa demais pra ser verdade, geralmente é golpe.

4.ERROS DE PORTUGUÊS

Apesar de a inteligência artificial (IA) já ser uma ferramenta para os emails dos golpistas terem menos 
uma cara de fraude, ainda há escorregões na escrita e até mesmo na fala caso a tentativa de golpe 
seja por ligação. Funcionários de bancos ou de grandes empresas financeiras recebem treinamentos para 
evitar esse tipo de falha no português. Preste muita atenção em detalhes como erros ortográficos e 
pronúncias informais em ligações.

5.PAGAMENTOS ANTECIPADOS

Fique em alerta caso você receba algum pedido de pagamento antecipado para liberação de produtos ou 
serviços que não dependem do dinheiro para serem liberados. É o caso de ofertas de empregos ou de 
descontos em compras, por exemplo. Para ambos, é incomum a exigência de algum valor para acessá-los.

6.PAGAMENTOS A TERCEIROS

Se você decidiu pagar por algo na internet, preste bastante atenção na destinação do dinheiro. 
Verifique se o nome que consta no boleto ou na conta do Pix está de acordo com o nome da loja virtual. Em geral, 
golpistas utilizam contas bancárias de terceiros para receber o valor das fraudes.

O que fazer ao perceber a tentativa de um golpe

Especialistas em cibersegurança dão orientações sobre as medidas que precisam ser tomadas caso a 
pessoa perceba que esteja sendo vítima de um golpe em curso

Interrompa o contato imediatamente

Registre um boletim de ocorrências

Mude senhas pessoais de bancos ou de redes sociais e emails

Registre tudo, se possível, como número que entrou em contato, horário da ligação ou prints se for o caso

Qual o perfil dos golpistas

De acordo com a AllowMe, há quatro perfis de golpistas online. Eles costumam se comunicar entre si em 
canais e fóruns da Deep web, além de usarem, mesmo que raramente, o Telegram, Facebook, WhasApp e 
comunidades fechadas no Discord

Fraudador de processos

Não é considerado tão técnico, pois repete o que aprende em sites, além de não possuir base de dados em 
grande escala e tende a reproduzir dados cadastrais em fraudes. O perfil ainda é caracterizado por se 
especializar em apenas um tipo de golpe.

Fraudador hacker

Possui experiência e conhecimento para desenvolver por conta própria ferramentas de ataques, 
realizando o máximo de levantamento possível da potencial vítima.

Fraudador lotter

Tem um perfil diferente dos demais, pois o seus alvos são outros fraudadores, mirando em golpistas 
amadores que não possuem informações técnicas tão aprofundadas.

Fontes: Diego Marcos Moreira, diretor de segurança da informação; Márcia Netto, especialista em 
cibersegurança; Longinus Timochenco, especialista em cibersegurança; Júlio Concílio, especialista em 
segurança da informação do Ibsec (Instituto Brasileiro de Segurança Cibernética). Com reportagem de janeiro de 2024"
),
("/images/noticia3.png"
,
"A cada 5 minutos, uma pessoa cai em um golpe virtual em MG; saiba como ficar longe desses criminosos"
,
"Para se ter dimensão do crescimento desse delito, o número de registros em 2018 foi de 28.160 ocorrências; já 
em 2023, foram 87.172 um aumento de 210%"
,
"A cada cinco minutos, uma pessoa é vítima de algum tipo de golpe realizado pela internet. De janeiro a 
setembro deste ano, foram 79.869 registros de estelionato virtual ou 295,8 por dia, 12 por hora. 
Outras 1.977 pessoas conseguiram escapar do golpe no mesmo período. Nos doze meses do ano passado, o total 
de casos chegou a 87.172 além de 3.134 tentativas. Para se ter uma dimensão do crescimento desse 
tipo de delito em Minas, o número de registros em 2018 foi de 28.160 ocorrências. Já em 2023, foram 
87.172 um aumento de 210%. Em meio a esse cenário, e com a proximidade da chegada das 
promoções da Black Friday e do Natal, a Polícia Militar de Minas Gerais lançou, nesta quinta-feira (17 de outubro), 
a campanha Se deu dúvida, é golpe. Nas redes sociais, a corporação vai postar vídeos com 
dicas para livrar a população dos golpes. Os dados foram repassados à reportagem Polícia Civil."
,
"Quais os sinais de alerta para desconfiar de um golpe

O especialista em direito digital Alexandre Atheniense informa que, após a pandemia de Covid-19, houve 
um boom de golpes virtuais. Tivemos um aumento no uso de plataformas digitais para diversos 
serviços, e as pessoas passaram a usar o computador no ambiente doméstico, que não tem o mesmo nível 
de segurança do espaço corporativo. Isso fez com que os hackers passassem a atuar contra o cidadão 
comum. Atheniense pondera que outro fator que ajuda a explicar o aumento dos delitos é que o 
golpista está cada vez mais profissional, muitas vezes ligado a organizações criminosas, enquanto as 
vítimas, principalmente as de faixa etária mais elevada, acreditam em qualquer tipo de anúncio que encontram, afirma.

Bilhões de vítimas

A previsão é de que, neste ano, haja uma perda financeira no Brasil decorrentes de golpes virtuais de R$ 71 bilhões, 
conforme alerta o especialista em direito digital. Existem aproximadamente 4.800 golpes 
cibernéticos. Uma pesquisa realizada pelo Senado mostrou que um em cada cinco brasileiros já foi 
vítima de algum golpe digital, ou seja, 25%. A situação é alarmante. A oferta de produtos por um preço 
abaixo do praticado é a principal isca utilizada pelos estelionatários para atrair o consumidor. A 
ganância por valores acessíveis faz com que a pessoa deixe de tomar qualquer tipo de cautela. O 
consumidor não verifica se o site é confiável, se o link realmente remete à loja verdadeira. Na Black 
Friday, os preços baixos atraem as pessoas, e o cuidado precisa ser redobrado, sugere o advogado Luiz Felipe Siqueira.

Saiba como se prevenir

DSiqueira orienta que, ao utilizar o ambiente virtual, as pessoas sejam como os mineiros: desconfiadas. 
Desconfie de tudo. Se viu um carro que custa R$ 60 mil sendo vendido por R$ 40 mil, já deixe a 
vontade de lado, porque a chance de dar algo errado é muito grande, complementa. Caso a pessoa caia 
em algum golpe, a recomendação é procurar a polícia para registrar a ocorrência. Outras dicas para evitar 
a dor de cabeça são: não clicar em links desconhecidos, não fornecer informações pessoais e pesquisar 
a reputação da empresa.

Fontes: Diego Marcos Moreira, diretor de segurança da informação; Márcia Netto, especialista em 
cibersegurança; Longinus Timochenco, especialista em cibersegurança; Júlio Concílio, especialista em 
segurança da informação do Ibsec (Instituto Brasileiro de Segurança Cibernética). Com reportagem de 
janeiro de 2024"
),
("/images/noticia4.png"
,
"Vítimas de golpes envolvendo pix têm chance de recuperar o dinheiro"
,
"Mecanismo Especial de Devolução (MED), do Banco Central, pode ajudar no ressarcimento. Procon 
Assembleia orienta cliente a agir imediatamente. 09/09/2024 14:52"
,
"Desde que foi lançado, em novembro de 2020, o pix se transformou rapidamente no meio de pagamento 
mais popular do Brasil. Somente em 2023, foram registradas mais de 42 bilhões de transações via pix, 
superando todas as demais modalidades somadas (cartão de crédito, de débito, TEC e outras). 
Infelizmente, golpistas sempre buscam formas de enganar consumidores. No caso do pix, não é diferente. 
Várias fraudes envolvendo essa ferramenta já foram registradas. Para tentar ajudar os consumidores que 
caíram em golpes, o Banco Central criou o Mecanismo Especial de Devolução (MED), que facilita o 
estorno de valores em caso de transações irregulares. Apesar de não garantir o ressarcimento do dinheiro 
pago, o MED aumenta as chances de a vítima reaver os recursos. O coordenador do Procon da 
Assembleia Legislativa de Minas Gerais (ALMG) Marcelo Barbosa explica que o MED não é aplicado 
nos casos em que o consumidor faz um pix por engano na conta de outra pessoa ou empresa. “Nessa 
situação deve-se entrar em contato com o recebedor para solicitar a devolução do dinheiro. Caso não o 
conheça, o consumidor pode pedir ajuda ao seu banco”, afirma. Apesar de não haver norma do Banco 
Central sobre devoluções em caso de engano ou erro do pagador, esse tipo de situação configura 
apropriação indébita, conforme descrito no Código Penal."
,
"Como funciona

Para solicitar o MED, o cliente que tiver sido vítima de fraude deve acionar o seu banco em até 80 dias 
após o envio do pix. Se a instituição julgar que de fato se trata de um golpe, ela vai acionar o banco no 
qual o dinheiro foi depositado para que a respectiva conta seja bloqueada. O caso passará por uma 
revisão mais criteriosa e, comprovada a fraude, o consumidor receberá o dinheiro de volta integral ou 
parcialmente. A norma que criou o MED prevê que o banco não é obrigado a usar recursos próprios 
para ressarcir a vítima, lembra Marcelo Barbosa. Isso significa que, se na conta do golpista não houver 
saldo suficiente para o estorno integral, o consumidor vai recuperar apenas parte do dinheiro. Por isso, é 
muito importante que o consumidor formalize o pedido de ressarcimento o mais rápido possível. A conta 
do golpista será monitorada pelo banco no qual o consumidor tem conta durante 90 dias. Se nesse 
período entrar mais algum valor, este será redirecionado à vítima até o limite da devolução total. Na 
maioria das vezes, no entanto, o golpista saca imediatamente o dinheiro e fecha a conta. Nesse caso, o 
MED não terá utilidade. Por isso, alerta o coordenador do Procon, o consumidor deve ficar sempre muito 
atento quando for emitir um pix. Entre os cuidados a serem tomados estão verificar o valor a ser pago e 
também confirmar o recebedor do dinheiro. Por exemplo: se o consumidor compra na loja A, o pix tem 
que ter como destinatário a loja A. Outra forma muito comum de golpe é quando o criminoso se passa 
por um amigo ou parente da vítima e pede dinheiro, indicando a conta de um desconhecido para que os 
recursos sejam depositados. Nesse caso, lembra Marcelo Barbosa, vale a pena telefonar diretamente para 
a pessoa para verificar se, de fato, pediu ajuda financeira. Para outras informações sobre o 
funcionamento do MED, consulte o site do Banco Central.
"
),
("/images/noticia5.png"
,
"Eram meu rosto e minha voz, mas era golpe: como criminosos clonam pessoas com inteligência artificial"
,
"Simone Machado Role,De São José do Rio Preto (SP) para a BBC News Brasil 28 fevereiro 2024"
,
"Poucas horas depois de ver a filha sair de casa para trabalhar, a advogada aposentada Karla Pinto recebeu 
uma chamada de vídeo em seu celular.


Do outro lado do vídeo, sua filha, a advogada criminalista Hanna Gomes, pedindo uma transferência via 
pix de R$ 600.


Três fatores fizeram a aposentada desconfiar da situação: na chamada de vídeo sua filha estava com uma 
blusa diferente da que havia saído de casa; a conta para a qual o dinheiro deveria ser transferido seria de 
uma amiga da filha e não a dela própria e, principalmente, a filha não havia chamado a mãe pelo apelido 
carinhoso que as duas comumente usam entre elas.


Ao notar essas situações desconexas, a aposentada decidiu checar se realmente era Hanna que aparecia 
no vídeo e perguntou qual era o nome do cachorro da família e do vizinho que mora em frente à casa 
delas. Depois disso, a chamada foi desligada.

Eram o meu rosto, meu cabelo e a minha voz, diz Hanna à BBC News Brasil. O 
único detalhe é que a voz estava um pouco em descompasso com o vídeo, mas 
sabemos que isso pode acontecer devido à conexão com a internet. É assustador ver 
a evolução desse tipo de golpe."
,
"Como funciona

A advogada explica acreditar que criminosos tenham usado inteligência artificial (IA) para criar um 
clone dela e tentar aplicar golpes com sua imagem.

Esses conteúdos são produzidos em softwares que usam IA para recriar a voz de pessoas, trocar o rosto 
em vídeos e sincronizar movimentos labiais e expressões.

Tenho diversos conteúdos de aulas online e vídeos nas redes sociais que facilmente podem ter sido 
usado pelos criminosos para criar essa deep fake. E mesmo a gente tomando alguns cuidados como 
salvar os contatos dos familiares pelo nome, e não como pai e mãe, não foram suficientes para driblar a 
ação de criminosos, conta a advogada.

A família registrou o caso na Delegacia de Crimes Virtuais da Polícia Civil do Distrito Federal (DF), que 
investiga o ocorrido. Segundo a Polícia Civil do DF, não há estatísticas fechadas sobre esse tipo de crime 
usando IA.

A gente está vivendo uma nova era, onde a tecnologia está cada vez mais 
avançada e acessível. Isso traz muitos benefícios, mas também desafios, como o 
uso indevido dessas ferramentas para fins criminosos, diz o delegado titular da 
Delegacia de Repressão aos Crimes Cibernéticos (DRCC) do DF, Leonardo Sampaio.

Estelionatos por meio eletrônico cresceram no Brasil

Golpes como o que os criminosos tentaram aplicar na mãe de Hanna e que exigem transferências 
bancárias por aplicativos de celular ou no ambiente virtual entram na categoria do estelionato eletrônico.

Dados do Anuário Brasileiro de Segurança Pública 2023 mostram que no ano passado foram registrados 
200.322 casos de estelionato por meio eletrônico, número 65% maior do que o registrado em 2021, 
quando esse número foi de 120.470.

Os Estados com mais casos desse tipo de golpe são Santa Catarina (64.230), Minas Gerais (35.749), 
Distrito Federal (15.580) e Espirito Santo (15.277).

Segundo o levantamento, os Estados de Bahia, Ceará, Rio de Janeiro, Rio Grande do Norte, Rio Grande 
do Sul e São Paulo não disponibilizaram dados sobre esse tipo de crime até a conclusão da pesquisa.

Uso de IA para aplicar golpes

Com o avanço da tecnologia e da IA, é cada vez mais comum surgirem softwares que conseguem 
reproduzir a imagem de uma pessoa com voz dela, criando frases completas e imitando até mesmo os 
trejeitos de fala e sotaque.

Para fazer essa criação basta ter acesso a poucos segundos de imagem ou da voz da pessoa — como, por 
exemplo, um vídeo postado nas redes sociais ou até mesmo um áudio enviado em aplicativos de 
mensagem.

Uma pessoa curiosa, que busca tutoriais sobre essas ferramentas, consegue fazer isso em poucos 
minutos. Não precisa ser um especialista em tecnologia. Hoje temos filtros que a pessoa consegue falar e 
a voz dela é alterada em tempo real, explica Arthur Igreja, especialista em Tecnologia e Inovação. Esses 
são os chamados vídeos deep fake.

Já no caso das chamadas de vídeo fake, realizadas em tempo real como no caso da Hanna, a criação é um 
pouco mais complexa. Para isso é necessário um computador um pouco mais potente e programas mais 
	avançados.

É como se você pudesse criar um personagem de videogame que pode falar e agir como uma pessoa 
real, usando a voz e a imagem de alguém. Essa tecnologia pode ser usada para fazer chamadas de vídeo, 
onde parece que você está conversando com alguém, mas, na verdade, é uma versão criada por IA dessa 
pessoa. No entanto, isso exige tecnologia mais avançada e pode não estar tão facilmente disponível para 
todos, explica Rogério Guimarães, diretor-executivo da Covenant Technology.

Distinguir se um conteúdo é verdadeiro ou criado pela tecnologia é um desafio. Mas segundo os 
especialistas ouvidos pela BBC News Brasil, algumas características desses vídeos e imagens pode 
ajudar a verificar se ela é real ou não.

A falta de naturalidade na movimentação da pessoa pode levantar suspeitas, assim como a 
inconsistência da iluminação e a falta de sincronização. É importante, em caso de dúvidas, buscar 
comprovar a identidade da pessoa. Perguntar coisas que somente esta pessoa seria capaz de responder e 
até mesmo pedir para filmar algo da casa, ensina Rafael Sampaio, gerente nacional da NovaRed, 
conglomerado ibero-americano de cibersegurança.

Veja 7 dicas para se proteger de golpes que usam IA

Fique atento

Tenha consciência que esse tipo de golpe existe e desconfie de qualquer tipo de conteúdo em vídeo, 
áudio ou imagem;

Use o telefone ou fale pessoalmente

Na dúvida se é realmente a pessoa que está interagindo por uma chamada de vídeo ou em um vídeo use o 
telefone e ligue direto para aquele contato ou tente falar com ele pessoalmente;

Atenção aos detalhes

Análise detalhes de movimentações dos olhos e da boca, eles podem indicar algumas inconsistências e 
falta de naturalidade;

Qualidade da conexão

Se a imagem ou o som parecem perfeitos demais, ou, ao contrário, artificialmente distorcidos, pode ser 
um sinal;

Perguntas específicas

Faça perguntas a respeito de situações que só você e a pessoa vivenciaram ou criem uma frase, ou 
palavra-chave para confirmar a autenticidade de quem está do outro lado da chamada;

Mude de assunto

Se você suspeitar que algo está errado durante uma ligação ou chamada de vídeo, tente mudar de 
assunto, perguntando como está no trabalho. Muitos golpistas acabam desligando nessas situações;

Atenção redobrada em pedidos de dinheiro

⁠Casos que envolvam pedidos de dinheiro, seja por PIX ou outras transferências eletrônicas, redobre a 
atenção. Nesses casos existe uma chance muito grande de ser um golpe."
),
("/images/noticia6.png"
,
"Golpes digitais atingem 24% da população brasileira, revela DataSenado"
,
"Da Agência Senado  01/10/2024, 17h51"
,
"Os golpes digitais vitimaram 24% dos brasileiros com mais de 16 anos nos últimos 12 meses. São mais 
de 40,85 milhões de pessoas que perderam dinheiro em função de algum crime cibernético, como 
clonagem de cartão, fraude na internet ou invasão de contas bancárias. Os dados são de uma pesquisa 
divulgada nesta terça-feira (1º) pelo Instituto DataSenado.


De acordo com o estudo Panorama Político 2024: apostas esportivas, golpes digitais e endividamento, 
a distribuição dos golpes é uniforme em todas as regiões do país, quando consideradas as margens de 
erro. Os menores índices ocorrem nos estados do Ceará (17%) e do Piauí (18%).


Segundo a pesquisa, não há um perfil claro para as vítimas desse tipo de crime. O DataSenado investigou 
variáveis como tamanho do município, situação de domicílio (se urbano ou rural), religião, situação no 
mercado de trabalho, renda, escolaridade, faixa etária, sexo, cor e raça. “As pessoas que relatam ter 
perdido dinheiro com esse tipo de crime nos últimos 12 meses estão distribuídas em proporção 
semelhante às características socioeconômicas da população brasileira”, conclui o documento."
,
"Endividamento

O Panorama Político também investigou o tema do endividamento. De acordo com a publicação, 32% 
dos brasileiros têm dívidas em atraso há mais de 90 dias.


Nesse caso, foi possível delinear um perfil mais claro das vítimas: as mulheres representam a maioria dos 
endividados (54%). A incidência também é maior entre pessoas com renda familiar até dois salários
mínimos e que moram com cinco ou mais familiares na mesma casa.


Segundo a pesquisa, há uma distribuição uniforme entre as unidades da Federação. As exceções são 
Santa Catarina, que registra patamar inferior ao nacional (22%), e Amazonas, que registra índice superior 
(42%).


De acordo com o DataSenado, as pessoas que pagam sozinhas as contas da casa estão mais endividadas 
do que aquelas que compartilham essa responsabilidade com alguém. Entre as pessoas que são as únicas 
responsáveis pelo domicílio, 38% estão endividadas, enquanto 62% não possuem dívidas. No grupo que 
compartilha a responsabilidade pelo lar, esses percentuais são de 33% e 67%, respectivamente, destaca 
o documento.


Entre as pessoas endividadas há mais de 90 dias, 69% têm renda familiar de até dois salários mínimos. 
Na faixa entre dois e seis mínimos, a taxa é de 25%. Entre aqueles que ganham mais de seis salários, o 
endividamento fica em 6%.

Para José Henrique Varanda, analista do DataSenado e coordenador da pesquisa, os dados mostram que o 
fenômeno do endividamento tem muita associação com a renda disponível das pessoas e famílias.

Famílias de menor renda e mais numerosas têm proporcionalmente mais dívidas. Como a pesquisa foi 
feita com pessoas, não com domicílios e famílias, é natural esperar que aquelas que sejam as 
responsáveis, seja com responsabilidade única ou compartilhada, concentrem mais dívidas. No grupo de 
menor renda, há uma proporção maior de mulheres que são responsáveis pelas famílias, o que contribui 
para o seu maior endividamento neste grupo explica.

O DataSenado também apurou o percentual de brasileiros que usam aplicativos de apostas esportivas no 
país. De acordo com a pesquisa, 13% da população com 16 anos ou mais o equivalente a 22,13 
milhões de pessoas — declararam ter apostado em bets nos últimos 30 dias.

A pesquisa foi realizada entre os dias 5 e 28 de junho. Por telefone, foram entrevistadas 21.808 pessoas 
com 16 anos ou mais. O Panorama Político é aplicado desde 2008. A pesquisa avalia a opinião dos 
brasileiros para indicar prioridades para a atuação parlamentar e quantificar percepções em relação à 
democracia e aos principais temas em debate no país.

Agência Senado (Reprodução autorizada mediante citação da Agência Senado)"
),
("/images/noticia7.png"
,
"Duas pessoas são presas e uma está foragida por golpe da falsa prostituta"
,
"Isabela AleixoDo UOL, no Rio15/12/2024 19h50"
,
"A polícia investiga uma mulher identificada como Rayene Carla Reis, 28, acusada de extorquir vítimas 
ameaçando-as de morte e de agressões físicas em um golpe que envolve um falso programa com uma 
prostituta. Ela abordava as pessoas dizendo que elas haviam contratado uma garota e não compareceram 
ao encontro. Rayene está foragida, mas dois de seus parentes, que também faziam parte do golpe, foram 
presos"
,
"O que aconteceu

O golpe da falsa prostituta funcionava da seguinte forma:

Rayene buscava informações sobre pessoas aleatórias em um aplicativo que funciona como um banco de 
dados e dispõe informações pessoais como CPF, nome completo, relação de parentes, telefones, data de 
nascimento, endereço e até renda média presumida

Com essas informações, ela entrava em contato com uma potencial vítima

A conversa inicial era de que a pessoa havia contratado um serviço com uma prostituta e não tinha 
comparecido. Dessa forma, ela teria que arcar com a despesa

Assim começavam as extorsões.

De acordo com a delegada Márcia Beck, da 17 DP, Rayene ameaçava as vítimas falando que o grupo 
fazia parte de uma milícia e que envolveria a família da vítima. Ela enviava imagens de policiais 
militares fardados durante as extorsões. Os valores cobrados iam de 600 reais a 3.500 reais. Segundo a 
delegada, mesmo pessoas que não tinham qualquer relação com a contratação do serviço de prostituição 
acabavam caindo nas ameaças por causa das informações pessoais que a suspeita detinha

Homem e mulher presos são parentes de Rayene.

A prima dela é suspeita de emprestar a conta bancária para recebimento dos valores das extorsões. O 
irmão de Rayene foi preso em flagrante por posse ilegal de arma de fogo enquanto a polícia cumpria 
mandado de busca e apreensão em endereço ligado à suspeita.

31 registros de ocorrência similares

Segundo a delegada Márcia Beck, foram identificados ao menos 31 registros com o mesmo modus 
operandi do golpe da falsa prostituta. Em um celular atribuído a Rayene foi encontrada uma captura de 
tela de uma mensagem em um grupo do Telegram que ensinava a aplicar o golpe. A polícia acredita 
que a suspeita adaptou e criou uma estratégia própria para extorquir as vítimas"
),
("/images/noticia8.png"
,
"Idoso cai em golpe da prova de vida do INSS e perde mais de R$ 1,6 mil: Me quebrou as pernas"
,
"Aposentado afirma ter perdido R$ 1.620 após receber ligação de falso atendente do INSS. O caso foi 
registrado como estelionato na Delegacia de Polícia de Peruíbe (SP). Por g1 Santos 07/06/2025 06h23 
Atualizado há 4 meses"
,
"Um aposentado, de 69 anos, afirma ter sofrido um golpe envolvendo o benefício do Instituto Nacional do 
Seguro Social (INSS). Ao g1, João Gomes do Nascimento disse ter recebido uma ligação de um homem 
que se passou por um atendente do órgão e o convenceu de que o depósito seria suspenso caso não 
atualizasse os dados virtualmente. Ficaram só 20 reais na conta, lamentou ele.


Segundo o morador de Peruíbe, no litoral de São Paulo, o prejuízo foi de R$ 1.620,00. Nascimento 
contou ter recebido a ligação e seguido as orientações do golpista, que acessou a conta dele e fez a 
transferência via Pix.


Ele falou que eu tinha que fazer a prova de vida, senão, no mês que vem, meu 
pagamento ia ficar bloqueado. Disse que ia protocolar o procedimento pelo 
celular e me orientou a não tocar na tela. Enquanto isso, ele foi lá e limpou minha 
conta, relatou o aposentado.


O caso foi registrado como estelionato na Delegacia de Polícia de Peruíbe. Em nota, o Agibank 
expressou solidariedade ao cliente e afirmou que está à disposição para investigar o ocorrido (veja o 
posicionamento completo adiante). O g1 também entrou em contato com o INSS, mas não obteve retorno 
até a publicação desta reportagem."
,
"O que aconteceu

Golpe

De acordo com o relato, o golpe aconteceu na última segunda feira (2). O idoso afirmou que o criminoso 
pareceu conhecer os dados pessoais dele com precisão. Ele só confirmou que eu recebia pelo banco 
Agibank. Não pediu senha, não pediu CPF, nada. Já tinha tudo nas mãos. Eles têm nossos documentos, 
endereço, tudo. A gente não entende como isso é possível, desabafou.


Após o golpe, o idoso procurou a agência do INSS em Peruíbe, onde foi informado sobre o golpe. Em 
seguida, ele registrou o boletim de ocorrência na delegacia. O escrivão me disse que o bandido deixou 
rastros. Tomara que a polícia consiga pegar.


Com o dinheiro roubado, o idoso deixou de pagar contas básicas, como luz, água e internet, e ainda 
precisou pedir desculpas aos familiares por não conseguir quitar dívidas pessoais. Fiquei frustrado. Eu 
gosto de manter tudo certinho. Esse golpe me quebrou as pernas, disse.


O g1 entrou em contato com a Secretaria de Segurança Pública de São Paulo (SSP-SP), em busca de 
mais informações sobre o caso, mas não recebeu um retorno até a publicação desta matéria.

Outro golpe e mesma vítima

O idoso disse que não foi a primeira vez que sofreu com golpes. Ele revelou ter perdido mais de R$ 3 mil 
em dezembro de 2024, quando recebeu uma falsa promessa de liberação de crédito. Ligam dizendo que 
a gente tem direito a dinheiro, cartão, e no fim roubam tudo. Eu odeio ladrão, pontuou.

Agibank

Em nota, o Agibank esclareceu que toda operação realizada pela instituição é condicionada à 
manifestação formal do cliente e à validação de identidade conforme os critérios regulatórios.


O banco afirmou que segue à disposição para qualquer esclarecimento e reiterou o compromisso com a 
segurança dos seus clientes, colaborando em todos os âmbitos na elucidação e no combate a essas 
práticas criminosas.


A companhia reforçou os protocolos de segurança, por meio da tecnologia e canais dedicados à 
prevenção de fraudes, como o uso da validação biométrica e de inteligência artificial.


Além disso, destacou o trabalho contínuo de informação e alerta aos clientes para que jamais 
compartilhem dados pessoais, senhas ou realizem operações a pedido de terceiros por telefone ou links 
suspeitos, e que sempre utilizem os canais oficiais do Agibank para qualquer dúvida ou denúncia."
),
("/images/noticia9.png"
,
"Golpe de amor: idoso é enganado por grupo criminoso e perde R$ 2 milhões"
,
"Suspeitos atuavam pela internet; eles seduziram e os convenceram o idoso a transferir dinheiro Thomaz 
Coelho e Rafael Saldanha, da CNN, em São Paulo 28/11/24 às 19:11  Atualizado 28/11/24 às 19:11"
,
"Um idoso perdeu aproximadamente R$ 2.000.000,00 para um grupo criminoso após cair no golpe do 
amor. A vítima é do Rio Grande do Sul.


Seis suspeitos foram presos na Operação Dom Quixote até o momento. As prisões aconteceram nas 
cidades de Santo André, Guarulhos, Ferraz de Vasconcellos, Osasco e em São Paulo (SP).


Os suspeitos atuavam pela internet, utilizando redes sociais para abordar as vítimas. Segundo a Polícia 
Civil de São Paulo, eles seduziram e os convenceram o idoso a transferir dinheiro.


O caso foi registrado como estelionato na Delegacia de Polícia de Peruíbe. Em nota, o Agibank 
expressou solidariedade ao cliente e afirmou que está à disposição para investigar o ocorrido (veja o 
posicionamento completo adiante). O g1 também entrou em contato com o INSS, mas não obteve retorno 
até a publicação desta reportagem.


A ação, realizada em conjunto entre as Polícias Civis do Rio Grande do Sul, Ceará e São Paulo, investiga 
os crimes de estelionato qualificado, associação criminosa e lavagem de dinheiro."
,
"O que aconteceu

25 policiais do Rio Grande do Sul participaram da operação, realizada na última quarta-feira (27). 
Também houve cumprimento de busca e apreensão no estado do Ceará.


Além disso, documentos, aparelhos eletrônicos (celulares e notebooks) e cartões bancários foram 
apreendidos e os valores de contas bancárias dos criminosos foram bloqueados.


A ação contou com a participação de policiais civis da Divisão de Capturas do Departamento de 
Operações Policiais Estratégicas (Dope) e das Delegacias Seccionais de Mogi das Cruzes, Santo André e 
Barretos."
),
("/images/noticia10.png"
,
"Idosos são as maiores vítimas de golpes financeiros: veja os 18 mais comuns"
,
"Mariana RodriguesColaboração para o UOL, em São Paulo 16/09/2024 05h30."
,
"Os idosos são o maior alvo de violência patrimonial, de acordo o Ministério de Direitos Humanos e 
Cidadania. Por conta do grande número de golpes contra idosos, a Secretaria Nacional dos Direitos da 
Pessoa Idosa desenvolveu a Cartilha de Apoio à Pessoa Idosa: enfrentamento à violência patrimonial e 
financeira, com os 15 principais golpes que têm como principal vítima a população idosa. Além disso, a 
Febraban (Federação Brasileira de Bancos) divulgou uma lista com dez golpes comuns aos idosos. Veja 
abaixo o compilado dos tipos de fraude e como evitar.


Este ano, até setembro, o Ministério registrou 74,2 mil casos de violência patrimonial, sendo 35,5 mil 
contra idosos. Ao todo, em 2023, foram 93 mil violações, 45 mil contra idosos. As mulheres foram o 
segundo grupo com mais vítimas, seguido por pessoas com deficiência. Os dados são referentes às 
denúncias recebidas via Disque 100  Ouvidoria Nacional de Diretos Humanos. A violência patrimonial 
inclui golpes virtuais e presenciais.


Veja quais são os principais golpes e como se precaver e reduzir as chances de se tornar vítima."
,
"O que aconteceu

1.Oferta de empréstimo consignado e cartão de crédito

A oferta insistente de empréstimo ou cartão de crédito para pessoas idosas, normalmente por telefone, 
pode configurar uma violência patrimonial. A vítima pode receber o crédito em sua conta mesmo tendo 
recusado a oferta, ou pode aceitar uma oferta sem compreender as regras, sendo induzida ao erro.


Como evitar: Preste atenção às movimentações bancárias e não aceite ofertas de crédito por telefone sem 
entender todas as regras. Saiba seus direitos: quando a contratação é realizada por meio de ligação 
telefônica, há garantia de poder desistir do negócio em um prazo de sete dias.

2.Golpe do Bilhete premiado

Um golpista diz que ganhou na loteria, como uma Mega Sena ou uma Tele Sena, mas não poderá receber 
o prêmio no banco. Em seguida, ele oferece o direito ao resgate, desde que a vítima pague um valor 
menor pelo bilhete premiado.


Como evitar: Não aceite adquirir um bilhete premiado. Os prêmios da loteria são concedidos diretamente 
aos portadores dos bilhetes premiados, não há intermediários envolvidos.

3.Golpe do boleto falso

O fraudador emite um boleto falso e envia para o email da vítima. A vítima não percebe se tratar de um 
golpe e acaba pagando o valor. Os boletos podem ser de viagens, consórcios, operadoras de telefonia, 
multas ou até mesmo boletos de igrejas.


Como evitar: Antes de fazer qualquer pagamento, confira o valor, a data de vencimento e quem será 
beneficiado. Na dúvida, procure o seu banco.

4.Cartão retido no caixa eletrônico

O golpe acontece quando é instalada uma armadilha nos caixas eletrônicos com o objetivo de prender o 
cartão magnético.


Como evitar: Antes de inserir o seu cartão na máquina, verifique se o caixa eletrônico está violado ou se 
o local de inserir o cartão está com aspecto diferente do normal.

5.Falso namoro virtual

O golpista usa sites de namoro para procurar suas vítimas, geralmente pessoas idosas ou que moram 
sozinhas. Depois, por aplicativos de conversa como o WhatsApp, envolve a vítima e pede um 
empréstimo que nunca será pago. Em uma variação desse golpe, o suposto namorado diz que está 
enviando presentes do exterior, e um comparsa entra em contato com a vítima se passando pela alfândega 
e pede dinheiro para liberar o produto, que não existe.


Como evitar: Ao desconfiar de que pode ser vítima desse tipo de golpe, procure uma delegacia.

6.Falso sequestro

Fraudadores telefonam se passando por um familiar que teria sido sequestrado. E pedem 
uma transferência de dinheiro como resgate.


Como evitar: A orientação é não se apavorar, não pronunciar o nome de ninguém conhecido, desligar o 
telefone e ligar imediatamente para a pessoa que foi supostamente sequestrada ou para pessoas próximas 
a ela e certificar-se que está tudo bem.

7.Falsa central de atendimento

Por ligação telefônica ou mensagens de WhatsApp, os golpistas se passam por funcionário da central de 
atendimento telefônico (CAT) de alguma instituição financeira. Comunicam à vítima que uma compra foi 
realizada em seu cartão de crédito, geralmente com valor alto. Durante a conversa, podem ser informados 
dados reais da vítima, que são encontrados na internet.


Como evitar: Ao receber comunicação suspeita, desligue e entre em contato diretamente com o banco ou 
instituição financeira através dos números oficiais. De acordo com a Febraban, os bancos podem entrar 
em contato com os clientes para confirmar transações suspeitas, mas nunca solicitam dados pessoais, 
senhas, atualizações de sistemas, chaves de segurança. Também não solicita que o cliente realize 
transferências ou pagamentos alegando estornos de transações.

8.Golpe da maquininha

Há algumas variações do golpe, como uma maquininha com visor adulterado ou quebrado, e é cobrado 
um valor maior do que o informado. Em outra variação, depois que a vítima insere a senha, o golpista diz 
que a compra não foi efetuada e passa em outra maquininha, cobrando duas vezes.


Como evitar: Nunca entregue o seu cartão na mão da pessoa que vai fazer a cobrança e sempre peça o 
comprovante de pagamento. Vale também acionar os avisos de cobrança feitos pela sua instituição 
financeira, para acompanhar a movimentação bancária.

9.Cartão clonado entregue ao motoboy

O golpista liga para a vítima e alega que seu cartão foi clonado e precisa ser cancelado com urgência e 
confirma os dados pessoais da vítima. Por fim, solicita que a vítima faça uma ligação para o número que 
está no verso do cartão. Por meio de escutas telefônicas, eles conseguem interceptar a ligação com o 
banco e informam que vão enviar um motoboy, suposto funcionário do banco, ou até mesmo um policial, 
e que seu cartão deverá ser entregue a ele. Com os dados da vítima e o cartão, os golpistas realizam 
saques bancários, fazem compras online ou em lojas físicas.


Como evitar: O banco não irá realizar a retirada do seu cartão físico pessoalmente, se isso for oferecido, 
é golpe. Não informe seus dados como senha e código de segurança por telefone.

10.Parente com o carro quebrado

Nesse caso, uma pessoa liga, de um número desconhecido, e se passa por um parente como um 
sobrinho(a). Ainda pergunta se a vítima se esqueceu dele, constrangendo-a a falar o nome de um parente. 
Depois, diz que está com o carro quebrado e precisa de dinheiro.


Como evitar: Desligue o telefone e ligue para seu parente para verificar se ele realmente precisa de ajuda.



11.Falso processo judicial

Golpistas informam que a pessoa idosa tem direito a receber uma quantia em dinheiro com uma causa 
ganha na Justiça. Para isso, cobram o pagamento dos honorários e outras taxas.


Como evitar: Antes de tomar qualquer medida, verifique a veracidade da informação. Se possível, entre 
em contato com um advogado de sua confiança para obter orientação.

12.Saidinha de banco

As pessoas idosas podem ter dificuldade de utilizar os caixas eletrônicos e, por isso, solicitam ou aceitam 
ajuda de pessoas desconhecidas. Nesse momento, os golpistas coletam os dados pessoais, bem como 
número, senha e código de segurança do cartão.


Como evitar: Procure sempre por um funcionário do banco uniformizado e identificado ou prefira 
realizar a transação dentro da agência bancária, no caixa de atendimento.

13.Compra em site falso

São utilizados sites falsos para venda de diversos produtos. Geralmente, usam o nome de grandes redes 
de varejo e alteram apenas o endereço eletrônico, que fica parecido com o real. Para atrair as vítimas, 
criam diversos anúncios chamativos, com descontos muito altos.


Como evitar: Desconfie de preços muito baixos e sempre confira o endereço eletrônico do site. Da 
dúvida, procure pela loja no Google e confira se o endereço eletrônico é o mesmo do site anunciando a 
oferta. Se não conhece a loja, procure pelo nome em sites como o Reclame Aqui e Procon.

14.Troca de cartão

Mais uma vez, o golpista se passa por um funcionário de banco. O golpista aguarda próximo às agências 
bancárias e, assim que a vítima sai de lá, ele a aborda como se fosse funcionário e diz que seu cartão 
apresentou um erro ou que a transação financeira não pode ser realizada. Em seguida, solicita que a 
vítima entregue o cartão para que ele possa examinar. Nesse momento, o golpista faz a troca do cartão.


Como evitar: Se alguém pedir para examinar seu cartão por qualquer motivo, recuse.

15.Golpe do WhatsApp clonado

O golpista finge ser funcionário de uma empresa com a qual a vítima contratou algum serviço. Ele pede 
que confirme seus dados pessoais para atualizar o cadastro ou ganhar descontos na prestação dos 
serviços, e solicitam o código de segurança. Dessa forma, ele consegue ter acesso a aplicativos de 
conversa, como o WhatsApp da vítima. Então, passa-se por ela para enviar mensagens pedindo dinheiro 
aos familiares e amigos.


Como evitar: Não envie seus dados pessoais ou informe senhas solicitadas por mensagem. Caso receba 
uma mensagem supostamente de um número novo de um contato, tente utilizar o antigo para confirmar 
se é realmente da pessoa, ou contate amigos ou parentes em comum para confirmar.

16.Golpe do falso empréstimo consignado

O fraudador liga para a vítima e oferece empréstimos com condições vantajosas. Para que garanta a 
oferta, pede ao consumidor que faça um depósito bancário referente a taxas de cadastro ou pede 
antecipação de alguma parcela. Também solicita dados pessoais e financeiros do cliente.


Como evitar: A Febraban alerta que não existe nenhum empréstimo em que a pessoa precise fazer 
qualquer tipo de pagamento antecipado, seja de IOF, taxas falsas de cadastros ou antecipação de parcela.

17.Golpe do falso presente de aniversário/falso brinde

Com dados pessoais e datas de aniversários, criminosos entram em contato com a vítima e dizem que 
têm um brinde ou um presente de aniversário para entregar. Os criminosos entregam algo para a vítima, 
geralmente flores, cosméticos ou chocolate, e nesse momento, pedem o pagamento de taxa de entrega, 
que só pode ser paga com cartão. O entregador/golpista geralmente usa uma maquininha com o visor 
danificado, que impossibilita a visualização do valor digitado na tela. Outra forma é o criminoso usar 
algum artifício para desviar a atenção da vítima, para que ela digite a senha no campo destinado ao valor 
da compra, possibilitando a visualização e uso. Em outra variação, o criminoso pede uma foto da vítima


Como evitar: Nunca aceite presentes e brindes inesperados, sem saber quem realmente mandou. 
Não aceite realizar pagamentos se o visor da maquininha estiver danificado, impedindo que você veja o valor 
real que está pagando. Jamais aceite tirar fotos do seu rosto ou selfies para receber entregas.

18.Phishing (pescaria digital)

O phishing, ou pescaria digital, é uma fraude eletrônica que visa obter dados pessoais do usuário. A 
forma mais comum de um ataque de phishing é por mensagens e emails falsos que induzem o usuário a 
clicar em links suspeitos. Também existem páginas falsas na internet que induzem a pessoa a revelar 
dados pessoais.


Como evitar: Nunca clique em links recebidos por mensagens. Mantenha seu sistema operacional e 
antivírus sempre atualizados. Na dúvida, fale com seu banco.

Outras orientações para se manter seguro contra golpes virtuais

Desde 2020, ocorrências de estelionato contra idosos pode, ser registradas pela Delegacia Eletrônica. 
Isso auxiliou na diminuição da subnotificação dos casos e, consequentemente, no aumento dos registros, 
diz a secretaria de Segurança Pública do Estado de São Paulo. Abaixo estão as dicas do órgão para evitar 
golpes virtuais:

Mantenha-se informado:

Esteja ciente dos tipos de golpes mais comuns que ocorrem no ambiente virtual, como phishing, fraude 
em compras online, golpes de romance/namoro, entre outros

Desconfie de solicitações de informações pessoais:

Nunca compartilhe informações pessoais, como senhas, números de cartão de crédito, CPF, etc., através 
de emails, mensagens de texto ou telefonemas não solicitados.

Verifique a autenticidade dos sites:

Ao fazer compras online, verifique se o site é seguro e autêntico. Pesquise opiniões e avaliações sobre a 
loja virtual

Cuidado emails e links suspeitos:

Evite clicar em links enviados por emails desconhecidos ou suspeitos. Esses links podem redirecionar 
para sites projetados para roubar informações

Fortaleça suas senhas:

Utilize senhas fortes, com uma combinação de letras maiúsculas e minúsculas, números e caracteres 
especiais.

Ative a autenticação de dois fatores:

Sempre que possível, habilite a autenticação de dois fatores nas suas contas. Isso adiciona uma camada 
extra de segurança

Tenha cuidado ao compartilhar informações pessoais nas redes sociais:

Evite fornecer informações pessoais sensíveis nas redes sociais, como data de nascimento completa, 
endereço residencial e número de telefone.

Desconffie de ofertas muito boas para ser verdade:

Se uma oferta parecer boa demais, desconfie. Golpistas frequentemente usam ofertas tentadoras para 
atrair vítimas. Seja cauteloso e pesquise sobre a empresa ou vendedor antes de realizar qualquer 
transação.

Mantenha seu software atualizado:

Mantenha seu sistema operacional, navegador e programas antivírus atualizados. As atualizações ajudam 
a corrigir falhas de segurança e proteger seu dispositivo"
),
("/images/noticia11.png"
,
"Suspeitos de aplicar golpe virtual em casal de idosos são alvos de operação no Pará e outros dois estados"
,
"Investigação apura prejuízo de mais de R$ 50 mil a casal de idosos; suspeitos têm ligação com facção 
criminosa, segundo a polícia. Por Jonathan Coimbra, g1 Pará e Tv Liberal  Belém 09/07/2025 12h41 
Atualizado há 3 meses"
,
"A Polícia Civil do Pará em conjunto com as polícias do Mato Grosso e Rio de Janeiro deflagraram, nesta 
terça-feira (9), a Operação Oliveira para cumprir mandados de busca e apreensão contra um grupo 
suspeito de aplicar golpes pela internet usando a fraude do falso parente.


Ao todo, foram cumpridos 11 mandados de busca e apreensão e cinco mandados de prisão preventiva. 
Segundo a polícia, as investigações começaram após um casal de idosos ser vítima do golpe, com um 
prejuízo de mais de R$ 50 mil.


A partir da apuração, a polícia identificou uma associação criminosa especializada em fraudes eletrônicas 
e ocultação de patrimônio, utilizando contas bancárias de terceiros obtidas com dados pessoais."
,
"Ainda de acordo com a polícia, há indícios de que integrantes do grupo têm vínculos com uma facção 
criminosa de atuação nacional, que se utiliza de pessoas cooptadas para movimentar o dinheiro obtido 
ilegalmente.


As diligências ocorreram nas cidades de Cuiabá, Várzea Grande e Santo Antônio do Leverger, no Mato 
Grosso, além de Niterói, no Rio de Janeiro. Ao todo, mais de 50 agentes participaram da ação.


Durante a operação, foram apreendidos diversos aparelhos eletrônicos que devem ajudar na identificação 
dos suspeitos e na análise do patrimônio do grupo. A Justiça também determinou o bloqueio de contas 
bancárias dos investigados, para tentar reparar os prejuízos causados às vítimas."
),
("/images/noticia12.png"
,
"Golpes virtuais: por que o Brasil virou terreno fértil para criminosos digitais"
,
"Com milhões de brasileiros conectados e pouca educação digital, cresce o número de vítimas de fraudes 
online, em especial entre idosos e usuários inexperientes TOPO Por Saneago – Saneamento de Goiás 
28/05/2025 09h13 Atualizado há 4 meses
"
,
"A era digital trouxe inúmeras facilidades para o dia a dia, mas também abriu espaço para uma nova e 
silenciosa ameaça: os golpes virtuais. Só em 2024, os brasileiros já somam prejuízos de mais de R$ 2,3 
trilhões em decorrência de crimes cibernéticos, segundo estimativas do setor.


O cenário é preocupante, e o Brasil ocupa hoje a segunda posição no ranking mundial de ataques digitais, 
com mais de 700 milhões de tentativas registradas em apenas um ano.


Apesar de parecer um problema distante, os números mostram que a ameaça é real, e bastante 
democrática. Um levantamento do Instituto DataSenado revelou que 24% dos brasileiros com mais de 16 
anos já foram vítimas de algum tipo de golpe online: isso equivale a mais de 40 milhões de pessoas.

Jovens lideram estatísticas de vítimas

Ao contrário do senso comum, que tende a associar os crimes virtuais aos idosos, de acordo com o 
Instituto de Pesquisa DataSenado, os mais afetados estão entre 16 e 29 anos, faixa que concentra 27% 
das vítimas de fraudes digitais. Essa geração, embora mais conectada, nem sempre está atenta aos riscos, 
e muitas vezes se torna alvo fácil em aplicativos de mensagem, redes sociais e compras online.


A falta de conhecimento a respeito dos golpes virtuais gera insegurança e é um 
terreno fértil para golpistas.

Já os idosos representam 16% das vítimas, mas com uma diferença importante: a natureza do golpe. 
Enquanto os jovens caem, em grande parte, em armadilhas digitais rápidas, os mais velhos são vítimas de 
estelionato clássico, em que os criminosos usam da persuasão, de falsas identidades e da simulação de 
atendimentos para enganar suas vítimas e acessar seus dados.


O Anuário Brasileiro de Segurança Pública de 2024 também confirmou uma mudança no perfil da 
criminalidade. Enquanto os roubos físicos a bancos caíram quase 30%, os estelionatos digitais subiram 
13,6% no último ano. A tendência dita que o crime migrou para o ambiente virtual, onde é mais difícil 
ser rastreado e mais fácil de escalar.


As técnicas usadas, por sua vez, são cada vez mais sofisticadas. Os criminosos combinam a engenharia 
social com dados vazados, construindo narrativas convincentes. Eles clonam cartões, criam centrais 
falsas de banco, aplicam o golpe do Pix e se aproveitam de cada detalhe disponível nas redes sociais 
das vítimas."
,
"Golpes a cada segundo

A dimensão do problema impressiona: segundo o Fórum Brasileiro de Segurança Pública, quase 8 mil 
brasileiros são vítimas de golpes digitais a cada hora. Isso inclui desde quem paga por um produto e não 
recebe, até quem tem o celular furtado e as contas invadidas em minutos.


A variedade de fraudes é tão grande quanto a criatividade dos criminosos. Aplicativos de mensagens 
como WhatsApp e Telegram se tornaram terrenos férteis para falsas cobranças, links maliciosos e 
tentativas de se passar por amigos, parentes ou empresas conhecidas. Em um só dia, milhares de 
brasileiros recebe mensagens com boletos falsos, pedidos de transferência por Pix e até comunicações 
falsas se passando por instituições financeiras.


Dos 8 mil brasileiros vítimas de golpes a cada hora, o Fórum Brasileiro de Segurança Pública ainda 
informa que:


4,6 mil pessoas são alvos de tentativas de golpe via mensagens ou ligações;

2,5 mil compram pela internet e não recebem o produto;

1,6 mil têm o celular roubado ou furtado e, com ele, o acesso a contas bancárias, senhas e documentos pessoais.

Esse é o retrato de um novo tipo de crime, considerado discreto, silencioso e devastador. Ao contrário de 
um assalto à mão armada, esses golpes acontecem na tela do celular, no horário de almoço, durante uma 
conversa com o atendente falso de um banco. E, na maioria das vezes, o prejuízo só é percebido tarde demais.


Tal sofisticação faz com que as vítimas demorem a entender que foram enganadas, o que dá ainda mais 
tempo para os golpistas agirem. E como muitos desses crimes acontecem por meio de dados vazados ou 
obtidos em redes sociais, qualquer informação pública pode se transformar em munição nas mãos erradas.

O que fazer?

Diante desse cenário, a informação é a melhor defesa. Estar atendo a mensagens suspeitas, evitar clicar 
em links desconhecidos e desconfiar de cobranças inesperadas são atitudes simples que podem evitar 
grandes prejuízos. Também é essencial verificar a autenticidade de sites, aplicativos e números de telefone.


A transformação digital pode até mesmo ser irreversível, mas a segurança precisa caminhar junto. Ficar 
de olho nos golpes é mais do que uma simples precaução: é uma necessidade."
),
("/images/noticia13.png"
,
"Número de golpes contra pessoas idosas cresce mais de 70% em 2023"
,
"O Disque 100, do governo federal, registrou, nos cinco primeiros meses do ano mais de 15 mil denúncias de 
violações financeiras ou materiais contra idosos. Por Jornal Nacional 03/07/2023 20h41 Atualizado há 2 anos
Número de golpes contra pessoas idosas cresce mais de 70% em 2023"
,
"Dados oficiais do governo mostram que o número de golpes contra pessoas idosas cresceu mais de 70% 
no país em 2023 em relação a 2022.


Do outro lado da linha, o aposentado podia jurar que estava o banco. Mas os criminosos tinham 
mascarado o número da central de atendimento.


Eles tinham todas as informações. Não sei como, mas foram pegando, e eu tinha 
certeza que estava sendo orientado por funcionário do banco. Era pessoa técnica, 
era pessoa que conhecia o problema, conta uma vítima.

Jovens lideram estatísticas de vítimas

Aos 64 anos, ele se tornou mais uma vítima dos golpes financeiros. O Disque 100, do governo federal, 
registrou, nos cinco primeiros meses de 2023 mais de 15 mil denúncias de violações financeiras ou 
materiais contra idosos; 73% a mais do que no mesmo período de 2022. Com o avanço tecnológico, os 
mais vividos se tornaram ainda mais vulneráveis.


Esse número de denúncias pode até ser maior, dado o constrangimento, a vergonha 
que muitas pessoas idosas têm porque passaram por uma situação constrangedora e 
violenta contra si mesma, afirma Alexandre da Silva, secretário nacional dos 
Direitos da Pessoa Idosa do Ministério dos Direitos Humanos e da Cidadania.

Muitas vezes, quem cai em um golpe não sabe bem o que fazer. Um dos caminhos é procurar grupos de 
proteção aos idosos, associações. O Sindicato Nacional dos Aposentados já recebeu, em 2023, mais de 
800 vítimas de golpes financeiros. Brasileiros que buscavam orientações e até assistência jurídica para 
tentar encontrar uma saída.

golpe do empréstimo consignado: realização de empréstimo com o uso de dados roubados e solicitação 
de foto para validar a transação;

golpe da falsa central de atendimento: confirmação de dados e transação mediação ao fornecimento de 
senha;

golpe da validação de dados: senha de acesso ao PIX, atualização de dados cadastrais, alertas de contas 
bloqueadas, validação de dados para acesso a senhas e realização de operações como saques, 
empréstimos e transferências.

Os institutos de defesa do consumidor alertam para o golpe do empréstimo, que o criminoso faz usando 
dados roubados da vítima. O golpe da falsa central de atendimento, quando os bandidos conseguem a 
confirmação de informações pessoais, e ainda o golpe da validação de dados, em que o cliente atualiza o 
cadastro.

Ligar para os telefones oficiais da instituição financeira pode ajudar a escapar de armadilhas.

Buscar ele mesmo, através de um outro telefone, pegar ali, ligar, ligar para o 
telefone, aquele mesmo telefone que ele tem no cartão do banco, ele faz a ligação. 
Pedir ajuda a um conhecido, pessoas de confiança que possa te dar subsídio para 
você fazer o contato com a instituição que está buscando alguma atualização ou se 
for um golpe, simplesmente apagar as mensagens sem baixar, sem entrar em link, 
sem nenhuma informação que possa comprometê-lo, explica Ione Amorim, 
coordenadora do Programa de Serviços Financeiros do Idec."
,
"O aposentado enganado ficou sem a poupança construída com sacrifício e ainda paga um empréstimo 
que nunca fez. Ele registrou boletim de ocorrência e tenta resolver a situação na Justiça: R$ 135 mil de 
prejuízo financeiro  e outros incalculáveis.

A pessoa cai mesmo, são pessoas habilitadas. Sabe, são pessoas habilitadas. É muito difícil, lamenta 
uma vítima.

Golpes a cada segundo

A dimensão do problema impressiona: segundo o Fórum Brasileiro de Segurança Pública, quase 8 mil 
brasileiros são vítimas de golpes digitais a cada hora. Isso inclui desde quem paga por um produto e não 
recebe, até quem tem o celular furtado e as contas invadidas em minutos.


A variedade de fraudes é tão grande quanto a criatividade dos criminosos. Aplicativos de mensagens 
como WhatsApp e Telegram se tornaram terrenos férteis para falsas cobranças, links maliciosos e 
tentativas de se passar por amigos, parentes ou empresas conhecidas. Em um só dia, milhares de 
brasileiros recebe mensagens com boletos falsos, pedidos de transferência por Pix e até comunicações 
falsas se passando por instituições financeiras.


Dos 8 mil brasileiros vítimas de golpes a cada hora, o Fórum Brasileiro de Segurança Pública ainda 
informa que:


4,6 mil pessoas são alvos de tentativas de golpe via mensagens ou ligações;

2,5 mil compram pela internet e não recebem o produto;

1,6 mil têm o celular roubado ou furtado e, com ele, o acesso a contas bancárias, senhas e documentos 
pessoais.

Esse é o retrato de um novo tipo de crime, considerado discreto, silencioso e devastador. Ao contrário de 
um assalto à mão armada, esses golpes acontecem na tela do celular, no horário de almoço, durante uma 
conversa com o atendente falso de um banco. E, na maioria das vezes, o prejuízo só é percebido tarde 
demais.


Tal sofisticação faz com que as vítimas demorem a entender que foram enganadas, o que dá ainda mais 
tempo para os golpistas agirem. E como muitos desses crimes acontecem por meio de dados vazados ou 
obtidos em redes sociais, qualquer informação pública pode se transformar em munição nas mãos 
erradas.

O que fazer?

Diante desse cenário, a informação é a melhor defesa. Estar atendo a mensagens suspeitas, evitar clicar 
em links desconhecidos e desconfiar de cobranças inesperadas são atitudes simples que podem evitar 
grandes prejuízos. Também é essencial verificar a autenticidade de sites, aplicativos e números de 
telefone.


A transformação digital pode até mesmo ser irreversível, mas a segurança precisa caminhar junto. Ficar 
de olho nos golpes é mais do que uma simples precaução: é uma necessidade."
),
("/images/noticia14.png"
,
"Idosa cai em golpe após acreditar que era namorada do empresário Elon Musk, diz polícia"
,
"Ela estava comprando diversos cartões de crédito quando a atitude levantou suspeita. Confira orientações de 
como se proteger para não cair em golpes. Por Amanda Bebiano, g1 PR 24/09/2024 13h46 Atualizado há um ano
Número de golpes contra pessoas idosas cresce mais de 70% em 2023"
,
"A Polícia Militar de Toledo, no oeste do Paraná, foi chamada em uma loja no final da tarde desta 
segunda feira (23) após a atitude de uma idosa de 79 anos chamar a atenção. De acordo com o delegado 
do caso, Rodrigo Batista, a mulher estava comprando diversos cartões de crédito da Apple.


Para a polícia, a mulher disse que os cartões seriam para o namorado dela, Elon Musk, que ela acreditava 
ser dono da Apple. Na verdade, a empresa foi fundada por Steve Jobs. Elon Musk é dono de companhias 	
como a rede social X (antigo Twitter), a espacial SpaceX e a automotiva Tesla.


Ela acreditava estar namorando com o empresário Elon Musk, o qual pedia para 
que ela comprasse os cartões da sua empresa e, posteriormente, ele viria até o 
Brasil e lhe traria uma quantidade de dólares, explicou o delegado.

À polícia, a mulher relatou que gastou cerca de R$ 4 mil em cartões e enviava fotos dos objetos para o 
suposto namorado.


Verificando o celular da vítima, a polícia identificou que se tratava de um telefone celular com código 
internacional da Nigéria.


Os policiais entraram em contato com o irmão da idosa, que esteve no local para buscá-la.


A Polícia Civil está investigando o caso e procura identificar o golpista."
,
"Dicas contra golpes

Neste ano, o Ministério dos Direitos Humanos e da Cidadania (MDH) lançou uma cartilha listando os 
principais golpes contra idosos registrados no Brasil. Entre eles, está o golpe do falso namoro pela 
internet.


Golpistas se aproximam de idosos demonstrando interesse e após o envolvimento emocional, começam a 
pedir dinheiro.


Nestes casos, a orientação do Ministério é que, ao suspeitar que está sendo alvo de um golpe, a vítima 
não hesite em falar com amigos, familiares, autoridades e pedir orientação para resolver a situação de 
forma segura.


De acordo com Batista, familiares também podem evitar que idosos caiam em golpes.


A gente frisa a importância dos familiares estarem atentos às redes sociais das pessoas mais idosas da 
família para que evitem cair em golpes, tendo em vista que o público-alvo de idosos é preferencial entre 
criminosos, disse."
),
("/images/noticia15.png"
,
"Idoso é alvo fácil de invasores na internet"
,
"Comportamento despreocupado de internautas de mais de 60 anos com segurança digital atrai fraudadores
Número de golpes contra pessoas idosas cresce mais de 70% em 2023"
,
"Estar na terceira idade não é um impeditivo para a acessar a internet. Há dez anos, 4% dos idosos no País 
acessavam a rede, número que cresceu para 20% no último levantamento do Comitê Gestor da Internet 
(CGI). Em redes sociais como o Facebook, perfis de brasileiros acima dos 60 anos que acessam a 
plataforma passam dos 4 milhões em um universo de 117 milhões de usuários no País. Cada vez mais 
conectada, essa faixa etária também está exposta aos riscos do ambiente virtual.


Idosos são considerados alvos fáceis de crimes cibernéticos, mostra um levantamento global da 
fabricante de softwares de segurança Kaspersky. O fraudador, quando vai fazer o ataque, mira a todos, 
mas quando vê que a pessoa já tem alguma idade, costuma aperfeiçoar golpes, afirma o pesquisador 
sênior de Segurança Digital da Kaspersky, Fábio Assolini. Por não ter muito conhecimento de segurança 
ou fraudes na web, esse internauta não sabe distinguir a fraude de algo legítimo, explica.


A pesquisa, realizada com 12 mil usuários em 21 países, incluindo o Brasil, revelou que apenas 33% dos 
internautas acima dos 55 anos têm ciência de que pode estar sendo espionado pela webcam sem 
consentir. Além disso, apenas 25% dos usuários mais velhos desconfiam em compartilhar sua 
localização, comparado com 39% na média de todas as faixas de idade.


O passatempo predileto dos idosos na internet é o relacionamento com familiares (62,9%) e amigos 
(59,8%), conforme pesquisa realizada pelo Serviço de Proteção ao Crédito (SPC Brasil) e pela 
Confederação Nacional de Dirigentes Lojistas (CNDL), em outubro de 2016. Outra motivação para o uso 
da internet por pessoas acima de 60 anos é a busca por notícias sobre economia, política, esportes e moda 
(47,8%) e informações sobre produtos e serviços (43,0%). Ainda de acordo com o levantamento, dois em 
cada dez idosos (19,1%) fazem compras online. Eletroeletrônicos, eletrodomésticos e viagens são os 
itens mais adquiridos.


Novas soluções de segurança, como a autenticação em duas etapas  quando um código é enviado para o 
celular do usuário  devem ser adotadas. Entretanto, é preciso se informar bem sobre elas. Aí, entra a 
ajuda dos parentes ou um trabalho de educação feito por pessoas próximas, para que esse idoso não seja 
vítima de fraude.


Programas de proteção, como antivírus, são fundamentais. O software ideal vai depender da 
familiaridade que o usuário tem com a internet. Pessoas mais experientes com a rede, que sabem 
reconhecer uma fraude, podem optar por programas mais simples e menos intrusivos. Para quem tem 
pouca familiaridade, o ideal é ter a melhor solução de segurança possível, com todos os recursos 
ativados."
,
"Manual básico de proteção online para o idoso

1.Peça ajuda aos seus parentes e escolha empresas de confiança

Sempre há aquele parente que tem mais desenvoltura com a internet. Entre em contato com ele quando 
tiver dúvidas sobre como proceder. Caso isso não seja possível, acesse os canais oficiais de suporte do 
site acessado, mas tenha cuidado ao revelar dados pessoais, como nome, números de telefone, 
informações de contas bancárias e senhas de e-mail aos atendentes.

2.Conheça bem os controles de privacidad

Redes sociais como o Facebook têm diversos controle de privacidade. Leia sobre o assunto nos termos 
de uso e também peça ajuda a alguém da família para entender como isso funciona. Por 
desconhecimento, muitos idosos compartilham publicamente informações pessoais, sem se dar conta. 
Tenha em mente que pode ser muito difícil deletar uma foto ou informação da rede depois que ela cair 
em domínio público.

3.Não descuide do celular

Atualmente os smartphones reúnem grande quantidade de informações pessoais, incluindo números de 
cartão de crédito associados a lojas de aplicativos, como a Play Store, no caso dos celulares com sistema 
operacional Android, ou Apple Store, para quem tem iPhone. É importante ter senhas de travamento da 
tela e tomar cuidado para não deixar o aparelho solto por aí. As pessoas, às vezes, se esquecem que nele 
estão contidos mais do que emails e contatos.

4.Desconfie de mensagens e promoções

Alguns idosos tendem a confiar excessivamente em pessoas ou não identificam mensagens estranhas. 
Seja cuidadoso ao clicar em links e veja quem os enviou. Na dúvida, o melhor é segurar a curiosidade e 
não clicar. Tenha um pé atrás com preços muito baixos e promoções que pareçam boas demais para ser
verdade. Podem ser conteúdos maliciosos, que disparem vírus.

5. Se proteja contra vírus

Vírus podem infectar seu dispositivo sem aviso. Alguns vão registrando todas as teclas que você digita 
em busca de senhas. Outros podem executar tarefas em segundo plano, transformando seu computador 
em um zumbi. Pesquise sobre programas que podem ser usados para proteger seus arquivos.

6.Saiba quem está vendendo

As lojas online mais seguras costumam apresentar um selo de confiabilidade no final do site, emitido por 
rankings de compras online, como o Ebit, que avalia 22 mil lojas no Brasil. Já nos sites onde os 
vendedores são pessoas físicas é possível ver o que os compradores comentaram, o que cria um ranking 
de reputação. Alguns deles também oferecem um seguro, por um valor extra, que pode ser acionado se o 
produto não for entregue. No caso de empresas desconhecidas, é possível pesquisar em fóruns de 
reclamações de consumidores, como o Reclame Aqui. Caso precise de ajuda especializada, entre em 
contato com o Procon da sua região.

7.Fique atento ao cartão de crédito

Cartões de crédito são o principal meio de pagamento online. As instituições bancárias oferecem serviços 
como o monitoramento de todas as movimentações por meio do celular. Há também a opção de usar um 
cartão espelho, com numeração diferente, a apenas para transações online. A vantagem é que, em caso de 
fraude, não é preciso bloquear o cartão original. Desconfie de lançamentos na fatura de valores que você 
não reconhece, mesmo que pequenos, e logo ligue para a central de atendimento do cartão avisando."
);

insert into depoimentos (url, imagem, titulo, depoimento)
values

("/depoimento1", "images/depoimento1.png", "José Carlos, 72 anos", "Gostei muito das aulas sobre fake news. Antes eu acreditava em tudo que recebia no grupo da família, mas agora aprendi a verificar as informações. Me sinto mais segura e informada."),
("/depoimento2", "images/depoimento2.png", "Maria Aparecida, 68 anos", "Eu nunca fui muito amiga da tecnologia, mas o Conectando Gerações me ajudou a perder o medo do computador. Agora sei usar o WhatsApp, assistir vídeos e até fazer chamadas de vídeo com meus netos."),
("/depoimento3", "images/depoimento3.png", "Dona Helena, 70 anos", "O site é uma bênção! Ensina com calma, tem vídeos curtos e diretos. Consegui até ajudar uma vizinha a criar o e-mail dela. Estou adorando aprender algo novo nessa idade."),
("/depoimento4", "images/depoimento4.png", "Arnaldo, 74 anos", "Eu entrei só para aprender a mexer no celular, mas acabei descobrindo um mundo novo. As dicas de segurança digital foram muito úteis. Hoje navego na internet com mais confiança."),
("/depimento5", "images/depoimento5.jpg", "Elza, 71 anos", "Gostei bastante dos conteúdos, mas achei que alguns vídeos poderiam ter legendas. Às vezes é difícil escutar bem, especialmente de dia por conta do barulho. Fora isso, é tudo excelente."),
("/depoimento6", "images/depoimento6.png", "Carlos Alberto, 75 anos", "O curso é muito bom e me ajudou muito, mas senti falta de um suporte por telefone. Nem sempre consigo mandar mensagem pelo site quando tenho dúvida. Ainda assim, recomendo fortemente.");


CREATE TABLE tb_loginadm (
  id_loginadm INT PRIMARY KEY AUTO_INCREMENT,
  usuario VARCHAR(200),
  senha VARCHAR(200)
);

INSERT INTO tb_loginadm (usuario, senha)
VALUES ('adm', 'adm');