import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import {
  ASide,
  Description,
  GithubUser,
  SidebarContainer,
  ThemeBtn
} from './styles'

const Sidebar = () => (
  <ASide>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Richard Piovezan</Title>
      <GithubUser type="secondary" fontSize={16}>
        Richard-Piovezan
      </GithubUser>
      <Description type="main" fontSize={12}>
        Engenheiro Front-End
      </Description>
      <ThemeBtn>Trocar Tema</ThemeBtn>
    </SidebarContainer>
  </ASide>
)

export default Sidebar
