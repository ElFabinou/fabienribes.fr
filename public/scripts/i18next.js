var language = localStorage.getItem('language') || 'fr';
document.getElementById('currentFlag').style.backgroundImage = "url('/images/flags/" + language + ".svg')";

i18next.init({
    lng: language,
    debug: false,
    resources: {
        us: {
            translation: {
                "work": "COMPUTER ENGENEERING STUDENT",
                "select-language": "Language",
            }
        },
        fr: {
            translation: {
                "work": "ÉTUDIANT EN INGENIERIE INFORMATIQUE",
                "select-language": "Langue",
            }
        }
    }
  },  function(err, t) {
    var localizeElements = document.querySelectorAll('[data-i18n]');
    

    localizeElements.forEach(function(element) {
        var key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
});

document.getElementById('languageSelect').addEventListener('click', function() {
    var options = document.getElementById('languageOptions');
    options.classList.toggle('hidden');
  });
  
  var languageOptions = document.querySelectorAll('#languageOptions button');
  languageOptions.forEach(function(option) {
    option.addEventListener('click', function() {
      var newLanguage = this.getAttribute('data-value');
      var newFlag = this.getAttribute('data-flag');
  
      localStorage.setItem('language', newLanguage);
  
      document.getElementById('currentFlag').style.backgroundImage = 'url(' + newFlag + ')';
      i18next.changeLanguage(newLanguage, updateContent);
  
      document.getElementById('languageOptions').classList.add('hidden');
    });
  });

  function updateContent(err, t) {
    if (err) return console.log('something went wrong loading', err);
    
    var localizeElements = document.querySelectorAll('[data-i18n]');
    localizeElements.forEach(function(element) {
        var key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
}
