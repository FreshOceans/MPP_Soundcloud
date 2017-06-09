// Your SoundCloud enabled jukebox should allow the user to do the following things:
//     • Play a track off of SoundCloud based on its track ID
//     • Pause the currently playing track
//     • Display the following current track information:
//         Artist name with link to his/her profile page
//         Title with link to track's page
//         Description and genre
//         Artwork

$(document).ready(function() {
    console.log("jQuery loaded/document ready");
    tracks:[],

    // ====== initializing SoundCloud API ======
    SC.initialize({
      client_id: 'fd4e76fc67798bfa742089ed619084a6s'
    });
	console.log("SC:", SC);

    var searchItem = $('#searchText').val();
    console.log("== searchItem ==");
    // SC.get('/tracks', {
    //   q: searchItem
    // }).then(function(tracks) {
    //   console.log("== SC.get:tracks ==");
    //   console.log("tracks:", tracks);     // checking results
    //   self.trackList = tracks;            // store in app
    //   self.displayTrackList(tracks);      // callback that displays track titles
    //   self.activateListItems();           // callback that activates titles on list
    // });
    //

});
