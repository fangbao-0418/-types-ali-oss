
declare module 'ali-oss' {
  interface OSSConfig {
    accessKeyId: string
    accessKeySecret: string
    stsToken?: string
    bucket?: string
    endpoint?: string
    region?: string
    internal?: boolean
    secure?: boolean
    timeout?: boolean
  }
  interface Client {
    multipartUpload: <T, S>(name: string, file: string | File, options?: T) => S
  }
  export function Wrapper (config: OSSConfig): Client
  function client (config: OSSConfig): Client
  export default client
}
