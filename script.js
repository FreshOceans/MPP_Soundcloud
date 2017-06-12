// Play a track off of SoundCloud based on its track ID
// Pause the currently playing track
// Display the following current track information:
//      Artist name with link to his/her profile page
//      Title with link to track's page
//      Description, genre and release date
//      Artwork

$(document).ready(function() {
  console.log("jQuery ready");

    var soundBox = {
        clientId: 'fd4e76fc67798bfa742089ed619084a6',
        musicLibrary: [],
        currentTrack: null,
        // player: null,
        // ====== Initialize App ======
        initialize: function() {
          var self = this;
          SC.initialize({
            client_id: self.clientId
          });
          console.log("SC:", SC);
          self.getSearchBtn();
          self.activateAudioButtons();
        },
        // ======== ACTIVATE SEARCH BUTTON =========
        getSearchBtn: function() {
            var self = this;
            $('#searchBtn').on('click', function(){
              console.log("-- click:search --");
              self.getSongInfo();
            });
        },
          // ======= SEARCH SONG AND DISPLAY ON CONSOLE ========
        getSongInfo: function() {
            console.log("== getSongInfo ==");
            var self = this;
            var searchText = $('#search').val();
            console.log("search:", searchText);
            SC.get('/tracks', {
              q: searchText
                }).then(function(tracks){
                  console.log("==SC.get:tracks==");
                  console.log("tracks:", tracks);
                  self.musicLibrary = tracks;
                  self.displayTrackList(tracks);
                  self.activateListItems();
                });
        },
        // ======= DISPLAY SEARCH RESULTS ======
        displayTrackList: function(songs) {
            console.log("== displayTrackList ==");
            var songTitle;
            for (var i = 0; i < songs.length; i++) {
                songTitle = songs[i].title;
                songId = songs[i].id;
                $('#search_results').append("<li id='" + songId + "'>" + songTitle + "</li>");
            };
        },
        // ======= ACTIVATE SEARCH RESULTS =======
        activateListItems: function() {
            console.log("== activateListItems ==");
            var self = this;
            $('#search_results').children("li").each(function(nextItem){
                $(this).on('click', function(e) {
                    console.log('-- click --');
                    console.log(this.id);
                    console.log("this:", this);
                    self.playSelectedSong(this.id);
                    self.currentTrackInfo(this.id);
                });
            });
        },
        // ======= STREAM TRACK =======
        playSelectedSong: function(trackId) {
            console.log("== playSelectedSong ==");
            SC.stream("/tracks/" + trackId).then(function(player) {
                self.player = player;
                player.play();
            });
        },
        // ======= AUDIO BUTTONS ========
        activateAudioButtons: function() {
            console.log("== activateAudioButtons ==");
            var audioPlayer = $('#audioPlayer');
            $('#playBtn').on('click', function(event){
                console.log('-- playBtn --');
                player.play();
            });
            $('#pauseBtn').on('click', function(event){
                console.log('-- pauseBtn --');
                player.pause();
            });
        },
        // ======= Current Track Info =======
        currentTrackInfo: function(trackId) {
            console.log("trackId:", trackId);
            console.log("== currentTrackInfo ==");
            for (var i = 0; i < this.musicLibrary.length; i++) {
                var nextTrackInfo = this.musicLibrary[i]
                console.log("nextTrackInfo:", nextTrackInfo);
                if (trackId == nextTrackInfo.id) {
                    this.currentTrack = nextTrackInfo;
                    break;
                    console.log("currentTrack:", this.currentTrack);
                }
            }
            var musicTags = $('#trackInfo').children();
            console.log(musicTags);
            musicTags[0].innerText = this.currentTrack.title;
            musicTags[1].innerText = this.currentTrack.artwork_url;
            musicTags[2].innerText = this.currentTrack.description;
            musicTags[3].innerText = this.currentTrack.user;

        }





    }; // CLOSE soundBox

    soundBox.initialize();
}); // CLOSE jQuery
