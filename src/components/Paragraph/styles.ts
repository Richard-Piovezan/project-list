import styled from 'styled-components'

import { Props } from '.'

export const Parahraph = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}px` : '14px')};
  color: ${(props) => (props.type === 'main' ? ' #282A35' : '#949494')};
  line-height: 22px;
  text-align: justify;
`
