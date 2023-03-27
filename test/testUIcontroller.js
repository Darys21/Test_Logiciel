const assert = require('assert');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { UIController } = require('../app');

describe('UIController', function() {

  // Simulation fake answer 
  beforeEach(function() {
    const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
    global.window = dom.window;
    global.document = window.document;
  });

  describe('#inputField()', function() {
    it('should return an object containing references to input fields', function() {
      const inputs = UIController.inputField();
      assert(inputs.genre instanceof HTMLElement);
      assert(inputs.playlist instanceof HTMLElement);
      assert(inputs.tracks instanceof HTMLElement);
      assert(inputs.submit instanceof HTMLElement);
      assert(inputs.songDetail instanceof HTMLElement);
    });
  });

  describe('#createGenre()', function() {
    it('should create a new genre option in the select list', function() {
      UIController.createGenre('Rock', 'rock');
      const option = document.querySelector('#select_genre option:last-of-type');
      assert(option.textContent === 'Rock');
      assert(option.value === 'rock');
    });
  });

  describe('#createPlaylist()', function() {
    it('should create a new playlist option in the select list', function() {
      UIController.createPlaylist('Classic Rock', 'classic-rock');
      const option = document.querySelector('#select_playlist option:last-of-type');
      assert(option.textContent === 'Classic Rock');
      assert(option.value === 'classic-rock');
    });
  });

  describe('#createTrack()', function() {
    it('should create a new track list item in the song list', function() {
      UIController.createTrack('abc123', 'Stairway to Heaven');
      const listItem = document.querySelector('.song-list a:last-of-type');
      assert(listItem.textContent === 'Stairway to Heaven');
      assert(listItem.id === 'abc123');
    });
  });

  describe('#createTrackDetail()', function() {
    it('should create a new track detail element in the song detail div', function() {
      UIController.createTrackDetail('path/to/image.jpg', 'Stairway to Heaven', 'Led Zeppelin');
      const detailDiv = document.querySelector('#song-detail');
      assert(detailDiv.innerHTML.includes('Stairway to Heaven'));
      assert(detailDiv.innerHTML.includes('Led Zeppelin'));
    });
  });

  describe('#resetTrackDetail()', function() {
    it('should clear the song detail div', function() {
      document.querySelector('#song-detail').innerHTML = 'Some song details';
      UIController.resetTrackDetail();
      assert(document.querySelector('#song-detail').innerHTML === '');
    });
  });

  describe('#resetTracks()', function() {
    it('should clear the song list and song detail div', function() {
      document.querySelector('.song-list').innerHTML = '<a href="#" class="list-group-item" id="abc123">Stairway to Heaven</a>';
      document.querySelector('#song-detail').innerHTML = 'Some song details';
      UIController.resetTracks();
      assert(document.querySelector('.song-list').innerHTML === '');
      assert(document.querySelector('#song-detail').innerHTML === '');
    });
  });

  describe('#resetPlaylist()', function() {
    it('should clear the playlist, song list, and song detail div', function() {

        document.querySelector('#select_playlist').innerHTML = '<option value="classic-rock">Classic Rock</option>';
        document.querySelector('.song-list').innerHTML = '<a href="#" class="list-group-item" id="abc123">Stairway to Heaven</a>';
        document.querySelector('#song-detail').innerHTML = 'Some song details';
        UIController.resetPlaylist();



        const playlistSelect = document.querySelector('#select_playlist');
        const songListDiv = document.querySelector('.song-list');
        const songDetailDiv = document.querySelector('#song-detail');


        assert.strictEqual(playlistSelect.innerHTML, '', 'Playlist select field was not cleared');
        assert.strictEqual(songListDiv.innerHTML, '', 'Song list div was not cleared');
        assert.strictEqual(songDetailDiv.innerHTML, '', 'Song detail div was not cleared');

        });
    });

});
