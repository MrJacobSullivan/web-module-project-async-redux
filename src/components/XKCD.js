import { useEffect } from 'react'

const XKCD = ({ xkcd, isFetching, error, getImage }) => {
  // useEffect(() => getImage(), [])
  // const handleClick = () => getImage()

  if (error) return <h2>There was an error: {error}</h2>
  if (isFetching) return <h2>Fetching an XKCD for you.</h2>

  return (
    <div>
      <h2>XKCD goes here.</h2>
    </div>
  )
}
