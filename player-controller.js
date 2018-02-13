function PlayerController() {
    var playersService = new PlayersService(drawRoster)

    var playerRosterElem = document.getElementById("player-roster")
    var myTeamElem = document.getElementById("my-team")

    var searchNameElem = document.getElementsByName("name")
    var searchTeamElem = document.getElementsByName("team")
    var searchPositionElem = document.getElementsByName("position")

    this.searchPosition = function searchPosition(event) {
        event.preventDefault();
        var formData = event.target
        var position = formData.position.value

        var filteredPlayers = playersService.searchByPosition(position)
        drawRoster(filteredPlayers)
    }

    this.searchName = function searchName(event) {
        event.preventDefault();
        var formData = event.target
        var name = formData.name.value

        var filteredPlayers = playersService.searchByName(name)
        drawRoster(filteredPlayers)
    }

    this.searchTeam = function searchTeam(event) {
        event.preventDefault();
        var formData = event.target
        var team = formData.team.value

        var filteredPlayers = playersService.searchByTeam(team)
        drawRoster(filteredPlayers)
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
