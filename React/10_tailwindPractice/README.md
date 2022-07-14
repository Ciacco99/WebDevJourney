## Quick start:

```
$ yarn # npm install
$ yarn build # npm run build
````

## Development

Run Webpack in watch-mode to continually compile the JavaScript as you work:

```
$ yarn watch # npm run watch
```

## Deployment 
Probably need to add some more plugins so that we can minify the final pack.
This is meant to be a lighter version to quickly develop without having the boilerplate
of Create-React-App. 

Note this is needed to build the tailwind:

```
$ npx tailwindcss -i style.css -o buildstyle.css
```


That will build the css inside style.css and all the .html and .js files in ./src and create buildstyle.css, the 'equivalent' of index.pack.js for the css.

I added it to the shell script build.sh.

## Building tailwind + app:

```
$ bash build.sh
```

The correct way of doing this for hot reload is adding everything to webpack but the purpose of this hand-made rough and minimal setup is to just have a minimal copy-paste setup for small exercises and practice. Such that I have a minimal working environment without having to load 300MB of modules with create-react-app.

To make everything simpler I should use frameworks like Next.js, Vite.js, Gatsby.js etc etc