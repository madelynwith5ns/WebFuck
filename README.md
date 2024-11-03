# WebFuck
![image](https://github.com/user-attachments/assets/dee130b9-9951-4169-a348-0fc678b51fe6)

A brainfuck-derived language for the web.

### What's different?

WebFuck is just like the BrainFuck you know and love, except, the `.` command,
instead of outputting to stdout (since that doesn't exist) instead outputs to
a buffer.

This buffer can be evaluated as JavaScript code with the `$` command, and
cleared with `_`.

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
Trust us, we didn't check.

### Syntax Example
JS:
```js
alert("uwu");
```
WebFuck:
```webfuck
--[----->+<]>-----.+++++++++++.-------.+++++++++++++.++.+[--->+<]>+.------.[----->++<]>+.++.--.-[-->+++++<]>.+++++++.-[-->+++<]>-.$
```

### Licensing

WebFuck is licensed under the Chaotic License. See `LICENSE.txt` for more details.
