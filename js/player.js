class Player{
    constructor(){
    }
    getCount(){
        var playercountref = db.ref('playercount');
        playercountref.on("value",function(data){
            playercount = data.val();
        })
    }
    updateCount(count){
        db.ref('/').update({
            playercount:count
        })
        
    }
    update(name){
        var playerIndex = "player"+playercount;
        db.ref(playerIndex).set({
            name:name
        })
    }
}