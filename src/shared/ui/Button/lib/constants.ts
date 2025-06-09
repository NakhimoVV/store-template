export const ButtonMode = {
  CIRCLE: 'circle',
  RIGHT_ROUND: 'right-round',
  ANCHOR: 'anchor',
} as const

export type ButtonMode = (typeof ButtonMode)[keyof typeof ButtonMode]
