# basekit
Small basekit as starting point for html pages. Uses twig, gulp and sass (scss).

## Utilities
Uses [gulp](http://gulpjs.com/) for automation, [twig](http://twig.sensiolabs.org/) as template engine,
and [sass](http://sass-lang.com/) (scss) as preprocessor.

## Main usage
I wanted to create a small, basic structure for setting up new projects. Big frameworks like bootstrap, bourbun + neat
were to heavy for my needs. The grids did't work as I wanted them to. So there was just no system that fits all my needs.
Addinionally only a small amount of the framework is used, which is a massive overhead imho.

So I started from scratch. So consider this basekit as learning project. Not optimal, but allways keen to be for production.

## Baseline
One main goal is to set up a baseline grid, so the vertical rhythm is nice and smooth. I used two different line-heights
for mobile and tablet+ (30em). Based on the settings at [gridlover](http://www.gridlover.net/app/) I used a
line-height/scale-factor of **1.25** for mobile, and **1.5** for tablet and up, while using a base font-size of 16px.
I think these are good values, to keep the readability good on most devices.

##Icons
I implemented [gulp-svgstore](https://github.com/w0rm/gulp-svgstore) for generating svg sprites and [gulp-svgfallback](https://github.com/w0rm/gulp-svgfallback) for creating a png fallback sprite. Both are made by [Andrey Kuzmin](https://twitter.com/unsoundscapes). Coloring of the ```path``` elements inside the ```symbol```s are allready set to ```fill="currentColor"``` (example1) but can be colorized separate, like in example2.

##Breakpoints
For breakpoints I took a bower plugin called [mappy-breakpoints](https://github.com/zellwk/mappy-breakpoints) wich has some advantages I wanted to have, like substracting ```1px``` form ```max-width``` queries, to prevent overlapping. Currently the px values are calculated to rem instead of em, but that's no big deal.