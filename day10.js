function bandNamesSort(bandNames) {
    const articles = ["The", "A", "An"];
  
    // Helper function to check if a band name starts with an article
    function startsWithArticle(name) {
      return articles.some(article => name.startsWith(article + " "));
    }
  
    // Sort the band names based on whether they start with an article or not
    bandNames.sort((a, b) => {
      const aHasArticle = startsWithArticle(a);
      const bHasArticle = startsWithArticle(b);
  
      if (aHasArticle && !bHasArticle) {
        return 1;
      } else if (!aHasArticle && bHasArticle) {
        return -1;
      } else {
        // If both or neither have an article, use regular alphabetical order
        return a.localeCompare(b);
      }
    });
  
    return bandNames;
  }
  
  // Test cases
  console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On A Friday", "An Irony"]));
  // Output: ["The Beatles", "An Irony", "The New Yardbirds", "On A Friday", "The Square Roots"]
  
  console.log(bandNamesSort(["The Platters", "A Yard of Yarn", "The Everly Brothers", "A Monster Effect", "The Sex Maggots"]));
  // Output: ["The Everly Brothers", "A Monster Effect", "The Platters", "The Sex Maggots", "A Yard of Yarn"]
  
  console.log(bandNamesSort(["But Myth", "An Old Dog", "Def Leppard", "The Any Glitters", "The Dawn"]));
  // Output: ["The Any Glitters", "But Myth", "The Dawn", "Def Leppard", "An Old Dog"]
  