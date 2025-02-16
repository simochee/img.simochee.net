import { Hono } from 'hono'
import * as v from 'valibot'
import { queryParamsSchema } from './schema'
import { profiles, scaleSize } from './profile'

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

app.get('/gyazo/:id/:profile/:scale?', async (c) => {
  const id = c.req.param('id')
  const profile = c.req.param('profile')
  const scale = c.req.param('scale')
  const image = profiles[profile];

  if (!image) {
    return c.json({ error: 'Profile not found' }, 404)
  }

  return await fetch(`https://i.gyazo.com/${id}.png`, {
    cf: { image: scaleSize(image, scale) }
  })
});

export default app 