import { Parahraph as StyleParagraph } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secondary'
}

const Paragraph = ({ children, type = 'main' }: Props) => (
  <StyleParagraph type={type}>{children}</StyleParagraph>
)

export default Paragraph
