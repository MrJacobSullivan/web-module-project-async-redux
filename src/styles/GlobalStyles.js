import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`bg-white text-gray-800 font-mono`};
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
