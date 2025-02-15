import { Hono } from 'hono'
import * as v from 'valibot'
import { queryParamsSchema } from './schema'

const app = new Hono()

app.get('/gyazo/:id', async (c) => {
  const id = c.req.param('id')
  const query = c.req.query()
  const result = await v.safeParseAsync(queryParamsSchema, query)

  if (!result.success) {
    const errors = result.issues.map(({ message }) => message);
    return c.json(errors, 400);
  }

  return await fetch(`https://i.gyazo.com/${id}.png`, {
    cf: {
      cacheEverything: true,
      cacheTtl: 60 * 60 * 24 * 30,
      image: result.output,
    }
  })
})

export default app 