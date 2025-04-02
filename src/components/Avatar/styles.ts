import styled from 'styled-components'

export const ProfilePicture = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 24px;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 128px;
    heigth: 128px;
  }

  &:hover {
    border-radius: 40%;
  }
`
