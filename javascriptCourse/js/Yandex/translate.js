function Translate(word, language){
    this.apiKey = "trnsl.1.1.20200322T174734Z.ac2a8850a672679a.192a3cebb449abbc76d2cca43f06c2919d6f74f1";
    this.word = word;
    this.language = language;

    // XHR object
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback){
    // Ajax Transaction
    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
    this.xhr.open("GET", endpoint);
    this.xhr.onload = () => {
        if(this.xhr.status === 200)
        {
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null, text);
        }
        else callback("Bir Hata oluştu", null);
    }
    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord, newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}