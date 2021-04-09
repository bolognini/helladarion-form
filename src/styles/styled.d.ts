/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

export type Theme = {
  colors: {
    primary: string
    background: string
    text: string
    placeholder?: string
  }
}
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
