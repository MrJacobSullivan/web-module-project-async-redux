import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getXKCD } from '../lib/actions'

const XKCD = ({ xkcd, isFetching, error, getXKCD }) => {
  useEffect(() => getXKCD(), [getXKCD])
  const handleClick = () => getXKCD()

  if (error) return <h2>There was an error: {error}</h2>
  if (isFetching) return <h2>Fetching an XKCD for you.</h2>

  return (
    <div>
      <img src={xkcd.img} alt={xkcd.alt} />
      <h2>{xkcd.title}</h2>
      <p>
        {xkcd.month}.{xkcd.day}.{xkcd.year}
      </p>
      <button onClick={handleClick}>Get XKCD</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  xkcd: state.xkcd,
  isFetching: state.isFetching,
  error: state.error,
})

export default connect(mapStateToProps, { getXKCD })(XKCD)
