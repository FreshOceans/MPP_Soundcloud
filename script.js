$(document).ready(function() {
  console.log("jQuery ready");

    var soundBox = {
        clientId: 'fd4e76fc67798bfa742089ed619084a6',
        musicLibrary: [
        ],
        // ====== Initialize App ======
        initialize: function() {
          var self = this;
          SC.initialize({
            client_id: self.clientId
          });
          console.log("SC:", SC);
          this.getSearchBtn();
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
                  self.displayTrackList(tracks);      // callback that displays track titles
                  self.activateListItems();           //callback that activates title onlist
                });
        },
        displayTrackList: function(songs) {
            console.log("== displayTrackList ==");
            var songTitle;
            for (var i = 0; i < songs.length; i++) {
                songTitle = songs[i].title;
                $('#search_results').append("<li>" + songTitle + "</li");
            };
        },
        activateListItems: function() {
            console.log("== activateListItems ==");
            var self = this;
            $('#search_results').on('click', '.item', function () {
                var id = $(this).data('id');
                console.log('id:', id)
            });

        }




    }; // CLOSE soundBox

    soundBox.initialize();
}); // CLOSE jQuery
