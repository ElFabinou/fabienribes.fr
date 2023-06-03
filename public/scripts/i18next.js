i18next.init({
    lng: language,
    debug: false,
    resources: {
        fr: {
            translation: {
                "go-back": "Retour",
                "about-me-encart": "À propos de moi",
                "projects-encart": "Projets",
                "about-me": "Depuis plus jeune, je suis passionné par l'informatique. J'apprécie ce domaine qui pousse à la réflexion. C'est pour cette raison que j'ai rejoint le cursus informatique de l'école d’ingénieurs du CESI. Je suis aujourd'hui en recherche d’un stage à l'étranger, pour étendre mes connaissances et dévouvrir de nouveaux horizons.",
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
                "sysadmin": "Administration système",
                "sysadmin-project": "ABSTERGO",
                "sysprog": "Programmation système",
                "sysprog-project": "EasySave",
                "bigdata": "Big data",
                "bigdata-project": "Analyse de données",
                "algorithmics": "Algorithmique",
                "algorithmics-project": "Optimisation de livraison",
                "web": "Développement web",
                "web-project": "Vite Mon Stage",
                "work-project": "Projet professionnel",
                "internship-project": "Stage de développement",
                "internship-date": "04 avril 2022 - 29 juillet 2022",
                "work-study-project": "Alternance",
                "work-study-date": "Septembre 2022 - Septembre 2025",
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
                },
                "embeded-system-project-paragraph": {
                    "paragraph-part1":"Dans le cadre de notre projet d'école, nous avons été engagés par l'Agence Internationale de Vigilance Météorologique (IAWV) pour une mission ambitieuse. L'idée était de déployer, au sein des océans, des navires de surveillance équipés de stations météorologiques embarquées. Leur rôle? Pour mesurer les paramètres influençant la formation de cyclones ou d'autres catastrophes naturelles.",
                    "paragraph-part2":"Nombre de sociétés utilisant des transports navals avaient accepté de doter leurs bateaux de ces stations embarquées. Il était cependant impératif que ces dernières soient simples, efficaces et facilement manœuvrables par un membre de l'équipage. À cet effet, nous devions prévoir une documentation technique utilisateur.",
                    "paragraph-part3":"La conception du prototype nous avait été confiée par l'un des dirigeants de l'agence, qui avait proposé notre startup, où travaillait son fils ingénieur, pour cette tâche.",
                    "paragraph-part4":"Pour la conception de notre projet, nommé Worldwide Weather Watcher, nous nous étions d'abord concentrés sur l'analyse des besoins. Notre objectif était de concevoir notre station de manière à répondre à toutes les exigences de l'AIVM. Une fois ce besoin bien défini, nous avions entamé la conception des différents diagrammes Sysml/UML. Ceux-ci expliqueraient le fonctionnement complet de notre station, allant des capteurs au stockage des données, en passant par la sélection de différents modes de fonctionnement.",
                    "paragraph-part5":"Dans ce cadre, il était prévu que nous travaillions sur arduino, plateforme de prototypage qui nous aiderait à rendre notre projet à la fois pratique et innovant.",
                },
                "oop-project-paragraph": {
                    "paragraph-part1":"Delivery Manager est une application de gestion de base de données pour une nouvelle entreprise (fictive). Cette dernière nous a contacté afin de concrétiser l'application, pour permettre à leurs employés de manipuler facilement les données de leurs clients, commandes...",
                    "paragraph-part2":"L'application Delivery Manager a été conçu grâce aux langages C++ (pour la partie interface graphique) et SQL (pour les requêtes de base de données). Pour ce faire, nous avons utilisé l'IDE Visual Studio 2019 de Microsoft, le logiciel Microsoft SQL Server Management Studio 18 pour créer la BDD ainsi qu'un hébergement de BDD grâce à Microsoft Azure.",
                },
                "network-project-paragraph": {
                    "paragraph-part1":"Dans le cadre de notre projet de réseau, nous avons été engagés par la société Funkytown pour une mission ambitieuse. L'idée était de déployer, au sein de leur entreprise, un réseau informatique. Leur rôle? Pour permettre aux employés de communiquer entre eux, de partager des fichiers et d'accéder à internet.",
                },
                "web-project-paragraph": {
                    "paragraph-part1":"Dans le cadre de notre projet de développement web, nous avons été engagés par la société Vite Mon Stage pour une mission ambitieuse. L'idée était de déployer, au sein de leur entreprise, un site web. Leur rôle? Pour permettre aux étudiants de trouver un stage plus facilement.",
                    "paragraph-part2":"Aujourd'hui, les étudiants effectuent leurs recherches de stage en entreprise en activant leurs réseaux personnels et professionnels (LinkedIn, anciennes promotions, etc.), en postulant à des offres.",
                    "paragraph-part3":"Afin de rendre cette étape de recherche de stage plus facile et pratique, il serait nécessaire de disposer d'un site web qui regroupe différentes offres de stage et qui permettra de stocker les données des entreprises ayant déjà pris un stagiaire, ou qui en recherchent un.",
                    "paragraph-part4":"Nous sommes chargés de développer ce site web en répondant aux multiples critères demandés dans le cahier des charges.",
                },
                "internship-project-paragraph": {
                    "learn-more": "En savoir plus à propos de Qstomize",
                    "paragraph-part1":"Lors de ce stage, j'ai été chargé de développer une application permettant de dématérialiser des documents utilisés par les salariés lorsqu'ils opèrent sur des véhicules. En plus d'avoir pour but d'être intuitive et facilement utilisable par les opérateurs, cette application permettra une économie de papier et, par conséquent, de coûts (archivage, achat de papier, etc.).",
                },
                "work-study-project-paragraph": {
                    "learn-more": "En savoir plus à propos d'Enedis",
                    "paragraph-part1":"Je suis actuellement en alternance chez Enedis, une entreprise clé dans le paysage énergétique français. Enedis, filiale à part entière d'EDF, se distingue par sa gestion dynamique et efficace de la distribution d'électricité sur le territoire. Il est important de noter que le fait d'appartenir au groupe EDF, l'un des acteurs majeurs de l'énergie non seulement en France, mais aussi sur la scène internationale.",
                    "paragraph-part2":"Dans ce cadre, mes responsabilités sont principalement axées sur le développement de divers outils stratégiques en matière de ressources humaines. Le premier outil que je développe est destiné aux Forces d'Intervention Rapide d'Électricité (FIRE). Les FIRE sont des équipes spécialisées qui interviennent lors de situations d'urgence liées au réseau électrique, comme des coupures de courant importantes ou des dégâts sur le réseau suite à des catastrophes naturelles. Cet outil permet une gestion RH optimisée de ces équipes, en facilitant par exemple la planification de leurs interventions, la gestion de leurs compétences et de leur formation.",
                    "paragraph-part3":"En plus de cela, je travaille également sur un autre outil destiné aux cadres de l'entreprise. Cet outil a pour objectif de leur permettre d'exprimer leurs souhaits et aspirations professionnelles. En fournissant un canal direct pour communiquer ces informations, l'outil aide à optimiser le processus de gestion des talents, ce qui profite à la fois à l'individu et à l'entreprise dans son ensemble.",
                    "paragraph-part4":"Ces projets mettent en lumière non seulement mes compétences techniques, mais aussi ma capacité à comprendre et à répondre aux besoins spécifiques de l'entreprise en matière de gestion des ressources humaines.",
                },
                "sysadmin-project-paragraph": {
                    "paragraph-part1":"En tant qu'administrateurs système, nous sommes chargés de gérer les serveurs de l'entreprise Abstergo afin de garantir leur bon fonctionnement. Pour ce faire, nous devons effectuer des tâches de maintenance, de configuration et de surveillance des serveurs.",
                },
                "sysprog-project-paragraph": {
                    "paragraph-part1":"Nous avons récemment intégré la société d'édition de logiciels ProSoft, une étape importante dans notre parcours professionnel. Relevant directement du Directeur des Systèmes d'Information (DSI), nous avons eu la chance d'assumer la responsabilité d'un projet significatif, \"EasySave\".",
                    "paragraph-part2":"Le projet \"EasySave\" était centré sur le développement d'un logiciel de sauvegarde. L'objectif principal de ce logiciel était de sauvegarder les données de manière différentielle ou complète, en fonction des besoins de l'utilisateur. Cela a signifié que nous avons dû travailler sur une solution capable de sauvegarder uniquement les éléments qui avaient changé depuis la dernière sauvegarde complète, permettant ainsi de gagner du temps et de l'espace de stockage, ou bien de réaliser une sauvegarde intégrale, si nécessaire.",
                    "paragraph-part3":"Un défi clé a été l'exploitation du multithreading pour optimiser l'efficacité et la vitesse du logiciel. Nous avons utilisé le langage C# pour développer ces fonctionnalités multithread, afin d'assurer que notre logiciel puisse effectuer plusieurs opérations en même temps. En permettant au logiciel d'effectuer des tâches simultanément, nous avons réussi à augmenter significativement la performance et la rapidité du processus de sauvegarde.",
                },
                "sysprog-project-paragraph": {
                    "paragraph-part1":"",
                    "paragraph-part2":"",
                    "paragraph-part3":"",
                },
                "school": "Parcours scolaire",
                "lycee": "Lycée",
                "lycee-description": "Bac mention bien avec mention européenne",
                "stage":"Stage à Qstomize",
                "stage-description":"Voir plus dans la section suivante",
                "alternance":"Alternance à Enedis",
                "alternance-description":"Voir plus dans la section suivante",
                "qualities" : {
                    "title": "Qualités",
                    "rigueur": "Rigueur",
                    "rigueur-description": "J'aime que les choses soient bien faites.",
                    "travail-dequipe": "Travail d'équipe",
                    "travail-dequipe-description": "Travailler en équipe de partager les connaissances et de s'entraider.",
                    "autonomie": "Autonomie",
                    "autonomie-description": "Je suis capable de travailler de manière autonome.",
                    "motivation": "Motivation",
                    "motivation-description": "J'aime affronter des problème et les résoudre.",
                },
                "hobbies": {
                    "title": "Loisirs",
                    "informatique": "Informatique",
                    "velo": "Vélo",
                    "voyage": "Voyage (Allemagne, Canada, États-Unis, etc.)",
                },
                "language":{
                    "title": "Langues",
                    "francais": "Français (natif)",
                    "anglais": "Anglais",
                }
            }
        },
        us: {
            translation: {
                "go-back": "Back",
                "about-me-encart": "About me",
                "projects-encart": "Projects",
                "about-me": "Ever since I was young, I've had a passion for computing. It's a field that encourages me to think. That's why I joined the IT course at the CESI engineering school. I'm now looking for a work placement abroad, to broaden my knowledge and discover new horizons.",
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
                "sysadmin": "System administrator",
                "sysadmin-project": "ABSTERGO",
                "sysprog": "System programming",
                "sysprog-project": "EasySave",
                "bigdata": "Big data",
                "bigdata-project": "Data analysis",
                "algorithmics": "Algorithmics",
                "algorithmics-project": "Delivery optimization",
                "web-project": "Vite Mon Stage (Hurry! My Internship)",
                "work-project": "Work project",
                "internship-project": "Development internship",
                "internship-date": "April 4th 2022 - July 29th 2022",
                "work-study-project": "Work-study project",
                "work-study-date": "September 2022 - Septembre 2025",
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
                "embeded-system-project-paragraph": {
                    "paragraph-part1":"As part of our school project, we were engaged by the International Agency for Weather Vigilance (IAWV) for an ambitious mission. The idea was to deploy, within the oceans, surveillance ships equipped with onboard weather stations. Their role? To measure the parameters influencing the formation of cyclones or other natural disasters.",
                    "paragraph-part2":"A number of companies using naval transport had agreed to equip their boats with these onboard stations. However, it was imperative that these be simple, efficient, and easily operable by a crew member. To this end, we were to provide a user technical manual.",
                    "paragraph-part3":"The prototype design had been entrusted to us by one of the agency's leaders, who had proposed our startup, where his engineer son worked, for this task.",
                    "paragraph-part4":"For the design of our project, named Worldwide Weather Watcher, we first focused on the needs analysis. Our goal was to design our station in such a way as to meet all the requirements of the IAWV. Once this need was well defined, we had started designing various Sysml/UML diagrams. These would explain the complete operation of our station, from the sensors to the data storage, through the selection of different operating modes.",
                    "paragraph-part5":"In this context, it was planned that we would work on Arduino, a prototyping platform that would help us make our project both practical and innovative.",
                },
                "oop-project-paragraph": {
                    "paragraph-part1":"Delivery Manager is a database management application for a new company (fictional). This company contacted us to develop the application, to enable their employees to easily manipulate their customer data, orders...",
                    "paragraph-part2":"The Delivery Manager application was designed using C++ (for the graphical interface) and SQL (for database queries). To achieve this, we used Microsoft's Visual Studio 2019 IDE, Microsoft SQL Server Management Studio 18 software to create the DB, and DB hosting via Microsoft Azure.",
                },
                "network-project-paragraph": {
                    "paragraph-part1":"As part of our network project, we were hired by Funkytown to carry out an ambitious mission. The idea was to deploy, within their company, a computer network. Their role? To enable employees to communicate with each other, share files and access the Internet.",
                },
                "web-project-paragraph": {
                    "paragraph-part1":"As part of our web development project, we were engaged by the company 'Quickly My Internship' for an ambitious mission. The idea was to deploy a website within their company. Their role? To enable students to find internships more easily.",
                    "paragraph-part2":"Today, students conduct their searches for internships in companies by activating their personal and professional networks (LinkedIn, former cohorts, etc.), and by applying to offers.",
                    "paragraph-part3":"To make this internship search stage easier and more convenient, it would be necessary to have a website that brings together different internship offers and allows storing the data of companies that have already taken an intern, or are looking for one.",
                    "paragraph-part4":"We are tasked with developing this website while meeting the multiple criteria required in the specifications.",
                },
                "internship-project-paragraph": {
                    "learn-more": "Learn more about Qstomize",
                    "paragraph-part1":"During this intership, I was tasked with developing an application to dematerialise the documents used by employees when operating vehicles. As well as being intuitive and easy for operators to use, this application will save paper and, consequently, costs (archiving, paper purchases, etc.).",
                },
                "work-study-project-paragraph": {
                    "learn-more": "Learn more about Enedis",
                    "paragraph-part1":"I am currently in a work-study program at Enedis, a key company in the French energy landscape. Enedis, a fully-owned subsidiary of EDF, stands out for its dynamic and efficient management of electricity distribution across the territory. It is important to note that being part of the EDF group, one of the major players in energy not only in France, but also on the international stage.",
                    "paragraph-part2":"In this context, my responsibilities are mainly focused on the development of various strategic tools in the field of human resources. The first tool I am developing is intended for the Rapid Electricity Intervention Forces (FIRE). The FIRE teams are specialized groups that intervene in emergency situations related to the electricity network, such as significant power outages or damage to the network following natural disasters. This tool enables optimized HR management of these teams, facilitating, for instance, the planning of their interventions, management of their skills, and their training.",
                    "paragraph-part3":"In addition to this, I am also working on another tool aimed at the company's executives. This tool's goal is to enable them to express their professional wishes and aspirations. By providing a direct channel to communicate this information, the tool aids in optimizing the talent management process, benefiting both the individual and the company as a whole.",
                    "paragraph-part4":"These projects highlight not only my technical skills, but also my ability to understand and respond to the company's specific needs in terms of human resources management.",
                },
                "sysadmin-project-paragraph": {
                    "paragraph-part1":"As system administrators, we are responsible for managing Abstergo's servers to ensure they run smoothly. This involves maintenance, configuration and monitoring of the servers.",
                },
                "sysprog-project-paragraph": {
                    "paragraph-part1":"We recently joined ProSoft, a software editing company, marking a significant milestone in our professional journey. Reporting directly to the Director of Information Systems (DSI), we had the opportunity to take on the responsibility for a significant project, \"EasySave\".",
                    "paragraph-part2":"The \"EasySave\" project focused on developing a backup software. The main goal of this software was to save data in a differential or complete manner, depending on user needs. This meant that we had to work on a solution capable of saving only the elements that had changed since the last complete backup, thus saving time and storage space, or to carry out a full backup if necessary.",
                    "paragraph-part3":"A key challenge was to use multithreading to optimize the efficiency and speed of the software. We used the C# language to develop these multithreaded features, to ensure that our software could perform multiple operations at the same time. By allowing the software to perform tasks simultaneously, we were able to significantly increase the performance and speed of the backup process.",
                },
                "school": "Educational background",
                "lycee":"High school",
                "lycee-description":"A-levels with European honours (more english classes)",
                "stage":"Internship at Qstomize",
                "stage-description":"See more in next section",
                "alternance":"Work-study at Enedis",
                "alternance-description":"See more in next section",
                "qualities": {
                    "title": "Qualities",
                    "rigueur": "Rigor",
                    "rigueur-description": "I like when things are done correctly.",
                    "travail-dequipe": "Teamwork",
                    "travail-dequipe-description": "Working in team facilitates knowledge sharing and mutual assistance.",
                    "autonomie": "Autonomy",
                    "autonomie-description": "I am capable of working autonomously.",
                    "motivation": "Motivation",
                    "motivation-description": "I enjoy tackling problems and finding solutions."
                },
                "hobbies": {
                    "title": "Hobbies",
                    "informatique": "Computer Science",
                    "velo": "Biking",
                    "voyage": "Traveling (Germany, Canada, United States, etc.)"
                },
                "language":{
                    "title": "Languages",
                    "francais": "French (native)",
                    "anglais": "English",
                }
                
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