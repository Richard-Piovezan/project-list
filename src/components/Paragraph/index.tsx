import { Parahraph as StyleParagraph } from './styles'

export type Props = {
  children: string
  type?: 'main' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, type = 'main', fontSize }: Props) => (
  <StyleParagraph fontSize={fontSize} type={type}>
    {children}
  </StyleParagraph>
)

export default Paragraph
