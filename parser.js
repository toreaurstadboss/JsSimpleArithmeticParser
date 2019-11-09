var parserArithmeticSimpleModule = (function() {
  parseMultiplicationSeparatedExpression = function(expression) {
    var numbersString = expression.split("*");
    var numbers = numbersString.map(function(item) {
      return parseInt(item);
    });
    var total = numbers.reduce(multiplyPart);
    function multiplyPart(total, num) {
      return total * num;
    }
    return total;
  };

  parseDivisionSeparatedExpression = function(expression) {
    var numbersString = expression.split("/");
    var numbers = numbersString.map(function(item) {
      return parseMultiplicationSeparatedExpression(item);
    });
    var total = numbers.reduce(dividePart);
    function dividePart(total, num) {
      return total / num;
    }
    return total;
  };

  parseMinusSeparatedExpression = function(expression) {
    var numbersString = expression.split("-");
    var numbers = numbersString.map(function(item) {
      return parseDivisionSeparatedExpression(item);
    });
    var total = numbers.reduce(subtractPart);
    function subtractPart(total, num) {
      return total - num;
    }
    return total;
  };

  parsePlusSeparatedExpression = function(expression) {
    var numbersString = expression.split("+");
    var numbers = numbersString.map(function(item) {
      return parseMinusSeparatedExpression(item);
    });

    var total = numbers.reduce(addPart);
    function addPart(total, num) {
      return total + num;
    }
    console.log(total);
    return total;
  };

  return {
    parseArithmeticExpression: parsePlusSeparatedExpression
  };
})();
