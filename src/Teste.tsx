import styled from 'styled-components'

type PropsButton = {
  main: boolean
  fontSize?: string
}

const Button = styled.button<PropsButton>`
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => (props.main ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const DangerButton = styled(Button)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Button fontSize="18px" main>
        Clique Aqui
      </Button>
      <Button fontSize="14px" main={false}>
        Cancelar
      </Button>
      <DangerButton as="a" main>
        <span>Não clique aqui</span>
      </DangerButton>
    </>
  )
}

export default Teste
