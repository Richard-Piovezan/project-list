import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkBtn } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Paragraph type="secondary">Lista de tarefas feita com VueJS</Paragraph>
    <LinkBtn>Visualizar</LinkBtn>
  </Card>
)

export default Project
