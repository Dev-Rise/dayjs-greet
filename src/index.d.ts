import { PluginFunc } from 'dayjs'

declare const plugin: PluginFunc

export = plugin

declare module 'dayjs' {
  interface Dayjs {
    greet(suffix?: string): string
  }

  interface ILocale {
    greet: () => string
  }
}
