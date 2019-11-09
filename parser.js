var parserArithmeticSimpleModule = (function() {
  splitByParenthesesBlocks = function(expression, operator) {
    var result = [];
    var braces = 0;
    var currentChunk = "";

    for (var i = 0; i < expression.length; i++) {
      var currentChar = expression[i];
      if (currentChar === "(") {
        braces++;
      } else if (currentChar === ")") {
        braces--;
      }
      if (braces == 0 && currentChar == operator) {
        result.push(currentChunk);
        currentChunk = "";
      } else {
        currentChunk += currentChar;
      }
    }
    if (currentChunk !== "") {
      result.push(currentChunk);
    }
    return result;
  };

  parseMultiplicationSeparatedExpression = function(expression) {
    var numbersString = splitByParenthesesBlocks(expression, "*");
    var numbers = numbersString.map(function(item) {
      if (item[0] === "(") {
        var subExpression = item.substr(1, item.length - 2);
        return parsePlusSeparatedExpression(subExpression);
      }
      return item;
    });
    var total = numbers.reduce(multiplyPart);
    function multiplyPart(total, num) {
      return parseInt(total) * parseInt(num);
    }
    return total;
  };

  parseDivisionSeparatedExpression = function(expression) {
    var numbersString = splitByParenthesesBlocks(expression, "/");
    var numbers = numbersString.map(function(item) {
      return parseMultiplicationSeparatedExpression(item);
    });
    var total = numbers.reduce(dividePart);
    function dividePart(total, num) {
      return parseInt(total) / parseInt(num);
    }
    return total;
  };

  parseMinusSeparatedExpression = function(expression) {
    var numbersString = splitByParenthesesBlocks(expression, "-");
    var numbers = numbersString.map(function(item) {
      return parseDivisionSeparatedExpression(item);
    });
    var total = numbers.reduce(subtractPart);
    function subtractPart(total, num) {
      return parseInt(total) - parseInt(num);
    }
    return total;
  };

  parsePlusSeparatedExpression = function(expression) {
    //debugger;
    var numbersString = splitByParenthesesBlocks(expression, "+");
    var numbers = numbersString.map(function(item) {
      return parseMinusSeparatedExpression(item);
    });
    var total = numbers.reduce(addPart);
    function addPart(total, num) {
      return parseInt(total) + parseInt(num);
    }
    return total;
  };

  parse = function(expression) {
    if (expression === null || expression.length === 0) {
      return expression;
    }
    var whitespaceRemovedExpression = expression.replace(/\s/g, "");
    return parsePlusSeparatedExpression(whitespaceRemovedExpression);
  };

  return {
    parseArithmeticExpression: parse
  };
})();
