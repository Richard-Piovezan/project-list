import styled from 'styled-components'
import { Parahraph } from '../../components/Paragraph/styles'

export const ASide = styled.aside`
  display: block;

  @media (max-width: 768px) {
    text-align: center;
    padding-bottom: 32px;
  }
`

export const GithubUser = styled(Parahraph)`
  text-align: center;
`

export const Description = styled(Parahraph)`
  margin: 24px 0 40px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 24px 0 32px;
  }
`

export const ThemeBtn = styled.button`
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  color: #eee;
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
