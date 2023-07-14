// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

function show_magicianss(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians: string[] = ["abcd", "efgh", "ijk"];
  show_magicianss(magicians);