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
            var self = this;
            var searchText = $('#search').val();
            console.log("search:", searchText);
            SC.get('/tracks', {
              q: searchText
                }).then(function(tracks){
                  console.log("==SC.get:tracks==");
                  console.log("tracks:", tracks);
                  self.trackList = tracks;            // store in app
                  self.displayTrackList(tracks);      // callback that displays track titles
                  self.activateListItems();           //callback that activates title onlist
                });
        },


    }; // CLOSE soundBox

    soundBox.initialize();
}); // CLOSE jQuery
