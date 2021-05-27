class Player {
  constructor(){}

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      Name:this.name,
      Distance: this.distance
    });
  }
  
  static getPlayerInfo () {
    database.ref ("players").on("value", (data) => {
      allPlayers = data.val() 
    })
  }
}
