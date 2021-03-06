// Generated by CoffeeScript 1.10.0
(function() {
  var Tobopomo, layout, root, tsi;

  tsi = require("../data/tsi.json");

  root = typeof global !== "undefined" && global !== null ? global : this;

  layout = {
    "31": "\n",
    "33": "!",
    "34": "\"",
    "35": "#",
    "36": "$",
    "37": "%",
    "38": "&",
    "39": "'",
    "40": "(",
    "41": ")",
    "42": "*",
    "43": "+",
    "44": "ㄝ",
    "45": "ㄦ",
    "46": "ㄡ",
    "47": "ㄥ",
    "48": "ㄢ",
    "49": "ㄅ",
    "50": "ㄉ",
    "51": "ˇ",
    "52": "ˋ",
    "53": "ㄓ",
    "54": "ˊ",
    "55": "˙",
    "56": "ㄚ",
    "57": "ㄞ",
    "58": ":",
    "59": "ㄤ",
    "60": "<",
    "61": "=",
    "62": ">",
    "63": "?",
    "64": "@",
    "91": "[",
    "92": "\\",
    "93": "]",
    "94": "^",
    "95": "_",
    "96": "`",
    "97": "ㄇ",
    "98": "ㄖ",
    "99": "ㄏ",
    "100": "ㄎ",
    "101": "ㄍ",
    "102": "ㄑ",
    "103": "ㄕ",
    "104": "ㄘ",
    "105": "ㄛ",
    "106": "ㄨ",
    "107": "ㄜ",
    "108": "ㄠ",
    "109": "ㄩ",
    "110": "ㄙ",
    "111": "ㄟ",
    "112": "ㄣ",
    "113": "ㄆ",
    "114": "ㄐ",
    "115": "ㄋ",
    "116": "ㄔ",
    "117": "ㄧ",
    "118": "ㄒ",
    "119": "ㄊ",
    "120": "ㄌ",
    "121": "ㄗ",
    "122": "ㄈ",
    "123": "{",
    "124": "|",
    "125": "}",
    "126": "~"
  };

  Tobopomo = (function() {
    var char_seperater, normalise;

    function Tobopomo() {}

    normalise = function(string) {
      return string.replace(/ /g, '');
    };

    char_seperater = function(string) {
      var i, index, j, k, l, len, m, n, o, output, p, ref, ref1, ref2, ref3, ref4, splitted_string, temp, total, traversed;
      string = normalise(string);
      output = [];
      total = 0;
      traversed = 0;
      temp = "";
      splitted_string = string.split(/["ˊ"|"ˇ"|"ˋ"|"˙"]/);
      for (index = k = 0, len = splitted_string.length; k < len; index = ++k) {
        i = splitted_string[index];
        total = total + i.length;
        if (index === 0) {
          if (tsi[i + string[i.length]] === void 0 || tsi[i + string[i.length]][0].length > 1) {
            if (i.length === string.length) {
              for (j = l = 0, ref = i.length; 0 <= ref ? l < ref : l > ref; j = 0 <= ref ? ++l : --l) {
                temp = i.slice(traversed, +j + 1 || 9e9);
                if (tsi[temp] && tsi[temp][0].length === 1 && j < (i.length - 1)) {
                  continue;
                } else if (tsi[temp] && tsi[temp][0].length === 1 && j === (i.length - 1)) {
                  output.push(temp);
                } else if (tsi[temp] === void 0 && j === (i.length - 1)) {
                  output.push(i.slice(traversed, j));
                  output.push(i[j]);
                } else {
                  output.push(i.slice(traversed, j));
                  traversed = j;
                }
              }
            } else {
              for (j = m = 0, ref1 = i.length; 0 <= ref1 ? m < ref1 : m > ref1; j = 0 <= ref1 ? ++m : --m) {
                temp = i.slice(traversed, +j + 1 || 9e9);
                if (tsi[temp] && tsi[temp][0].length === 1 && j < (i.length - 1)) {
                  continue;
                } else if (tsi[i.slice(traversed, +(i.length - 1) + 1 || 9e9) + string[index + i.length]] !== void 0 && tsi[i.slice(traversed, +(i.length - 1) + 1 || 9e9) + string[index + i.length]][0].length === 1) {
                  output.push(i.slice(traversed, +(i.length - 1) + 1 || 9e9) + string[index + i.length]);
                  break;
                } else if (tsi[temp] && j === (i.length - 1)) {
                  output.push(i.slice(traversed, +j + 1 || 9e9) + string[index + i.length]);
                } else if (tsi[temp] === void 0 && j === (i.length - 1)) {
                  output.push(i.slice(traversed, j));
                  output.push(i[j] + string[index + i.length]);
                } else {
                  output.push(i.slice(traversed, j));
                  traversed = j;
                }
              }
            }
          } else if (tsi[i + string[index + i.length]][0].length === 1) {
            output.push(i + string[index + i.length]);
          }
        } else if (string[index + total] === void 0) {
          temp = 0;
          for (j = n = 0, ref2 = i.length; 0 <= ref2 ? n < ref2 : n > ref2; j = 0 <= ref2 ? ++n : --n) {
            temp = i.slice(traversed, +j + 1 || 9e9);
            if (tsi[temp] && tsi[temp][0].length === 1 && j < (i.length - 1)) {
              continue;
            } else if (tsi[temp] && tsi[temp][0].length === 1 && j === (i.length - 1)) {
              output.push(i.slice(traversed, +j + 1 || 9e9));
            } else if (tsi[temp] === void 0 && j === (i.length - 1)) {
              output.push(i.slice(traversed, j));
              output.push(i[j]);
            } else {
              output.push(i.slice(traversed, j));
              traversed = j;
            }
          }
        } else {
          if (tsi[i + string[index + total]] === void 0) {
            temp = 0;
            for (j = o = 0, ref3 = i.length; 0 <= ref3 ? o < ref3 : o > ref3; j = 0 <= ref3 ? ++o : --o) {
              temp = i.slice(traversed, +j + 1 || 9e9);
              if (tsi[temp] && tsi[temp][0].length === 1 && j < (i.length - 1)) {
                continue;
              } else if (j === (i.length - 1)) {
                output.push(temp + string[index + total]);
              } else {
                output.push(i.slice(traversed, j));
                traversed = j;
              }
            }
          } else if (tsi[i + string[index + total]][0].length > 1) {
            temp = 0;
            for (j = p = 0, ref4 = i.length; 0 <= ref4 ? p < ref4 : p > ref4; j = 0 <= ref4 ? ++p : --p) {
              temp = i.slice(traversed, +j + 1 || 9e9);
              if (tsi[temp] && tsi[temp][0].length === 1 && j < (i.length - 1)) {
                continue;
              } else if (tsi[temp] === void 0 && j === (i.length - 1)) {
                output.push(i.slice(traversed, j));
                output.push(i[j] + string[index + total]);
              } else if (j === (i.length - 1)) {
                output.push(i.slice(traversed, +j + 1 || 9e9) + string[index + total]);
              } else {
                output.push(i.slice(traversed, j));
                traversed = j;
              }
            }
          } else if (tsi[i + string[index + total]][0].length === 1) {
            output.push(i + string[index + total]);
          }
        }
      }
      return output;
    };

    root.tobopomo = function(string) {
      var i, k, output, ref;
      string = normalise(string);
      output = [];
      for (i = k = 0, ref = string.length; 0 <= ref ? k < ref : k > ref; i = 0 <= ref ? ++k : --k) {
        if (layout[(string[i].charCodeAt(0)).toString()]) {
          output.push(layout[(string[i].charCodeAt(0)).toString()]);
        } else {
          output.push(string[i]);
        }
      }
      return char_seperater(output.join(""));
    };

    root.tokanji = function(input, limit) {
      var index, k, output, ref, string, traversed;
      if (limit == null) {
        limit = 5;
      }
      traversed = 0;
      output = [];
      if (Array.isArray(input)) {
        for (index = k = 0, ref = input.length; 0 <= ref ? k < ref : k > ref; index = 0 <= ref ? ++k : --k) {
          string = input.slice(traversed, +index + 1 || 9e9).join("");
          if (tsi[string] && index < (input.length - 1)) {
            continue;
          } else if (tsi[string] && index === (input.length - 1)) {
            output.push(tsi[string].slice(0, limit));
          } else if (tsi[string] === void 0 && index === (input.length - 1)) {
            string = input.slice(traversed, index).join("");
            output.push(tsi[string].slice(0, limit));
            output.push(tsi[input[index]].slice(0, limit));
          } else {
            string = input.slice(traversed, index).join("");
            output.push(tsi[string].slice(0, limit));
            traversed = index;
          }
        }
        return output;
      } else {
        string = normalise(input);
        return tsi[string].slice(0, limit);
      }
    };

    String.prototype.tobopomo = function() {
      return tobopomo(this);
    };

    String.prototype.tokanji = function(limit) {
      return tokanji(this, limit);
    };

    Array.prototype.tokanji = function(limit) {
      return tokanji(this, limit);
    };

    return Tobopomo;

  })();

  module.exports = Tobopomo;

}).call(this);
