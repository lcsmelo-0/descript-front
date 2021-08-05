import React from 'react'
import Accordion from 'react-bootstrap/Accordion'

import './faq.css'

const Faq = () => {
  const faqData = [
    {
      header: 'Qual plano é adequado para mim?',
      content:
        'Nossos planos foram criados com a quantidade de descrições disponíveis pensando em atender desde os pequenos produtores de conteúdo até as maiores empresas do mundo. Basta escolher de acordo com a sua necessidade.',
    },
    {
      header: 'Quanto custa o Descript?',
      content:
        'Nossos preços são definidos pelo número de descrições de cada plano e de acordo com o período da assinatura: mensal ou anual. Veja a página de planos e preços para maiores informações.',
    },
    {
      header: 'O que é descrição de imagem?',
      content:
        'Descrição de imagem é a tradução de uma imagem para texto. Ou seja, um recurso que permite que pessoas cegas tenham acesso a conteúdos visuais a partir de leitores de tela (que irão transformar a descrição de texto em voz) ou em uma gravação em áudio da descrição.',
    },
    {
      header: 'Posso alterar o meu plano?',
      content:
        'Sim, você pode fazer alterações nos planos a qualquer momento, mudando o tipo de plano, a forma de faturamento ou a periodicidade de cobrança.',
    },
    {
      header: 'O que eu faço se usar todas as minhas descrições e precisar de mais?',
      content:
        'Dentro do nosso painel de controle é possível adquirir descrições extras para atender às suas necessidades. Além disso, você pode optar a qualquer momento por fazer o upgrade do seu plano para outro que disponibilize mais imagens.',
    },
    {
      header: 'O Descript é seguro?',
      content:
        'A segurança dos dados dos nossos clientes é nossa maior prioridade. Nosso sistema foi desenvolvido com rigorosos critérios e requisitos de segurança e protocolos para proteger os seus dados.',
    },
    {
      header: 'Quais os métodos de pagamento que vocês aceitam?',
      content:
        'Nós aceitamos cartões de crédito e boleto bancário, as duas maneiras mais utilizadas no Brasil. Caso você necessite de outra forma de pagamento entre em contato conosco que vamos tentar atendê-lo da melhor maneira possível.',
    },
    {
      header: 'Se o Facebook e Instagram têm descrição automática de imagem, por que eu devo usar o Descript?',
      content:
        'A tecnologia de identificação de imagens para a criação de descrições automáticas ainda não está evoluída o suficiente para gerar textos precisos que cumpram com eficiência o propósito da descrição de imagens.',
    },
    {
      header: 'Como usar a #PraCegoVer?',
      content:
        'A hashtag #PraCegoVer foi criada pela professora Patrícia Braille para facilitar a identificação de post nas redes sociais que tivessem descrição de imagem, e também para impactar positivamente as pessoas sobre a necessidade da descrição. Você pode utilizar o #PraCegoVer acompanhada da descrição de imagem logo após a legenda dos seus posts.',
    },
    {
      header: 'Como coloco a descrição no texto alternativo do Facebook?',
      content:
        'Ao criar uma publicação com imagem no Facebook, clique no botão “Editar”, sobre a imagem, “Texto alternativo”, insira a descrição na caixa de texto e clique em “Salvar”.',
    },
    {
      header: 'Como coloco a descrição no texto alternativo do Instagram?',
      content:
        'Ao criar uma publicação, vá em “Configurações avançadas” e depois “Escrever texto alternativo” e insira a descrição na caixa de texto.',
    },
    {
      header: 'Como coloco a descrição no texto alternativo no meu site Wordpress?',
      content:
        'Ao fazer o upload de uma imagem em seu site Wordpress você terá a opção de adicionar um Texto Alternativo.',
    },
  ]

  const _handleFaqData = () =>
    faqData.map((item, key) => (
      <Accordion.Item key={key} eventKey={key}>
        <Accordion.Header>{item.header}</Accordion.Header>
        <Accordion.Body>{item.content}</Accordion.Body>
      </Accordion.Item>
    ))
  return (
    <div className="container">
      <h1 className="faq-title">Perguntas frequentes</h1>
      <Accordion defaultActiveKey="0">{_handleFaqData()}</Accordion>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfRGqP-MABVcK41THlZkDOpFFXK43UTJ5zI-927Ss357dzM5Q/viewform?embedded=true"
        width="640"
        height="939"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title="iframe"
      >
        Carregando…
      </iframe>
    </div>
  )
}

export default Faq
