
function PlayersService(callback) {
    var playersData = [];
    var myTeamData = [];
    var filteredPlayers = [];

    this.getMyTeam = function () {
        return myTeamData
    }

    this.getPlayersData = function () {

        return playersData
    }

    var position = [

        {
            QB: "Quarterback"
        }, {
            RB: "Running Back"
        }, {
            WR: "Wide Reciever"
        }, {
            TE: "Tight End"
        }, {
            K: "Kicker"
        }, {
            ST: "Special Teams"
        }, {
            DST: "Defensive Special Teams"
        }, {
            DB: "Defensive Back"
        }, {
            DL: "Defensive Line"
        }, {
            LB: "Linebacker"
        }, {
            TQB: "undefined"
        }
    ]
    ///////////////Draw Aid to Roster///////////////
    this.getPlayersByName = function (name) {
        return playersData.filter(function (name) {
            if (player.name == name) {
                return true;
            }
        });
    }

    this.getPlayersByTeam = function (teamName) {
        return playersData.filter(function (player) {
            if (player.team == teamName) {
                return true;
            }
        });
    }

    this.getPlayersByPosition = function (position) {
        return playersData.filter(function (position) {
            if (player.position == position) {
                return true;
            }
        });
    }
    ////////////////Selection Buttons///////////////////
    this.addToTeam = function (position) {
        var filteredPlayer = getPlayersByPosition(playersData, position)
        if (
            !filteredPlayer ||
            getPlayersByPosition(myTeamData, position) ||
            myTeamData.length >= 11
        ) { return }
        myTeamData.push(filteredPlayer)
    }
    //////////////Search Buttons/////////////////
    this.searchByName = function (name) {
        var filteredPlayers = playersData.filter(function (name) {
            if (player.name === true) {
                return true;
            }
        });
        console.log(filteredPlayers);
    }

    this.searchByTeam = function (team) {
        var filteredPlayers = playersData.filter(function (team) {
            if (player.team === true) {
                return true;
            }
        });
        console.log(filteredPlayers);
    }

    this.searchByPosition = function (position) {
        var filteredPlayers = playersData.filter(function (position) {
            if (player.position === true) {
                return true;
            }
        });
        console.log(filteredPlayers);

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
