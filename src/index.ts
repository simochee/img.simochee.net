import { Hono } from 'hono'

const app = new Hono()

app.get('/gyazo/:id', async (c) => {
  const id = c.req.param('id')
  
  return await fetch(`https://i.gyazo.com/${id}.png`, {
    cf: {
      cacheEverything: true,
      cacheTtl: 60 * 60 * 24 * 30,
      image: {
        format: 'webp'
      }
    }
  })
})

export default app 