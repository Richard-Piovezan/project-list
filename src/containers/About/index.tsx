import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <>
    <section>
      <Title fontSize={16}>About Me</Title>
      <Paragraph type="main">
        Aos 22 anos cursando Análise e Desenvolvimento de Sistemas na Estácio,
        paralelamente me especializando em FullStack pela Escola Britânica de
        Artes Criativas & Tecnologia. Afim de dominar as principais tecnologias
        de desenvolvimento, sempre viso a versatilidade na resolução de
        problemas e na implementação de novos sistemas.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=richard-piovezan&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=richard-piovezan&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  </>
)

export default About
