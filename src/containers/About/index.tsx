import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { GithubSection } from './styles'

const About = () => (
  <>
    <section>
      <Title fontSize={16}>About Me</Title>
      <Paragraph type="main">
        At the age of 22, I am studying Systems Analysis and Development at
        Estácio, while also specializing in FullStack at the Escola Britânica de
        Artes Criativas & Tecnologia. In order to master the main development
        technologies, I always aim for versatility in problem-solving and
        implementing new systems.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=richard-piovezan&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=richard-piovezan&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </section>
  </>
)

export default About
