const defaultTheme = {
  colors: {
    placeholder: '#828282'
  }
}

const light = {
  colors: {
    primary: '#F9D078',
    background: '#121214',
    text: '#F2F2F1'
  }
}

const dark = {
  colors: {
    primary: '#B52931',
    background: '#F2F2F1',
    text: '#121214'
  }
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
