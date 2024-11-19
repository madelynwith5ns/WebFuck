# WebFuck
![webfuckv3-banner](https://github.com/user-attachments/assets/e2115245-d421-47ac-8f60-84d1333b3763)

A brainfuck-derived language for the web, V3.

### What's different?

In WebFuckV3, a bit! Here's the full table of features in WebFuckV3, along with when they were added.

| Command | Name | Description | Since |
| --- | --- | --- | --- |
| < | PTR Back | Move the pointer back by 1 cell | BrainFuck |
| > | PTR Forward | Move the pointer forward by 1 cell | BrainFuck |
| + | Increment | Increment the value of the cell on the pointer. | BrainFuck |
| - | Decrement | Decrement the value of the cell on the pointer. | BrainFuck |
| . | Output | Output the value of the cell on the pointer into the output buffer. | BrainFuck |
| [ | Loop Open | Open a loop | BrainFuck |
| ] | Loop Close | Close a loop | BrainFuck |
| $ | Evaluate | Evaluate the output buffer as JavaScript code. | WebFuckV1 |
| _ | Clear Output | Clear the output buffer. | WebFuckV1 |
| 0 | Jump Zero | Set the pointer position to 0 | WebFuckV2 |
| @ | Memory Clear (DEPRECATED!) | Clear the memory. | WebFuckV2, Deprecated in WebFuckV2 |
| & | Reference | Push the current pointer on to the alternate pointer stack. | WebFuckV3 |
| * | Dereference | Pop the last value off the alternate pointer stack, returning to it. | WebFuckV3 |
| ? | Debug Dump | Print out the current internal state. | WebFuckV3* |

\* The `?` operator is not required to be implemented by a WebFuck engine. `libwebfuck.js` implements it however.

### Type Safety

WebFuck is *type-safe*, which is why you should use it over JavaScript.

Types can be applied to any command in WebFuck by surrounding the code you wish
to type in double quotes ("), and appending `:typename` at the end, like so:
```webfuck
"+[----->+++<]>+.---.+++++++..+++.":string
```

Types carry the same weight in WebFuck as they do in TypeScript, so you aren't
losing any type-safety!

### Blazingly Fast

WebFuck looks insane and low level as webfuck, that means its gotta be fast.
Trust us, ~~we didn't check.~~ [benchmarks](https://www.microsoft.com/en-au/download/details.aspx?id=9905)

### Syntax Example
JS:
```js
alert("uwu");
```
WebFuck:
```webfuck
--[----->+<]>-----.+++++++++++.-------.+++++++++++++.++.+[--->+<]>+.------.[----->++<]>+.++.--.-[-->+++++<]>.+++++++.-[-->+++<]>-.$
```

### Contributing
Want features added to WebFuck?

Open an issue with your request and we will flip a coin to determine whether or not to add it!

Don't wanna deal with the almighty coinflip? Make a PR and if its not straight up malware it will probably get merged unless we don't feel like it!

### Licensing

WebFuck is licensed under the Chaotic License. See `LICENSE.txt` for more details.
