import { fixture, html, expect } from '@open-wc/testing'
import { svg } from 'lit-element'

import { ZenIcon } from '../src/icon'

const ICON_SETS = {
  icons: {
    test: {
      viewBox: '0 0 1 1',
      svg: svg``,
    },
  },
}

describe('zen-icon', () => {
  it('renders', () =>
    expect(fixture('<zen-icon></zen-icon>')).to.eventually.exist)

  it('throws an error when no set is provided', () =>
    expect(
      fixture(html`
        <zen-icon icon=":test"></zen-icon>
      `),
    )
      .to.be.rejectedWith(TypeError))

  it('throws an error when no name is provided', () =>
    expect(
      fixture(html`
        <zen-icon icon="icons:"></zen-icon>
      `),
    )
      .to.be.rejectedWith(TypeError))

  it('throws an error when no icon set is provided', () =>
    expect(
      fixture(html`
        <zen-icon icon="icons:test"></zen-icon>
      `),
    )
      .to.be.rejectedWith(TypeError))

  context('when an icon set is provided', () => {
    beforeEach(() => {
      ZenIcon.sets = ICON_SETS
    })

    it('throws an error when an invalid set is provided', () =>
      expect(
        fixture(html`
          <zen-icon icon="asdf:test"></zen-icon>
        `),
      )
        .to.be.rejectedWith(TypeError))

    it('throws an error when an invalid name is provided', () =>
      expect(
        fixture(html`
          <zen-icon icon="icons:asdf"></zen-icon>
        `),
      )
        .to.be.rejectedWith(TypeError))

    it('when a valid icon set and name is provided', () =>
      expect(
        fixture(html`
          <zen-icon icon="icons:test"></zen-icon>
        `),
      )
        .to.eventually.exist)
  })
})
