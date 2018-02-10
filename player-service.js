
function PlayersService(callback) {
    var playersData = [];
    var myTeamData = [];
    var filteredPlayers = [];

    this.getMyTeam = function () {
        return myTeamData
    }

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

    this.searchByName = function (name) {
        var playersData = [];
        var filteredPlayers = playersData.players.fullname

        if (player.fullname === true) {
            return true;
        }
        console.log(filteredPlayers)
    }

    this.searchByTeam = function (team) {
        var player = localData(myTeamData, team)
    }

    this.searchByPosition = function (position) {
        var player = localData(myTeamData, position)

    }


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
