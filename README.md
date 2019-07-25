# zen-icon

An icon component for LitElement.

## Features

- Provides an interface for icon sets
- Provides an SVG wrapper around the icon's contents
- Users can easily apply CSS styles to the component to customize it

## Install

Using `npm`:

```
$ npm install @travistrue2008/zen-icon
```

Using `yarn`:

```
$ yarn add @travistrue2008/zen-icon
```

## API

This component needs to be provided a data-source to pull data from.
An icon definition requires a `viewBox` property to define the SVG's `viewBox`, and an `src` property to define the markup that will be injected into the `<svg>` tag:

_NOTE: The actual `<svg>` tag is not included in `src` as it will be provided by the component_

```js
import { svg } from 'lit-element'

const line = {
  viewBox: '0 0 200 500',
  src: svg`
    <line x1="0" y1="0" x2="200" y2="200" style="stroke-width:2"/>
  `,
}
```

Next, we need to encapsulate our icon definition within another object that will serve as our icon set:

```js
const demo = { line }
```

If we had any other icon definitions that we'd want to associate with this set, then we'd also include them in the `demo` set above.

Finally, we need to import the `zen-icon` component's class, `ZenIcon`, and assign a dictionary of icon sets like so:

```js
import { ZenIcon } from '@travistrue2008/zen-icon'

ZenIcon.sets = { demo }
```

`ZenIcon` supports multiple icon sets in case developers are using different icons from multiple 3rd-party sources.
