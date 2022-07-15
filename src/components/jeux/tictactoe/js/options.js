export default class Options {
    constructor() {
      this.cells = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
    }
  
    /**
     * @param x The x location
     * @param y The y location
     * @param player The player either 'x' or 'o'
     * @returns {boolean} True if successful, False if invalid move.
     */
    reset() {
      this.cells = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
    }
  }
  