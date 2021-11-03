const randomXKCDNumber = () => Math.floor(Math.random() * 2538) + 1

// use https://xkcd.vercel.app/?comic=latest
// to get most recent comic
const baseUrl = 'https://xkcd.vercel.app/?comic='

const url = (number) => `${baseUrl}${number}`

export { url, randomXKCDNumber }
