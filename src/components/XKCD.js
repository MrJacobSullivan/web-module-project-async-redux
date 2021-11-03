import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getXKCD } from '../lib/actions'

const XKCD = ({ xkcd, isFetching, error, getXKCD }) => {
  // useEffect(() => getXKCD(), [])
  const handleClick = () => getXKCD()

  if (error) return <h2>There was an error: {error}</h2>
  if (isFetching) return <h2>Fetching an XKCD for you.</h2>

  /* xkcd looks like:
  {
    month: '11',
    num: 2536,
    link: '',
    year: '2021',
    news: '',
    safe_title: 'Wirecutter',
    transcript: '',
    alt: "This was always going to be a controversial Wirecutter post, but what really got them in trouble were their 'budget' and 'upgrade' picks.",
    img: 'https://imgs.xkcd.com/comics/wirecutter.png',
    title: 'Wirecutter',
    day: '1',
  }
  */

  return (
    <div>
      <h2>XKCD goes here.</h2>
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
