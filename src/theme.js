import React from 'react'

function Counter ({ children }) {
  const css = {
    fontSize: '1.15rem',
    padding: '0.5em',
    position: 'absolute',
    right: 0,
    top: 0,
    textAlign: 'right',
  }

  return <nav css={css} aria-label={`Slide ${children[0]} of ${children[2]}`}>
    {children}
  </nav>
}

const Provider = props => {
  return <>
    {props.children}
    {/* <Counter>{props.index}/{props.slides.length}</Counter> */}
  </>
}

export default {
  styles: {
    body: {
    },
    Slide: {
      textAlign: 'center'
    },
    p: {
      fontSize: '2.5rem',
      margin: "1rem 0",
      textAlign: 'center'
    },
    h1: {
      fontSize: '5rem',
      marginBottom: "0.5rem"
    },
    h2: {
      fontSize: '4rem',
      margin: "0.5rem 0"
    },
    'figure': {
      textAlign: 'left'
    },
    code: {
      fontSize: "inherit"
    },
    figcaption: {
      fontSize: "1.25rem"
    },
    li: {
      marginBottom: "0.5rem",
      textAlign: 'left'
    },
  },
  text: {
    heading: {
      margin: '0 auto 1rem',
      textAlign: 'center'
    },
  },
  colors: {
    headerFooterBackground: '#fff',
    text: '#000',
    background: '#fff',
    link: '#000',
    heading: '#000',
    quote: '#000',
    pre: '#333',
    preBackground: 'rgb(245, 242, 240)',
    code: '#333',
    codeBackground: 'transparent',
    figcaptionBackground: "rebeccapurple",
    figcaption: "#fff"
  },
  Provider
}
