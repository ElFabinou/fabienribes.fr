i18next.init({
    lng: language,
    debug: false,
    resources: {
        fr: {
            translation: {
                "work": "ÉTUDIANT EN INGENIERIE INFORMATIQUE",
                "select-language": "Langue",
                "age": "21 ans",
                "school-projet": "Projet scolaire",
                "database": "Base de données",
                "database-project": "Agence de voyage",
                "embeded-system": "Système embarqué",
                "embeded-system-project": "Station météo",
                "oop": "Programmation orientée objet",
                "oop-project": "Logiciel de gestion de commandes",
                "network": "Réseaux",
                "network-project": "Funkytown",
            }
        },
        us: {
            translation: {
                "work": "COMPUTER ENGENEERING STUDENT",
                "select-language": "Language",
                "age": "21 y.o.",
                "school-projet": "School project",
                "database": "Database",
                "database-project": "Travel agency",
                "embeded-system": "Embeded system",
                "embeded-system-project": "Weather station",
                "oop": "Object oriented programming",
                "oop-project": "Order management software",
                "network": "Networks",
                "network-project": "Funkytown",
            }
        },
    }
  },  function(err, t) {
    var localizeElements = document.querySelectorAll('[data-i18n]');
    

    localizeElements.forEach(function(element) {
        var key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
});

document.getElementById('dropdownButton').addEventListener('click', function() {
    var options = document.getElementById('dropdown');
    options.classList.toggle('hidden');
  });
  
  var languageOptions = document.querySelectorAll('#dropdown ul li a');
  languageOptions.forEach(function(option) {
    option.addEventListener('click', function(event) {
      event.preventDefault();
      
      var newLanguage = this.getAttribute('data-value');
      var newFlag = this.querySelector('img').getAttribute('src');
      
      localStorage.setItem('language', newLanguage);
      
      document.getElementById('currentFlag').setAttribute('src', newFlag);
      document.getElementById('dropdown').classList.add('hidden');
      
      i18next.changeLanguage(newLanguage, updateContent);
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
var language = localStorage.getItem('language') || 'fr';
document.getElementById('currentFlag').setAttribute('src', "/images/flags/" + language + ".svg")
i18next.changeLanguage(language, updateContent);