import './cursos.scss'
import CardCurso from '../components/CardCurso/cardCurso.jsx'
import Cabecalho from '../components/cabecalho/cabecalho.jsx'
import Rodape from '../components/rodape/rodape.jsx'

export default function Cursos() 
{
    return(
    <div className='Container-Curso'>

        <Cabecalho />

        <div className='cursos'>

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427433048684625951/pexels-marcus-aurelius-6787970.jpg?ex=68f6185f&is=68f4c6df&hm=363c5a03e5aaec993c3d868db11008a6a99432175dd33bfbcdb5a18a59d83720&=&format=webp&width=290&height=200'
        titulo='Internet Segura'
        duracao=' 20min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar como indentificar mensagens suspeitas'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427431573682126960/pexels-leeloothefirst-8938664.jpg?ex=68f616ff&is=68f4c57f&hm=7cbfd352a9cdb03b3e15b61d913cd9488984127ff3b87180290cabdc1b633a27&=&format=webp&width=340&height=200'
        titulo='Compras Online de Forma Segura'
        duracao=' 10min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar como evitar fraudes e compras impulsivas'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427427994791710811/freepik__3-pagamentos-e-bancos-digitaisuse-um-velhinho-mexe__28299.jpg?ex=68f613aa&is=68f4c22a&hm=2ff02d5fcd59ab810012bde094666216863b1239afa4a968acc6c074bcaad43c&=&format=webp&width=290&height=200'
        titulo='Bancos Digitais'
        duracao=' 30min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar a navegar de modo segura no seu Banco'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427422250562490511/freepik__organizao-digital-como-usar-a-nuvem-fotos__28425.jpg?ex=68f60e50&is=68f4bcd0&hm=0fd6d06c1ecbadebe3cba0f4b01843b911ab9f28270cd6bc9e0fee29f7ce4052&=&format=webp&width=290&height=180'
        titulo='Organização Digital'
        duracao=' 40min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar a Armazenar documentos e fotos com segurança'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427423864471818270/freepik__criando-e-usando-email-etc-com-uma-pessoa-no-compu__3443.jpg?ex=68f60fd1&is=68f4be51&hm=88c1442b24ff7bbfcc88bd9b9dcc559c2439fdaa6dbb7ada7efbe56dd4bdd9f0&=&format=webp&width=290&height=180'
        titulo='Criando e Usando E-mail'
        duracao=' 15min'
        tema='Fake News'
        descricao='Nesse Curso vamos te ensinar a Criar uma conta e usar o E-mail'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427435100961767575/pexels-sanketgraphy-16125027.jpg?ex=68f61a48&is=68f4c8c8&hm=3da70e0d6223ad388571331aca720119c9a4fbc8da185f36806e1243b3e7933f&=&format=webp&width=290&height=180'
        titulo='Introdução a Inteligência Artificial'
        duracao=' 27min'
        tema='Inteligência Artificial'
        descricao='Nesse Curso vamos te ensinar a Usar a Inteligencia Artificial com o ChatGPT'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427435443976405124/pexels-rdne-6517328.jpg?ex=68f61a9a&is=68f4c91a&hm=c7a3f7d2c4ad47752f2008bb81d7ca613808fee9cbc823965fd63b00a7571642&=&format=webp&width=290&height=160'
        titulo='Educação Financeira Digital '
        duracao=' 55min'
        tema='Educação Financeira'
        descricao='Nesse Curso vamos te dar dicas de como controlar seus gastos e evitar fraudes'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427435734071250975/pexels-vladbagacian-3987066.jpg?ex=68f61adf&is=68f4c95f&hm=5e24d52cee662b7fc512363976416f7139dba912bd766c0b1e83dc800a02797f&=&format=webp&width=290&height=200'
        titulo='Proteção de Senhas'
        duracao=' 23min'
        tema='Senhas Seguras'
        descricao='Nesse Curso vamos te ensinar a Criar uma Senha Forte.'
        nivel='Nivel: Básico'
        />

        <CardCurso 
        imagem='https://media.discordapp.net/attachments/1334856753921261612/1427436433236557895/pexels-nicola-barts-7925881.jpg?ex=68f61b86&is=68f4ca06&hm=c8081332a82f00bcb71fbd2aa967d4f0766de74d3913bd1d5aa30feac5dfaa88&=&format=webp&width=290&height=160'
        titulo='Golpe po E-mail (Phishing)'
        duracao=' 30min'
        tema='Golpes (Phishing)'
        descricao='Nesse Curso vamos te ensinar a como Reconhecer E-mail Falsos e o Que Fazer'
        nivel='Nivel: Básico'
        />
        </div>

        <Rodape />

    </div>
    )
}