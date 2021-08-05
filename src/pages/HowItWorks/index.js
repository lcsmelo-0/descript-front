import React from 'react'
import { Container } from 'reactstrap'
import img1 from '../../assets/img/undraw_Location_search_re_ttoj.svg'

import './howItWorks.css'

const HowItWorks = () => {
  const icons = [
    { text: 'Banners', icon: 'fas fa-ad', color: '#ffcb00' },
    { text: 'Aplicativos', icon: 'fab fa-android', color: '#fb275d' },
    { text: 'Marcas', icon: 'far fa-copyright', color: '#fdab3d' },
    { text: 'Materiais Didáticos', icon: 'far fa-file-pdf', color: '#037f4c' },
    { text: 'Email Marketing', icon: 'far fa-paper-plane', color: '#00ca72' },
    { text: 'Reuniões', icon: 'far fa-calendar-check', color: '#ff158a' },
    { text: 'Apresentações', icon: 'fas fa-file-powerpoint', color: '#ff158a' },
    { text: 'Cursos', icon: 'fas fa-chalkboard-teacher', color: '#cab641' },
    { text: 'Redes Sociais', icon: 'fab fa-facebook', color: '#784bd1' },
    { text: 'Lojas Online', icon: 'fas fa-store', color: '#ff642e' },
    { text: 'eBooks', icon: 'fas fa-book', color: '#a358df' },
    { text: 'E-commerces', icon: 'fab fa-cc-mastercard', color: '#66ccff' },
    { text: 'Sites', icon: 'fas fa-photo-video', color: '#9cd326' },
    { text: 'Landing Pages', icon: 'fas fa-rocket', color: '#595ad4' },
  ]

  const _handleIcons = () =>
    icons.map((item, key) => (
      <div key={key} className="iconContainer">
        <div style={{ backgroundColor: item.color }}>
          <i className={item.icon} />
        </div>
        <p>{item.text}</p>
      </div>
    ))

  return (
    <section className="slice slice-lg howItWorks">
      <Container>
        <h1>Como funciona</h1>
        <div className={'howItWorks__line'}>
          <div className="howItWorks__line__text">
            <h2>
              Receba descrições de imagens profissionais <span>.</span>
            </h2>
            <p>
              Descript é uma plataforma descrição de imagem que automatiza o fluxo de trabalho entre clientes,
              profissionais de descrição de imagem e consultores de revisão, agilizando o processo e garantindo uma
              entrega profissional e eficiente.
            </p>
          </div>
          <div>
            <img src={img1} alt="place holder" />
          </div>
        </div>

        <div className={'howItWorks__centerLine'}>
          <h2>Você só precisa mandar as suas imagens</h2>
          <p>
            Assim que as imagens entram em nosso sistema, elas são direcionadas automaticamente para profissionais
            especialistas que farão as descrições.
          </p>
          <img src={img1} alt="" />
        </div>

        <div className={'howItWorks__line'}>
          <div className="howItWorks__line__text">
            <h2>Processo automatizado (porém humano)</h2>
            <p>
              Todas as descrições são feitas por profissionais em descrição de imagem e revisadas por consultores cegos
              especialistas. Isso garante a qualidade e eficiência das nossas descrições.
            </p>
          </div>
          <div>
            <img src={img1} alt="" />
          </div>
        </div>

        <div className={'howItWorks__centerLine'}>
          <h2>Gerencie as suas descrições rapidamente</h2>
          <p>No nosso painel principal você pode gerenciar todos os trabalhos realizados na plataforma.</p>
        </div>

        <div className={'howItWorks__line'}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div className="howItWorks__line__text">
            <h2>Não deixamos você na mão</h2>
            <p>
              Os nossos planos foram pensados para atender a empresas e agências de todos os tamanhos. E não se
              preocupe, pois dentro da nossa plataforma você sempre pode adquirir descrições extras para atender a
              projetos específicos ou fazer o upgrade para ter mais descrições mensais e aumentar ainda mais as suas
              possibilidades de acessibilidade.
            </p>
          </div>
        </div>
        <div className="howItWorks__centerLine">
          <h2>Você pode deixar tudo mais acessível com Descript</h2>
          <div className="icons">{_handleIcons()}</div>
        </div>

        <div className="howItWorks__twoColumns">
          <div>
            <h2>Descript está em constante desenvolvimento</h2>
            <p>
              Estamos pensando e trabalhando em novas ferramentas e funcionalidades todos os dias, para deixar a nossa
              plataforma cada vez melhor.
            </p>
          </div>
          <div>
            <h2>Integração com o seu site</h2>
            <p>
              Utilize a nossa API para integrar o seu site com a nossa plataforma, assim receberemos automaticamente as
              novas imagens que você utilizar e te enviaremos as descrições profissionais.
            </p>
          </div>
        </div>

        <div className="howItWorks__centerLine">
          <h2>Assine o Descript e comece a fazer conteúdos mais acessíveis</h2>
          <button>
            Começe já{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="feather feather-arrow-right ml-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks
