import { createGlobalTheme, globalStyle } from '@vanilla-extract/css'

export const globalTheme = createGlobalTheme(':root', {
  color: {
    primary: {
      light: "blue",
    }
  }
})

globalStyle('body', {

})
