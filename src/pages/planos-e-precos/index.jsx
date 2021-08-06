import React from 'react'
import { useRouter } from 'next/router'
import { Button } from '../../components/Button'

const Princing = () => {
  const router = useRouter()
  return (
    <section>
      <div class="container">
        <div class="row mb-5 justify-content-center text-center">
          <div class="col-lg-8 col-md-10">
            <h2 class="mt-4">Simples e prático</h2>
            <div class="mt-2">
              <p class="lead lh-180">
                Comece a utilizar os serviços do Descript hoje mesmo, escolhendo um de nossos planos abaixo.
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md">
            <div class="card card-pricing text-center px-3 shadow hover-scale-110">
              <div class="card-header py-5 border-0 delimiter-bottom">
                <div class="h1 text-center mb-0">Plano Básico</div>
                <span class="h6 text-muted">R$ 9.999,00 por descrição</span>
              </div>
              <div class="card-body">
                <ul class="list-unstyled text-sm mb-4">
                  <li>10 Descrições</li>
                  <li>Total: 99.999,99</li>
                  <li>R$ 80 por imagem extra</li>
                  <li>Oficina EaD uso de descrição em redes sociais</li>
                  <li>Oficina ao vivo de Produção de Conteúdo Acessível</li>
                  <li>Apresentação de Onboarding</li>
                  <li>Suporte Técnico</li>
                </ul>
                <a
                  onClick={() => router.push('/cadastrar')}
                  class="btn btn-sm btn-warning hover-translate-y-n3 hover-shadow-lg mb-3"
                >
                  Compre Agora
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md">
            <div class="card card-pricing bg-primary text-center px-3 shadow hover-scale-110">
              <div class="card-header py-5 border-0 delimiter-bottom">
                <div class="h1 text-white text-center mb-0">Plano Padrão</div>
                <span class="h6 text-white">R$ 9.999,00 por descrição</span>
              </div>
              <div class="card-body">
                <ul class="list-unstyled text-white text-sm opacity-8 mb-4">
                  <li>30 Descrições</li>
                  <li>Total: 99.999,99</li>
                  <li>R$ 75 por imagem extra</li>
                  <li>Oficina EaD uso de descrição em redes sociais</li>
                  <li>Oficina ao vivo de Produção de Conteúdo Acessível</li>
                  <li>Apresentação de Onboarding</li>
                  <li>Suporte Técnico</li>
                  <li>Palestra sobre Cultura da Acessibilidade</li>
                </ul>
                <a
                  onClick={() => router.push('/cadastrar')}
                  class="btn btn-sm btn-white hover-translate-y-n3 hover-shadow-lg mb-3"
                >
                  Compre agora
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md">
            <div class="card card-pricing text-center px-3 shadow hover-scale-110">
              <div class="card-header py-5 border-0 delimiter-bottom">
                <div class="h1 text-center mb-0">Plano Pro</div>
                <span class="h6 text-muted">R$ 9.999,00 por descrição</span>
              </div>
              <div class="card-body">
                <ul class="list-unstyled text-muted text-sm opacity-8 mb-4">
                  <li>50 Descrições</li>
                  <li>Total: 99.999,99</li>
                  <li>R$ 65 por imagem extra</li>
                  <li>Oficina EaD uso de descrição em redes sociais</li>
                  <li>Oficina ao vivo de Produção de Conteúdo Acessível</li>
                  <li>Apresentação de Onboarding</li>
                  <li>Suporte Técnico</li>
                  <li>Atendimento exclusivo</li>
                  <li>API de integração</li>
                </ul>
                <a
                  onClick={() => router.push('/cadastrar')}
                  class="btn btn-sm btn-white hover-translate-y-n3 hover-shadow-lg mb-3"
                >
                  Compre agora
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 text-center">
          <p class="mb-2">Precisa de ajuda para escolher o seu plano?</p>
          <Button>Entre em contato</Button>
        </div>
      </div>
    </section>
  )
}

export default Princing
