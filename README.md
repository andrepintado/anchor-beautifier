# Anchor Beautifier
A Javascript library to turn your anchor links into cool-looking links. All anchor links will make the url change to http://yoururl.com/foo-bar instead of http://yoururl.com/#foo-bar. The title will be changed to "MainUrlTitle - Foo Bar".  http://yoururl.com/foo-bar will then be accessible as if user would be acessing http://yoururl.com/#foo-bar.

Ongoing work.

## Features

* URL changing
* Page title changing
* History pushing
* Pre/post actions
* Animations support
* Cross-browser

## Requirements

TODO

## Dependencies

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

Add class="cool-anchor" to your anchor links.

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
