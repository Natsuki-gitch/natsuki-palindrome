# Phrase object (with palindrome detector)

this is a sample NPM module created in [_Learn Enough JavaScript to Be Dangerous_](https://www.learnenough.com/javascript-tutorial)

The module can be used as follows:

...
$ npm install --global natsuki-palindrome
$ vim test.js
let Phrase = require("natsuku-palindrome")
let napoleonsLament = new Pharase("Able was I, saw Elba.")
console.log(napoleonsLament.palindrome());
$ node test.js
true
...
