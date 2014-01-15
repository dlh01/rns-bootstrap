

# Requirements

* Bower
* NPM
* Jekyll


# Setup

* `bower install`
* `npm install`


# Compiling assets

* `grunt dist-js`: Copy the contents of `bower_components/bootstrap/dist/js/` to `dist/js`
* `grunt dist-css`: Compile `less/rnsbs.less` into `dist/css/rns-bootstrap.css` and `dist/css/rns-bootstrap.min.css` with Recess
* `grunt dist-fonts`: Copy the contents of `fonts/` and `bower_components/bootstrap/dist/fonts/` to `dist/fonts/`
* `grunt dist`: Run `dist-js`, `dist-css`, and `dist-fonts`
* `grunt` or `grunt default`: Run `dist`
* `grunt watch`: Call the `recess` task on changes to files in `less/`


# Generating the docs locally

* `jekyll serve [--watch]`


# Updating dependencies

* `bower update`


# Notes

* Where possible, follow the styles and standards of Bootstrap. For example, compile Less with [Recess](http://twitter.github.io/recess/), not [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less), into the `dist/css/` directory. For included Less files, follow Bootstrap's directory structure and filenames.

* Where possible, follow Less nesting styles as well. See the rules under `.navbar-inverse` in `less/navbar.less` for an example.

* An exception is the included `.editorconfig`, which follows the WordPress coding guidelines.

* The `copy` command in Grunt differs from the Bootstrap version because it needs to copy the contents of two `fonts/` directories, not one. It uses the `flatten` option to combine all of the relevant files into `dist/fonts` without extra subdirectories.

* The only layout for the Jekyll-based documentation is `default.html`. It includes a basic header and footer and a link to the generated CSS in `dist/css/`.


# Bugs

## Docs

* Jekyll does not seem to support excluding a directory name at one level of the file tree, but including a directory with the same name in a lower level of the tree. Because of this, the top-level `fonts/` directory is copied into `_site/` along with the `dist/fonts/`, which is actually used in the CSS.


# Todo

* Move the docs into a `docs` directory, a la Bootstrap

* Compile red- and blue-branded versions

* Exclude the root-level `fonts` directory from the generated documentation, but without also excluding the `dist/fonts` directory

* Create a `bower.json` so that this project can be included as a dependency, but without the docs
