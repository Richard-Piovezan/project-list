import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import {
  ASide,
  Description,
  GithubUser,
  NameDev,
  SidebarContainer,
  ThemeBtn
} from './styles'

type Props = {
  themeChange: () => void
}

const Sidebar = (props: Props) => (
  <ASide>
    <SidebarContainer>
      <Avatar />
      <NameDev
        target="_blank"
        title="Visit Github profile"
        href="https://github.com/richard-piovezan"
      >
        Richard Piovezan
      </NameDev>
      <GithubUser type="secondary" fontSize={16}>
        Richard-Piovezan
      </GithubUser>
      <Description type="main" fontSize={12}>
        Front-End Developer
      </Description>
      <ThemeBtn onClick={props.themeChange}>Change Theme</ThemeBtn>
    </SidebarContainer>
  </ASide>
)

export default Sidebar
