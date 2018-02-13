
function PlayersService(callback) {
    var playersData = [];
    var myTeam = [];
    var filteredPlayer = [];

    this.getMyTeam = function () {
        return myTeam
    }

    this.getPlayersData = function () {

        return playersData
    }

    // var position = [

    //     {
    //         QB: "Quarterback"
    //     }, {
    //         RB: "Running Back"
    //     }, {
    //         WR: "Wide Reciever"
    //     }, {
    //         TE: "Tight End"
    //     }, {
    //         K: "Kicker"
    //     }, {
    //         ST: "Special Teams"
    //     }, {
    //         DST: "Defensive Special Teams"
    //     }, {
    //         DB: "Defensive Back"
    //     }, {
    //         DL: "Defensive Line"
    //     }, {
    //         LB: "Linebacker"
    //     }, {
    //         TQB: "undefined"
    //     }
    // ]

    // var teamName = [{
    //     DET = "Detroit"
    // }, {
    //     TB = "Tampa Bay"
    // }, {
    //     MIA = "Maiami"
    // }, {
    //     NYG = "New York Giants"
    // }, {
    //     NYJ = "New York Jets"
    // }, {
    //     PIT = "Pittsburgh Steelers"
    // }, {
    //     CAR = "Carolina Panthers"
    // }, {
    //     TEN = "Tennessee Titans"
    // }, {
    //     CHI = "Chicago Bears"
    // }, {
    //     KC = "Kansas City Chiefs"
    // }, {
    //     GB = "Green Bay Packers"
    // }, {
    //     LAR = "Los Angeles Rams"
    // }, {
    //     LAC = "Los Angeles Chargers"
    // }, {
    //     DAL = "Dallas Cowboys"
    // }, {
    //     BUF = "Buffalo Bills"
    // }, {
    //     DEN = "Denver Broncos"
    // }, {
    //     IND = "Indianapolis Colts"
    // }, {
    //     BAL = "Baltimore Ravens"
    // }, {
    //     PHI = "Phillidelphia Eagles"
    // }, {
    //     ARI = "Arizona Cardinals"
    // }, {
    //     SEA = "Seattle Seahawks"
    // }, {
    //     CLE = "Cleveland Browns"
    // }, {
    //     ATL = "Atlanta Falcons"
    // }, {
    //     MIN = "Minnesota Vikings"
    // }, {
    //     NE = "New England Patriots"
    // }, {
    //     OAK = "Oakland Raiders"
    // }, {
    //     WAS = "Washington Redskins"
    // }, {
    //     TEN = "Tennessee Titans"
    // }, {
        //     HOU = "Houston Texans"
        // }, {
            //     NO = "New Orleans Saints"
            
            // }]




            //////////////Search Buttons/////////////////
   this.searchByName = function (name) {
      var filteredPlayers = playersData.filter(function(player){
          if(player.fullname === name){
              return true
            }
      });
      return filteredPlayers
    }
    
    this.searchByTeam = function (teamName) {
     var filteredPlayers = playersData.filter(function(player) {
            if (player.team ===teamName) {
                return true
            }
        });
        return filteredPlayers
    }
    
    this.searchByPosition = function (position) {
        var filteredPlayers = playersData.filter(function (player) {
            if (player.position === position) {
                return true
            }
        });
        return filteredPlayers
    }
    
    ///////////////Draw Aid to Roster///////////////
    function getPlayersById(arr,id) {
       for (let i = 0; i < arr.length; i++) {
           var player = arr[i];
           if(id == player.id) {
               return player
           }
       }
    }
    ////////////////Selection Buttons///////////////////
    
    this.addToTeam = function (id) {
        var filteredPlayer = getPlayersById(playersData, id);
        if (
            !filteredPlayer ||
            getPlayersById(myTeam, id) ||
            myTeam.length >= 11
        )
     { return }
        myTeam.push(filteredPlayer)
    }

    this.removeFromTeam = function (id) {
        var filteredPlayer = getPlayersById(playersData, id)
        if (!filteredPlayer) {return}
        var i = myTeam.indexOf(filteredPlayer)
        myTeam.splice(i, 1)

    }

    ////////////////constant provided//////////////
    this.loadPlayersData = function (callback) {
        var localData = localStorage.getItem('playersData');
        if (localData) {
            playersData = JSON.parse(localData);
            return callback(playersData);

        }

        var url = "https://bcw-getter.herokuapp.com/?url=";
        var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
        var apiUrl = url + encodeURIComponent(endpointUri);

        $.getJSON(apiUrl, function (data) {
            playersData = data.body.players;
            console.log('Player Data Ready')
            console.log('Writing Player Data to localStorage')
            localStorage.setItem('playersData', JSON.stringify(playersData))
            console.log('Finished Writing Player Data to localStorage')
            callback(playersData)
        });
    }

}
