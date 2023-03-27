// Importer les modules nécessaires pour les tests
const assert = require('assert');
const { UIController, APIController } = require('..app/controllers');
const { JSDOM } = require('jsdom');

// Créer un test pour la méthode init() de APPController
describe('APPController', function () {
  describe('#init()', function () {
    it('should call loadGenres() and log "App is starting" to the console', async function () {

      // Créer une instance de DOM pour les tests
      const dom = new JSDOM(`
        <html>
          <body>
            <div>
              <label for="genre">Genre:</label>
              <select name="genre" id="genre"></select>
            </div>
            <div>
              <label for="playlist">Playlist:</label>
              <select name="playlist" id="playlist"></select>
            </div>
            <div>
              <button id="submit">Submit</button>
            </div>
            <div id="tracks"></div>
            <div id="track-detail"></div>
          </body>
        </html>
      `);

      // Créer une instance des contrôleurs UIController et APIController
      const uiCtrl = new UIController(dom.window);
      const apiCtrl = new APIController();

      // Appeler la méthode init() de APPController
      const appCtrl = APPController(uiCtrl, apiCtrl);
      appCtrl.init();

      // Vérifier si les fonctions loadGenres() ont été appelées
      assert.strictEqual(apiCtrl.getToken.calledOnce, true);
      assert.strictEqual(uiCtrl.storeToken.calledOnce, true);
      assert.strictEqual(apiCtrl.getGenres.calledOnce, true);
      assert.strictEqual(uiCtrl.createGenre.callCount, genres.length);

      // Vérifier si la console affiche le message "App is starting"
      assert.strictEqual(console.log.calledOnce, true);
      assert.strictEqual(console.log.calledWith('App is starting'), true);
    });
  });
});
