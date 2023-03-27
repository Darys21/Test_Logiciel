const assert = require('assert');
const { APIController } = require('../app');

describe('APIController', function () {
  before(async function () {
    // wait for the APIController to fetch genres from Spotify API
    await APIController.fetchGenres();
  });

  describe('#getGenres()', function () {
    it('should retrieve genres from Spotify API', function () {
      const genres = APIController.getGenres();
      assert(genres.length > 0);
    });
  });

  describe('#searchArtists()', function () {
    it('should retrieve artists from Spotify API', async function () {
      const artists = await APIController.searchArtists('Miles Davis');
      assert(artists.length > 0);
    });
  });

  describe('#getAlbums()', function () {
    it('should retrieve albums from Spotify API', async function () {
      const albums = await APIController.getAlbums('1TfAhjzRBH59B0FVS5iwJv');
      assert(albums.length > 0);
    });
  });

  describe('#getTracks()', function () {
    it('should retrieve tracks from Spotify API', async function () {
      const tracks = await APIController.getTracks('0WwSkZ7LtFUFjGjMZBMt6T');
      assert(tracks.length > 0);
    });
  });
});
