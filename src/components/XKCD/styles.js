import tw, { styled } from 'twin.macro'

const Container = styled.section`
  ${tw``};
`

const Image = styled.img`
  ${tw`max-w-full`};
`

const Title = styled.h2`
  ${tw`my-2 text-lg`};
`

const Date = styled.p`
  ${tw`mb-8`};
`

const ButtonContainer = styled.div`
  ${tw`grid grid-cols-2 gap-2`};
`

const Button = styled.button`
  ${tw`bg-gray-800 text-gray-50 text-sm p-4 mx-1 rounded w-full transition-colors duration-150`};

  &:hover {
    ${tw`bg-gray-700`};
  }
`

export { Container, Image, Title, Date, ButtonContainer, Button }
