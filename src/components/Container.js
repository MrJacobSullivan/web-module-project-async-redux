import tw, { styled } from 'twin.macro'

const Wrapper = styled.main`
  ${tw`flex flex-col justify-center items-center my-16`};
`

const Column = styled.div`
  ${tw`w-1/2 flex flex-col justify-center items-center`};
`

const PageTitle = styled.h1`
  ${tw`text-3xl p-4`};
`

const Container = ({ title, children }) => {
  return (
    <Wrapper>
      <Column>
        <PageTitle>{title}</PageTitle>
        {children}
      </Column>
    </Wrapper>
  )
}

export default Container
