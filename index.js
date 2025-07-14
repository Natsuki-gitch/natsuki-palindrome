// index.js

// reverse()メソッドをすべてのStringオブジェクトに追加
String.prototype.reverse = function () {
  return Array.from(this).reverse().join("");
};

// Phraseクラス
function Phrase(content) {
  this.content = content;

  this.processedContent = function () {
    return this.content.toLowerCase().replace(/[^a-z]/gi, "");
  };

  this.palindrome = function () {
    return this.processedContent() === this.processedContent().reverse();
  };

  this.louder = function () {
    return this.content.toUpperCase();
  };

  // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }
  
  // コンテンツの文字だけを返す
  this.letters = function letters() {
    let theLetters = [];
    for (let i = 0; i < this.content.length; i++) {
      if (this.content.charAt(i).match(/[a-zA-Z]/)) {
        theLetters.push(this.content.charAt(i));
      }
    }
    return theLetters.join("");
  }

  // フレーズがパリンドロームならtrueを、違うならfalseを返す

  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// TranslatedPhrase クラス（Phraseの継承）
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function () {
    return this.translation.toLowerCase().replace(/[^a-z]/gi, "");
  };

  this.palindrome = function () {
    return this.processedContent() === this.processedContent().reverse();
  };
}

TranslatedPhrase.prototype = new Phrase();

// モジュールエクスポート
module.exports = Phrase;
