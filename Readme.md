# JsSimpleArithmeticParser

## What is it?

A simple parser for calculating arithmetic expressions, supporting the operators +-\*/ and parentheses.

## How to use it?

Include the parser Javascript file on a page and then calculate the arithmetic expression using this code as an Example:

```javascript
//Example: Tie a method evaluateArithmeticExpression below to for example an onclick event of a button in your DOM elements.
 <script type="text/javascript">
      function evaluateArithmeticExpression() {
        //debugger;
        var expression = document.getElementById("expression").value;
        var result = "";
        if (expression === null || expression.length < 1) {
          result = "Empty expression";
        }
        result = parserArithmeticSimpleModule.parseArithmeticExpression(
          expression
        );
        document.getElementById("result").innerText = result.toString();
      }
    </script>
```

## Is algebraic expressions supported?

No. This is a plain arithmetic parser.

## Can I see the source code of the parser?

Sure. Here you go. <a href='parser.js'>parser.js</a>

## Is the source code supported in all browser?

Yes, the parser is written in pure js with no use of ES6 syntax. It should be supported in most major browsers today.

## How is operator precendence kept?

The precedence is from least preceding to most the following standard:

- Addition
- Subtraction
- / Division
- Multiplication
- () Parentheses

This is in accordance with standard operator precendence in computerized mathematics.
