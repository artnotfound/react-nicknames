<p align="center">
  <img src="https://raw.githubusercontent.com/artnotfound/react-nicknames/master/nicknames.png" />
</p>

Allows you to choose from a library of element names, or create your own to make your JSX more semantic.

## Motivation

Inspired by [this post](https://www.pluralsight.com/blog/software-development/html5-web-components-overview) on "div soup" and the efforts of [polymer](https://www.polymer-project.org/1.0/), this aims to make your JSX more understandable at a glance. As a bonus, the React inspector becomes a little more obvious and easier to search.

## Usage

You can use any of the [included names](https://github.com/artnotfound/react-nicknames/blob/master/src/nicknames.json) like a standard module or use the `newNick` function to create one.

By default all elements will be `<div>`s but you can change that by passing in an `el` prop with an HTML element name.

eg:

```js
import React from 'react'
import {Wrapper, Topbar, Button, newNick} from 'react-nicknames'
const CustomElement = newNick('CustomElement')

class MyApp extends React.Component {
  someFunc () {
    console.log('lol')
  }
  
  render () {
    return (
      <Wrapper className="App">
        <Topbar el="nav" className="Navigation">
          <Button el="button" onClick={this.someFunc.bind(this)}>
            {'CLICK ME'}
          </Button>
        </Topbar>
        <CustomElement className="CustomElement"/>
      </Wrapper>
    )
  }
}
```

Will product a DOM that looks like:

```html
<div class="App">
  <nav class="Navigation">
    <button onclick="someFunc()">
      {'CLICK ME'}
    </button>
  </nav>
  <div class="CustomElement"></div>
</div>
```

## This is stupid

Probably, yeah, just use div soup.
