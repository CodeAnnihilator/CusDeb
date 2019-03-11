interface RefObject<T> {
  readonly current: T | null
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "react-string-replace" {
  const content: any;
  export default content;
}
