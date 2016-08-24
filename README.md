# Anchor Beautifier
A Javascript library to turn your anchor links into cool-looking links.

Ongoing work.

## Requirements

## Dependencies

## Installation

Include the javascript file at the end of your code after your jquery load.

```sh
<script src="anchor-beautifier.js"></script>>
```

or

```sh
<script src="anchor-beautifier.min.js"></script>
```


## Usage

Add class="cool-anchor" to your anchor links. All anchor links will make the url change to http://yoururl/foo-bar instead of http://yoururl/#foo-bar. The title will be changed to "Main url title - Foo Bar".  http://yoururl/foo-bar will then be accessible as if user would be acessing http://yoururl/#foo-bar.

Anchor-beautifier is implicitly starting with default options. If you want to customize it just add the following piece of code after the script tag:

```sh
<script>
AnchorBeautifier.initConfig({
    attribute: "href",
    valuePrefix: "#"
})
</script>
```

### init options
