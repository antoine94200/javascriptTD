(function(window, undefined) {
  var dictionary = {
    "ad81e5c2-3f8b-4d18-8b99-d55f34119a4a": "Création recette 4",
    "1ec1e7a4-b311-4bef-8dec-451c45425ffb": "Menu",
    "d9f1fae5-9bf0-478c-811b-0a02d0b3fefc": "Création recette 3",
    "8c0eca62-ed7b-4fec-8c16-cafa24a5e3b8": "Création recette 2",
    "2cd48f3c-16fc-48df-8c1f-334c5f83c0bf": "Création recette 1",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "HOME",
    "cd8c89c9-b2f8-4bee-9ce0-4286166c626d": "liste des recettes",
    "83d60dd0-57e2-44c6-b8a9-6b8bf76f0d6a": "Affichage recette 1",
    "21be5c82-dd3d-49d2-b072-25d8cbd3cacc": "Liste de courses",
    "8c85132b-837e-45b1-bb02-a0a001a4a634": "Instalation",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);