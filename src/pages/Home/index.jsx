import { Container, Row, Col } from 'reactstrap'

import computerGirl from '../../assets/img/illustration-1.svg'
import skateGuy from '../../assets/img/illustration-5.svg'
import boardCouple from '../../assets/img/illustration-6.svg'
import sportCouple from '../../assets/img/illustration-7.svg'

import './home.module.css'

const HomePage = () => {
  return (
    <>
      <section className="slice py-5 py-lg-7">
        <Container>
          <Row className="row row-grid align-items-center">
            <Col className="col-12 col-md-5 col-lg-6 order-md-2">
              <img alt="Img placeholder" src={computerGirl} className="img-fluid" />
            </Col>
            <Col className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
              <h1 className="display-4 text-center text-md-left mb-3">
                Crie publicações acessíveis com o <strong className="text-primary">Descript</strong>
              </h1>
              <h2 className="lead text-center text-md-left text-muted">
                Faça o upload de fotos e vídeos e receba a descrição profissional para publicar o seu conteúdo de forma
                acessível para todos.
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="slice py-5 py-lg-7 no-padding-top">
        <Container>
          <Row className="row row-grid align-items-center">
            <Col className="col-12 col-md-5 col-lg-6 order-md-2">
              <img alt="Img placeholder" src={computerGirl} className="img-fluid" />
            </Col>
            <Col className="col-12 col-md-7 col-lg-6 order-md-1 pr-md-5">
              <h2 className="display-4 text-center text-md-left mb-3">
                O que é o <strong className="text-primary">Descript?</strong>
              </h2>
              <p className="lead text-center text-md-left text-muted">
                Descript é um serviço de descrição de imagens por assinatura online. Nós criamos uma plataforma de
                tecnologia para agilizar e automatizar todos os processos de contratação, criação e aprovação de
                descrição de imagem, que são feitas pelos melhores profissionais do mercado. Nossos assinantes podem
                focar na criação de conteúdo e deixar a acessibilidade com a gente.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="slice slice-lg pt-lg-6 pb-0 pb-lg-6">
        <Container>
          <Row className="beneficios">
            <Col className="col-lg-5 text-lg-right">
              <p className="lh-180 mb-3 beneficios__texto">
                Com o Descript você conta com os melhores profissionais do mercado para deixar os conteúdos da sua
                equipe de criação acessíveis.
              </p>
            </Col>
            <Col className="col-lg-6">
              <h2 className="display-4 lh-130 beneficios__titulo">Os benefícios de utilizar o Descript</h2>
            </Col>
          </Row>
          <Row md="5">
            <Col md="4">
              <div className="card border-0 bg-soft-danger noMarginTop">
                <div className="card-body pb-5">
                  <div className="pt-4 pb-5">
                    <img
                      src={skateGuy}
                      className="img-fluid img-center"
                      style={{ height: '200px' }}
                      alt="Illustration"
                    />
                  </div>
                  <h3 className="h4 lh-130 text-dark mb-3">Aumentar o seu público potencial</h3>
                  <p className="text-dark opacity-6 mb-0">
                    Pessoas com deficiência acessam a internet e se os conteúdos das suas redes sociais e do seu site
                    forem acessíveis, elas serão impactadas.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="card border-0 bg-soft-success noMarginTop">
                <div className="card-body pb-5">
                  <div className="pt-4 pb-5">
                    <img
                      src={boardCouple}
                      className="img-fluid img-center"
                      style={{ height: '200px' }}
                      alt="Illustration"
                    />
                  </div>
                  <h3 className="h4 lh-130 text-dark mb-3">Melhore o SEO do seu site</h3>
                  <p className="text-dark opacity-6 mb-0">
                    Utilizar o texto alternativo de forma correta no seu site é uma boa prática que otimiza seu site em
                    mecanismos de busca como o Google.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="card border-0 bg-soft-warning mt-lg-7 noMarginTop">
                <div className="card-body pb-5">
                  <div className="pt-4 pb-5">
                    <img
                      src={sportCouple}
                      className="img-fluid img-center"
                      style={{ height: '200px' }}
                      alt="Illustration"
                    />
                  </div>
                  <h3 className="h4 lh-130 text-dark mb-3">Descrição profissional de imagem</h3>
                  <p className="text-dark opacity-6 mb-0">
                    Acessibilidade é importante para o sucesso dos seus negócios; acessibilidade feita profissionalmente
                    pode ser um diferencial.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HomePage
