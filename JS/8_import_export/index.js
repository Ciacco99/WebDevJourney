console.log("Import, require, export");

// THESE FAIL because of security measures of browsers.
// they should work if we were runnig a server and testing online
// they don't work as local files requests. big sad.
// There are some fixes setting type module and using .json or .mjs... I won't bother now

import { capitalizeString } from "./string_function";

const cap = capitalizeString("hello!");

console.log(cap);


// The gist is to be able to export portions then use them importing them
// so we can reuse code and have a neat structure...
