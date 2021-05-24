import { Container } from './ResponsiveFallback.style'

export const ResponsiveFallback: React.FC = () => (
  <Container>
    <img src="/logo.png" alt="Tormenta20 Logo" />
    <h2>eita! :(</h2>
    <p>
      Essa aplicação foi desenvolvida para funcionar apenas em telas maiores.
    </p>
    <p>
      <b>Talvez</b> no futuro seja adicionado responsividade. Por enquanto é
      recomendado usar um dispositivo com tela maior do que a de um celular. Se
      você estiver no computador e mesmo assim não consegue ver a página, tente
      ajustar o zoom.
    </p>
    <p>
      Qualquer dúvida ou sugestão em relação a isso ou outro assunto relacionado
      a essa aplicação, pode mandar uma issue&nbsp;
      <a href="https://github.com/bolognini/helladarion-form/issues/new">
        aqui
      </a>
      . Obrigado!
    </p>
  </Container>
)
