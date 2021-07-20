export const styles = `
  /*** The new CSS Reset - version 1.0.0 (last updated 8.7.2021) ***/

  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  *:where(:not(iframe, canvas, img, svg, video):not(svg *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove list styles (bullets/numbers) */
  ol, ul {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-width: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  #app {
    width: 80vw;
    margin: auto;
    padding: 20rem 0 5rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 0.33%;
  }

  button {
    width: 33%;
    text-overflow: ellipsis;
    color: white;
    background: #9d3757;
    border-radius: 4px;
    text-align: center;
    line-height: 2;
  }
`

export function addStyle (styleContent: string) {
  const style = document.createElement('style')
  style.innerHTML = styleContent
  document.body.appendChild(style)
}