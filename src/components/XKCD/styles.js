import tw, { styled } from 'twin.macro'

const Error = styled.h2`
  ${tw`text-red-500`};
`

const Loading = styled.h2`
  ${tw`text-gray-500`};
`

const Wrapper = styled.section`
  ${tw`flex flex-col w-full items-center`};
`

const ContentContainer = styled.div`
  ${tw`flex flex-col w-4/5`};
`

const ButtonContainer = styled.div`
  ${tw`grid grid-cols-2 gap-2 w-3/5 self-center`};
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

const Button = styled.button`
  ${tw`bg-gray-600 text-gray-50 text-sm p-4 mx-1 rounded w-full transition-colors duration-150`};

  &:hover {
    ${tw`bg-gray-800`};
  }
`

export { Error, Loading, Wrapper, ContentContainer, ButtonContainer, Image, Title, Date, Button }
