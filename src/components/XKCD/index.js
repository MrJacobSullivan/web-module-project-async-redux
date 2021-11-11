import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getXKCD } from '../../lib/actions'
import {
  Error,
  Loading,
  Wrapper,
  ContentContainer,
  ButtonContainer,
  Image,
  Title,
  Date,
  Button,
} from './styles'

const XKCD = ({ xkcd, isFetching, error, getXKCD }) => {
  useEffect(() => getXKCD(false), [getXKCD])

  if (error) return <Error>There was an error: {error}</Error>
  if (isFetching) return <Loading>Fetching an XKCD for you.</Loading>

  return (
    <Wrapper>
      <ContentContainer>
        <Image src={xkcd.img} alt={xkcd.alt} />
        <Title>{xkcd.title}</Title>
        <Date>
          {xkcd.month}.{xkcd.day}.{xkcd.year}
        </Date>
      </ContentContainer>
      <ButtonContainer>
        <Button onClick={() => getXKCD(true)}>Random</Button>
        <Button onClick={() => getXKCD(false)}>Recent</Button>
      </ButtonContainer>
    </Wrapper>
  )
}

const mapStateToProps = (state) => ({
  xkcd: state.xkcd,
  isFetching: state.isFetching,
  error: state.error,
})

export default connect(mapStateToProps, { getXKCD })(XKCD)
