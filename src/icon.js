import { LitElement, svg, css } from 'lit-element'

export class ZenIcon extends LitElement {
  static get properties () {
    return {
      icon: String,
    }
  }

  static get styles () {
    return css`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      :host {
        display: inline-block;
        width: 0;
        height: 0;
      }

      .svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    `
  }

  constructor () {
    super()

    this.icon = ''

    this.__renderer = {
      viewBox: '0 0 1 1',
      src: svg``,
    }
  }

  update (changedProps) {
    if (changedProps.has('icon') && this.icon) {
      const parts = this.icon.split(':')
      const setName = parts[0]
      const iconName = parts[1]
      this.__renderer = ZenIcon.sets[setName][iconName]
    }

    super.update(changedProps)
  }

  render () {
    return svg`
      <svg
        class="svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="${this.__renderer.viewBox}">
        ${this.__renderer.src}
      </svg>
    `
  }
}

ZenIcon.sets = {}

window.customElements.define('zen-icon', ZenIcon)
