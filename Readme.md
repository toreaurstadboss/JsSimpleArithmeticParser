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

Sure. Here you go. <a href='https://github.com/toreaurstadboss/JsSimpleArithmeticParser/blob/master/parser.js'>parser.js</a>

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

## What syntax is supported?

The following two examples shows the syntax supported.

```bash

      2+3 should evaluate to 5
      12 * 5–(5 * (32 + 4)) + 3 should evalute to -117

```

The examples shows that it is easy to calculate arithmetic expressions with this simple parser.

## Is it easy to extend this parser?

Yes! Just add more syntax supported to the parser. Note the precedence, and that you have a main loop starting with the plus operator
and going upwards to minus, division, multiplication and if necessary doing recursive calls again to the plus operator. If you want to support another
operator such as sine of a number, you can add this.

## Why not just use eval ?

Of course, but I did this repo as an educational exercise for myself to learn more about Javascript. I also want to look into what can be made for making a parser
than can evalute other scenarios, such as lambda expressions and then I started with this parser.

Last update
10.11.2019
Tore Aurstad
E-mail: tore.aurstad@gmail.com
Blog: https://toreaurstad.blogspot.com
