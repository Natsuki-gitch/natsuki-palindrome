// 文字列を逆順にして返す
function reverse(string) {
  return Array.from(string).reverse().join("");
}



function palindrome(string) {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);

}

function Phrase(content) {
  this.content = content;

this.palindrome = function palindrome() {
  let processedContent = this.content.toLowerCase();
  return processedContent = reverse(processedContent);
  }}

function Phrase(content) {
  this.content = content;

this.louder = function louder() {
  return this.content.toUpperCase();
}}


function TranslatedPhrase(content,translation) {
  this.content = content;
  this.translation = translation;
  
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // パリンドロームのテスト用に変換した訳文を返す
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}


