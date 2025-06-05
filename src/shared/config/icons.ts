// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const req = require.context('@/shared/assets/icons', true, /\.svg$/)
req.keys().forEach(req)
