PlayerController = function PlayerController() {
    var playersService = new PlayersService(drawRoster)

    var playerRosterElem = document.getElementById("player-roster")
    var myTeamElem = document.getElementById("my-team")

    var searchNameElem = document.getElementsByName("name")
    var searchTeamElem = document.getElementsByName("team")
    var searchPositionElem = document.getElementsByName("position")

    this.search = function search(event) {
        event.preventDefault();
        var formData = event.target
        var name = formData.name.value
        var position = formData.position.value
        var team = formData.team.value
        if (name = playersService.player.name) {
            return player.name;
        } else if (position = playersService.player.position) {
            return player.position;
        } else if (team = playersService.player.team);
        return player.team
    }
}



this.addToTeam = function addToTeam(id) {
    playersService.addToTeam(id)
    drawMyTeam(playersService.getMyTeam())
}

this.removeFromTeam = function removeFromTeam(id) {
    playersService.removeFromTeam(id)
    drawMyTeam(playersService.getMyTeam())
}

function loadPlayersData() {
    playersService.loadPlayersData(drawRoster)

}
//////////////SEARCH BUTTONS////////////////////

this.searchByName = function searchByName(name) {
    playersService.searchByName(name)
    drawRoster(playersService.getMyTeam())
}

this.searchByTeam = function searchByTeam(team) {
    playersService.searchByTeam(team)
    drawRoster(playersService.getMyTeam())
}

this.searchByPosition = function searchByPosition(position) {
    playersService.searchByPosition(position)
    drawRoster(playersService.getMyTeam())
}

function drawRoster(arr) {
    var template = ''
    for (var i = 0; i < arr.length; i++) {
        var player = arr[i]
        //insert the "no info" options here
        template += `  
            <div class="player-card">
            <h5>Player selection</h5>
            <h5><b>Name:</b> ${player.fullname}</h5>
            <P><b>Team:</b> ${player.pro_team}</P>
            <p><b>Position:</b> ${player.position}</p>
            <button class="btn btn-primary" onclick="app.controllers.playerCtrl.addToTeam('${player.id}')">Draft Player</button>
            </div>
            `
    }

    playerRosterElem.innerHTML = template
}

function drawMyTeam(arr) {
    var template = ''
    for (var i = 0; i < arr.length; i++) {
        var player = arr[i]

        template += `
            <div class ="player-card"
            <h5>My Team roster selection</h5>
            <h5><b>Name:</b> ${player.fullname}</h5>
            <P><b>Team:</b> ${player.pro_team}</P>
            <p><b>Position:</b> ${player.position}</p>
            <button class="btn btn-primary" onclick="app.controllers.playerCtrl.removeFromTeam('${player.id}')">Fire Player</button>
            </div>`
    }
    myTeamElem.innerHTML = template
}

function getMyTeam() {

}

loadPlayersData()

}