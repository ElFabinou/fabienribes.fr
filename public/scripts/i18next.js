i18next.init({
    lng: language,
    debug: false,
    resources: {
        fr: {
            translation: {
                "go-back": "Retour",
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
                "web": "Développement web",
                "web-project": "Vite Mon Stage",
                "work-project": "Projet professionnel",
                "internship-project": "Stage de développement",
                "internship-date": "04 avril 2022 - 29 juillet 2022",
                "alternance-project": "Alternance",
                "alternance-date": "Septembre 2022 - Septembre 2025",
                "used-technologies": "Technologies utilisées",
                "database-project-paragraph": {
                    "paragraph-part1": "En tant que service informatique d'une agence de voyage notre objectif était de concevoir le système de base de données en gérant les services suivants :",
                    "list-item1": "Gestion des clients",
                    "list-item2": "Gestion du personnel",
                    "list-item3": "Gestion de la billetterie",
                    "list-item4": "Gestion des moyens de transport",
                    "list-item5": "Gestion des points d'escale",
                    "list-item6": "Gestion des statistiques",
                    "paragraph-part2": "Nous avons créé un modèle de données conceptuel, puis un modèle de données logique et un modèle de données physiques. Enfin, nous avons créé les arbres algébriques de 3 requêtes et un WBS/OBS de ce livrable.",
                    "paragraph-part3": "Ce projet m'a permis d'accroître mes compétences en SQL ainsi que d'avoir un premier projet informatique au sein de mes études supérieures.",
                }
                
            }
        },
        us: {
            translation: {
                "go-back": "Back",
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
                "web-project": "Vite Mon Stage",
                "work-project": "Work project",
                "internship-project": "Development internship",
                "internship-date": "April 4th 2022 - July 29th 2022",
                "alternance-project": "Work-study project",
                "alternance-date": "September 2022 - Septembre 2025",
                "used-technologies": "Used technologies",
                "database-project-paragraph": {
                    "paragraph-part1": "As the IT department of a travel agency our objective was to design the database system by managing the following services:",
                    "list-item1": "Customer management",
                    "list-item2": "Staff management",
                    "list-item3": "Ticketing management",
                    "list-item4": "Transportation management",
                    "list-item5": "Stopover point management",
                    "list-item6": "Statistics management",
                    "paragraph-part2": "We created a conceptual data model, then a logical data model and a physical data model. Finally, we created the algebraic trees of 3 queries and a WBS/OBS of this deliverable.",
                    "paragraph-part3": "This project allowed me to increase my skills in SQL as well as to have a first IT project within my higher education.",
                },
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