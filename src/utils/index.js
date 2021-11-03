const randomXKCDNumber = () => 2000

// use https://xkcd.vercel.app/?comic=latest
// to get most recent comic
const baseUrl = 'https://xkcd.vercel.app/?comic='

const url = `${baseUrl}${randomXKCDNumber()}`

export { url }
