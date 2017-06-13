# WASM Tests

Repo for testing out wasm. Currently a hello world example.

## Dependencies

This project assumes that you have emscripten set up somewhere on your machine. Follow the [developers guide](http://webassembly.org/getting-started/developers-guide/) from webassembly.org. Currently, the config field in package.json controls the compilation.

```js
{
  "config": {
    // This should be the path to emsdk shell/bat script that sets up the right path variables for
    // emcc to run. On windows, it should be a path to a bat file. On unix, it should be something
    // like: "source path/to/emsdk_env.sh"
    "emsdk_env": "E:/Github/emsdk/emsdk_env.bat",
    // A file to use as a skeleton for the output. {{{SCRIPT}}} is where the wasm module is inserted
    "html_template": "./template.html",
    // The c file to compile to wasm
    "in_file": "./src/hello.c",
    // The output, specified as an html file
    "out_file": "./public/index.html"
  }
}
```

## Commands

`npm run wasm` will compile the project using the config settings

`npm run serve` will use browser-sync to serve and watch the public folder