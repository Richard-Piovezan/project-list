import styled from 'styled-components'
import { Parahraph } from '../../components/Paragraph/styles'

export const ASide = styled.aside`
  display: block;

  @media (max-width: 768px) {
    text-align: center;
    padding-bottom: 32px;
  }
`

export const NameDev = styled.a`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.nameColor};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const GithubUser = styled(Parahraph)`
  margin-top: 16px;

  @media (max-width: 768px) {
    text-align: center;
  }
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
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  padding: 8px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColorButtonThemeHover};
    border-radius: 6px;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
