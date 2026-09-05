import { useState } from 'react'
import fazendaImg from '../assets/imgs/fazenda.png'

function FaleConosco() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const nomeTrim = nome.trim()
    const emailTrim = email.trim()
    const mensagemTrim = mensagem.trim()

    const partesNome = nomeTrim.split(' ').filter((parte) => parte.length > 0)
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrim)

    if (nomeTrim === '') {
      alert('O campo Nome completo não pode ficar em branco.')
      return
    }
    if (partesNome.length < 2) {
      alert('Digite seu nome completo, com nome e sobrenome.')
      return
    }
    if (partesNome[0].length < 2 || partesNome[1].length < 2) {
      alert('Nome e sobrenome devem ter pelo menos duas letras cada.')
      return
    }
    if (emailTrim === '') {
      alert('O campo E-mail não pode ficar em branco.')
      return
    }
    if (!emailValido) {
      alert('Digite um e-mail em formato válido.')
      return
    }
    if (mensagemTrim === '') {
      alert('O campo Descrição da mensagem não pode ficar em branco.')
      return
    }
    if (mensagemTrim.length > 500) {
      alert('A mensagem deve ter no máximo 500 caracteres.')
      return
    }

    alert('Mensagem enviada com sucesso!')
    setNome('')
    setEmail('')
    setMensagem('')
  }

  return (
    <>
      <main>
        <section className="contact-section">
          <div className="container">
            <h1 className="title">Fale Conosco</h1>

            <p className="subtitle">
              Tem alguma dúvida? Preencha o formulário abaixo e fale conosco.
            </p>

            <div className="row align-items-center">
              <div className="col-lg-5 contact-image text-center">
                <img src={fazendaImg} alt="Imagem de uma fazenda" />
              </div>

              <div className="col-lg-7">
                <form
                  className="contact-form"
                  id="contactForm"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    placeholder="Nome completo"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />

                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <textarea
                    className="form-control"
                    id="mensagem"
                    rows="5"
                    maxLength="500"
                    placeholder="Descrição da mensagem"
                    required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                  ></textarea>

                  <button type="submit" className="btn btn-send">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  )
}

export default FaleConosco