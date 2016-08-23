# Anchor Beautifier
A Javascript library to turn your anchor links into cool-looking links.

Ongoing work.

## Requirements

## Dependencies

## Installation

Include the javascript file at the end of your code after your jquery load.

```sh
<script src="anchor-beautifier.js"></script>></script>
```

or

```sh
<script src="anchor-beautifier.min.js"></script>></script>
```


## Usage

Add class="cool-anchor" to your anchor links.

Anchor-beautifier is implicitly starting with default options. If you want to customize the lib just add the following piece of code after the script tag:

```sh
<script>
AnchorBeautifier.initConfig({
    attribute: "href",
    valuePrefix: "#"
})
</script>
```

### init options
