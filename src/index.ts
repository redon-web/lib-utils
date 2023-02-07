export const say = (msg: string): string => {
  return `Hello ${msg}`
}

export const log = (...args: any) => {
  globalThis?.console.log(...args)
}
