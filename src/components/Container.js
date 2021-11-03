import tw, { styled } from 'twin.macro'

const Wrapper = styled.main`
  ${tw`flex flex-col justify-center items-center my-16`};
`

const Column = styled.div`
  ${tw`w-1/2 bg-red-500`};
`

const PageTitle = styled.h1``

const Container = ({ title, children }) => {
  return (
    <Wrapper>
      <PageTitle>{title}</PageTitle>
      <Column>{children}</Column>
    </Wrapper>
  )
}

export default Container
