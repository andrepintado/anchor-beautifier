# Anchor Beautifier
A Javascript library to turn your anchor links into cool-looking links. All anchor links will make the url change to http://yoururl.com/foo-bar instead of http://yoururl.com/#foo-bar. The page title will be changed to "MainUrlTitle - Foo Bar".  When http://yoururl.com/#foo-bar will be called directly,  http://yoururl.com/foo-bar will be shown to the user.

Ongoing work.

## Features

* URL changing
* Page title changing
* History pushing
* Pre/post actions
* Animations support
* Cross-browser

## Installation

Include the javascript file at the end of your code.

```javascript
<script src="anchor-beautifier.js"></script>
```

or

```javascript
<script src="anchor-beautifier.min.js"></script>
```

## Usage

Add class="cool-anchor" to your anchor links. Example:

```html
<a href="#foo-bar">Foo bar link</a>
```

Start Anchor-beautifier with default options using the following piece of code:

```javascript
<script type="text/javascript">
AnchorBeautifier.init();
</script>
```

If you want to customize it just add the following piece of code after the script tag:

```javascript
<script type="text/javascript">
AnchorBeautifier.init({
    attribute: "href",
    anchorPrefix: "#"
})
</script>
```

### init options

* attribute
* anchorPrefix

## Server Configuration

If you visitors to be able to visit your http://yoururl.com/foo-bar directly, you should configure your server. Just let it know the requests to /foo-bar should be transformed into /#foo-bar. Here's some help:

### nginx

### apache
