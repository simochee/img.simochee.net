import * as v from 'valibot'

const bool = v.pipe(
    v.union([
        v.literal('true'),
        v.literal('false')
    ]),
    v.transform((value) => value === 'true')
)
    
const int = 
    v.pipe(
        v.string(),
        v.regex(/^[0-9]+$/),
        v.transform((value) => Number.parseInt(value, 10))
    )
const float = v.pipe(
    v.string(),
    v.regex(/^[0-9]+(\.[0-9]+)?$/),
    v.transform((value) => Number.parseFloat(value))
)
const fit = v.union([
    v.literal('scale-down'),
    v.literal('contain'),
    v.literal('cover'),
    v.literal('crop'),
    v.literal('pad'),
])
const format = v.union([
    v.literal('webp'),
    v.literal('jpeg'),
    v.literal('json'),
    v.literal('png'),
    v.literal('avif'),
])
const gravity = v.union([
    v.literal('auto'),
    v.literal('left'),
    v.literal('right'),
    v.literal('top'),
    v.literal('bottom'),
])
const rotate =v.pipe(v.union([
    v.literal('0'),
    v.literal('90'),
    v.literal('180'),
    v.literal('270'),
    v.literal('360'),
]),
    v.transform((value) => {
        const num = Number.parseInt(value, 10)
        switch (num) {
            case 0:
            case 90:
            case 180:
            case 270:
            case 360:
                return num
            default:
                
        }
    })
)

export const queryParamsSchema = v.object({
    anim: v.optional(bool),
    background: v.optional(v.string()),
    blur: v.optional(int),
    brightness: v.optional(float),
    compression: v.optional(v.literal('fast')),
    contract: v.optional(float),
    dpr: v.optional(int),
    fit: v.optional(fit),
    format: v.optional(format, 'webp'),
    gamma: v.optional(float),
    gravity: v.optional(gravity),
    height: v.optional(int),
    quality: v.optional(int, '80'),
    rotate: v.optional(rotate),
    saturation: v.optional(float),
    sharpen: v.optional(int),
    width: v.optional(int),
})
