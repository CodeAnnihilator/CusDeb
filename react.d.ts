interface RefObject<T> {
  // immutable
  readonly current: T | null
}

declare module '*.scss' {
  const content: any;
  export default content;
}