import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 12px;
  padding: 16px;
  transition: 0.6s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 0px;
  }
`

export const LinkBtn = styled.a`
  display: inline-block;
  padding: 8px;
  background-color: ${(props) => props.theme.backgroundButtonColor};
  color: ${(props) => props.theme.buttonColor};
  font-size: 14px;
  text-decoration: none;
  margin-top: 24px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.theme.backgroundColorButtonProjectsHover};
    border-radius: 6px;
  }
`
