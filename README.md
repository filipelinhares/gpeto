<h1 align="center">
	<img src="images/logo-mini.png">
</h1>

## Problem
I was working on a project using the bootstrap when needed style a progress bar. I created a new file and rewrote the entire bootstrap style for my new progress bar. Then I thought, what if I could copy the progress of the bootstrap quickly and use the styling source for me. Then the gPeto emerged, continue reading to learn more.

## Introduction
![Progress](images/progress.png)

You most often does not use all the components that are downloading from a framework or tool.

With gPeto, you can install only what you'll need or installing on demand.

## Getting started

### Installation
```shell
npm install -g gpeto
```

### Add a project fo gPeto
With the gpeto command in your terminal. The first thing what you need to do is download the project what you'll modularize (in this example we'll use Bootstrap).

```shell
bower install Bootstrap

cd bower_components
```

We'll add the Bootstrap to our gpeto folder.

```
gpeto add bootstrap
# [gpeto] ➜ Copied bootstrap successifuly! ⌚ 96 ms
```

### Installing a component in your project
You can go to the project what you're working on. Install only the components you're needing.

```
gpeto install bootstrap/less/progress.less
# [gpeto] ➜ Copied bootstrap/less/progress.less to gpeto_components ⌚ 53 ms
```

If you don't specify a folder with the `--out` flag, all components will be installed in bower_components folder.

## Caution
gPeto don't install dependencies automatically yet, but I'm working in some way to do that.

## Contribute
Your contributions and suggestions are :heart: welcome.

## Todo
- [ ] Add `remove` and `uninstall` commands
- [ ] Install dependencies automatically

## License
[MIT](LICENSE.md) © Filipe LInhares
