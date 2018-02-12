PlayerController = function PlayerController() {
    var playerService = new PlayersService(drawRoster)

    var playerRosterElem = document.getElementById("player-roster")
    var myTeamElem = document.getElementById("my-team")

    this.search = function search(event) {
        event.preventDefault();
        var formData = event.target
        var name = formData.name.value
        var position = formData.position.value
        var team = formData.team.value

    }

    function getMyTeam() {

    }

    function addToTeam(){
        
    }
    function loadPlayersData() {
        playerService.loadPlayersData(drawRoster)

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
            <button class = "btn btn-primary" onclick="app.controllers.playerCtrl.addToTeam(${player.position})">Draft Player</button>
            </div>
            `
        }

        this.searchByName = function searchByName(name) {
            playerService.searchByName(name)
            drawRoster(playerService.getMyTeam())
        }

        playerRosterElem.innerHTML = template
    }

    function drawMyTeam(arr) {
        var template = ''
        for (var i = 0; i < arr.length; i++) {
            var player = arr[i]

            template += `
            <h4>My Team roster selection</h4>
            <h4><b>Name:</b> ${player.fullname}</h4>
            <P><b>Team:</b> ${player.pro_team}</P>
            <p><b>Position:</b> ${player.position}</p>
            <button class = "btn btn-primary" onclick="app.controllers.playerCtrl.removeFromTeam(${player.position})">Fire Player</button>
            `
        }
        myTeamElem.innerHTML = template
    }

    function drawMyTeam(arr) {
        var template = ''
        for (var i = 0; i < arr.length; i++) {
            var player = arr[i]
            //insert the "no info" options here
            template += `  
             <h4>Player roster selection</h4>
            <h4><b>Name:</b> ${player.firstname}</h4>
            <P><b>Team:</b> ${player.pro_team}</P>
            <p><b>Position:</b> ${player.position}</p>
            <button class = "btn btn-primary" onclick="app.controllers.playerCtrl.removeFromTeam(${player.position})">Draft Player</button>

            `
        }

        myTeamElem.innerHTML = template
    }
    loadPlayersData()

}