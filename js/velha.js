var ptLuan = 0;
var ptVisitante = 0;
var gamePaused = false;
var turn = 1

var msgsVictory = ["Heheheha! 😁", "Ja sabia 😏", "Ops.. 👀", "Venci 😄", "Ta facil 🙄", "😙", "Ihh.. 🤔", "Põe no 'hard' pfvr 😅"]
var msgsYouBeatMe = ["Um oponente digno!", "Impossível! 😮", "Ta xitado 😡", "Você é bom 🙂", "Grrr", "😣", "🤬"]

var map = [
    8,8,8,
    8,8,8,
    8,8,8,
]

function chooseBtn(id){
    var pos;

    switch(id){
        case 'b-top-left': pos = 0; break;
        case 'b-top': pos = 1; break;
        case 'b-top-right': pos = 2; break;
        case 'b-left': pos = 3; break;
        case 'b-center': pos = 4; break;
        case 'b-right': pos = 5; break;
        case 'b-bot-left': pos = 6; break;
        case 'b-bot': pos = 7; break;
        case 'b-bot-right': pos = 8; break;
    }

    
    if(map[pos] == 8 && !gamePaused && turn == 1){
        turn == 0
        map[pos] = 1;

        updateButton(id);
        if(verifyWin()) return
        myTurn()
        if(verifyWin()) return
    }

}

function updateButton(id){
    document.getElementById(id).textContent = '1'
}

function myTurn(){
    
    var pos = brain()
    map[pos] = 0

    var id
    switch(pos){
        case 0: id = 'b-top-left'; break;
        case 1: id = 'b-top'; break;
        case 2: id = 'b-top-right'; break;
        case 3: id = 'b-left'; break;
        case 4: id = 'b-center'; break;
        case 5: id = 'b-right'; break;
        case 6: id = 'b-bot-left'; break;
        case 7: id = 'b-bot'; break;
        case 8: id = 'b-bot-right'; break;
    }
    document.getElementById(id).textContent = '0'
    turn == 1
}

function verifyWin(){
    // p 1
    if(map[0]==0 && map[1]==0 && map[2]==0){
        paintBtn('b-top-left', 'b-top', 'b-top-right', 'green')
        updatePoints(0)
        return true
    }else if(map[3]==0 && map[4]==0 && map[5]==0){
        paintBtn('b-left', 'b-center', 'b-right', 'green')
        updatePoints(0)
        return true
    }else if(map[6]==0 && map[7]==0 && map[8]==0){
        paintBtn('b-bot-left', 'b-bot', 'b-bot-right', 'green')
        updatePoints(0)
        return true
    }else if(map[0]==0 && map[3]==0 && map[6]==0){
        paintBtn('b-top-left', 'b-left', 'b-bot-left', 'green')
        updatePoints(0)
        return true
    }else if(map[1]==0 && map[4]==0 && map[7]==0){
        paintBtn('b-top', 'b-center', 'b-bot', 'green')
        updatePoints(0)
        return true
    }else if(map[2]==0 && map[5]==0 && map[8]==0){
        paintBtn('b-top-right', 'b-right', 'b-bot-right', 'green')
        updatePoints(0)
        return true
    }else if(map[0]==0 && map[4]==0 && map[8]==0){
        paintBtn('b-top-left', 'b-center', 'b-bot-right', 'green')
        updatePoints(0)
        return true
    }else if(map[2]==0 && map[4]==0 && map[6] ==0){
        paintBtn('b-top-right', 'b-center', 'b-bot-left', 'green')
        updatePoints(0)
        return true
    }

    // p 2
    if(map[0]==1 && map[1]==1 && map[2]==1){
        paintBtn('b-top-left', 'b-top', 'b-top-right', 'blue')
        updatePoints(1)
        return true
    }else if(map[3]==1 && map[4]==1 && map[5]==1){
        paintBtn('b-left', 'b-center', 'b-right', 'blue')
        updatePoints(1)
        return true
    }else if(map[6]==1 && map[7]==1 && map[8]==1){
        paintBtn('b-bot-left', 'b-bot', 'b-bot-right', 'blue')
        updatePoints(1)
        return true
    }else if(map[0]==1 && map[3]==1 && map[6]==1){
        paintBtn('b-top-left', 'b-left', 'b-bot-left', 'blue')
        updatePoints(1)
        return true
    }else if(map[1]==1 && map[4]==1 && map[7]==1){
        paintBtn('b-top', 'b-center', 'b-bot', 'blue')
        updatePoints(1)
        return true
    }else if(map[2]==1 && map[5]==1 && map[8]==1){
        paintBtn('b-top-right', 'b-right', 'b-bot-right', 'blue')
        updatePoints(1)
        return true
    }else if(map[0]==1 && map[4]==1 && map[8]==1){
        paintBtn('b-top-left', 'b-center', 'b-bot-right', 'blue')
        updatePoints(1)
        return true
    }else if(map[2]==1 && map[4]==1 && map[6] ==1){
        paintBtn('b-top-right', 'b-center', 'b-bot-left', 'blue')
        updatePoints(1)
        return true
    }

    if(map[0]!=8 && map[1]!=8 && map[2]!=8 && map[3]!=8 && map[4]!=8 && map[5]!=8 && map[6]!=8 && map[7]!=8 && map[8]!=8){
        updatePoints(8)
        return true
    }

    return false
}

function paintBtn(btn1, btn2, btn3, color){
    document.getElementById(btn1).style = `background-color: ${color}; color: white`
    document.getElementById(btn2).style = `background-color: ${color}; color: white`
    document.getElementById(btn3).style = `background-color: ${color}; color: white`
}

function updatePoints(player){
    if(player == 0){
        ptLuan += 1;
        document.getElementById('avisos').textContent = msgsVictory[ Math.floor(Math.random() * msgsVictory.length) ] ;
    }else if(player == 1){
        ptVisitante += 1
        document.getElementById('avisos').textContent = msgsYouBeatMe[ Math.floor(Math.random() * msgsYouBeatMe.length) ] ;
    }else if(player == 8){
        document.getElementById('avisos').textContent = "Empate!"
    }

    gamePaused = true
    setTimeout(resetGame, 2000)
    document.getElementById('placar').textContent = `Luan: ${ptLuan} Visitante: ${ptVisitante}`
}

function resetGame(){
    document.getElementById('b-top-left').textContent = '  '
    document.getElementById('b-top').textContent = '  '
    document.getElementById('b-top-right').textContent = '  '
    document.getElementById('b-left').textContent = '  '
    document.getElementById('b-center').textContent = '  '
    document.getElementById('b-right').textContent = '  '
    document.getElementById('b-bot-left').textContent = '  '
    document.getElementById('b-bot').textContent = '  '
    document.getElementById('b-bot-right').textContent = '  '
    document.getElementById('avisos').textContent = ''
    removeBtnPaint()

    map = [
        8,8,8,
        8,8,8,
        8,8,8,
    ]

    gamePaused = false
}

function removeBtnPaint(){
    document.getElementById('b-top-left').style = 'background-color: none'
    document.getElementById('b-top').style = 'background-color: none'
    document.getElementById('b-top-right').style = 'background-color: none'
    document.getElementById('b-left').style = 'background-color: none'
    document.getElementById('b-center').style = 'background-color: none'
    document.getElementById('b-right').style = 'background-color: none'
    document.getElementById('b-bot-left').style = 'background-color: none'
    document.getElementById('b-bot').style = 'background-color: none'
    document.getElementById('b-bot-right').style = 'background-color: none'
    document.getElementById('avisos').textContent = ''
}

function brain(){
    if(map[4]==8) return 4    

    // attack
    if(map[0]==0 && map[1]==0 && map[2]==8) return 2
    if(map[3]==0 && map[4]==0 && map[5]==8) return 5
    if(map[6]==0 && map[7]==0 && map[8]==8) return 8
    if(map[1]==0 && map[2]==0 && map[0]==8) return 0
    if(map[4]==0 && map[5]==0 && map[3]==8) return 3
    if(map[0]==0 && map[3]==0 && map[6]==8) return 6
    if(map[7]==0 && map[8]==0 && map[6]==8) return 6
    if(map[1]==0 && map[4]==0 && map[7]==8) return 7
    if(map[2]==0 && map[5]==0 && map[8]==8) return 8
    if(map[3]==0 && map[6]==0 && map[0]==8) return 0
    if(map[4]==0 && map[7]==0 && map[1]==8) return 1
    if(map[5]==0 && map[8]==0 && map[2]==8) return 2
    if(map[2]==0 && map[4]==0 && map[6]==8) return 6
    if(map[4]==0 && map[6]==0 && map[2]==8) return 2
    if(map[0]==0 && map[4]==0 && map[8]==8) return 8
    if(map[4]==0 && map[8]==0 && map[0]==8) return 0
    if(map[0]==0 && map[2]==0 && map[1]==8) return 1
    if(map[3]==0 && map[5]==0 && map[4]==8) return 4
    if(map[6]==0 && map[8]==0 && map[7]==8) return 7
    if(map[0]==0 && map[6]==0 && map[3]==8) return 3
    if(map[1]==0 && map[7]==0 && map[4]==8) return 4
    if(map[2]==0 && map[8]==0 && map[5]==8) return 5
    if(map[2]==0 && map[6]==0 && map[4]==8) return 4
    if(map[0]==0 && map[8]==0 && map[4]==8) return 4

    // defense
    if(map[0]==1 && map[1]==1 && map[2]==8) return 2
    if(map[3]==1 && map[4]==1 && map[5]==8) return 5
    if(map[6]==1 && map[7]==1 && map[8]==8) return 8
    if(map[1]==1 && map[2]==1 && map[0]==8) return 0
    if(map[4]==1 && map[5]==1 && map[3]==8) return 3
    if(map[0]==1 && map[3]==1 && map[6]==8) return 6
    if(map[7]==1 && map[8]==1 && map[6]==8) return 6
    if(map[1]==1 && map[4]==1 && map[7]==8) return 7
    if(map[2]==1 && map[5]==1 && map[8]==8) return 8
    if(map[3]==1 && map[6]==1 && map[0]==8) return 0
    if(map[4]==1 && map[7]==1 && map[1]==8) return 1
    if(map[5]==1 && map[8]==1 && map[2]==8) return 2
    if(map[2]==1 && map[4]==1 && map[6]==8) return 6
    if(map[4]==1 && map[6]==1 && map[2]==8) return 2
    if(map[0]==1 && map[4]==1 && map[8]==8) return 8
    if(map[4]==1 && map[8]==1 && map[0]==8) return 0
    if(map[0]==1 && map[2]==1 && map[1]==8) return 1
    if(map[3]==1 && map[5]==1 && map[4]==8) return 4
    if(map[6]==1 && map[8]==1 && map[7]==8) return 7
    if(map[0]==1 && map[6]==1 && map[3]==8) return 3
    if(map[1]==1 && map[7]==1 && map[4]==8) return 4
    if(map[2]==1 && map[8]==1 && map[5]==8) return 5
    if(map[2]==1 && map[6]==1 && map[4]==8) return 4
    if(map[0]==1 && map[8]==1 && map[4]==8) return 4

    // Large strategy
    if(map[1]==1){
        if(map[6]==1){
            if(map[0]==8) return 0
            if(map[2]==8) return 2
            if(map[3]==8) return 3
        }else if(map[8]==1){
            if(map[2]==8) return 2
            if(map[5]==8) return 5
            if(map[0]==8) return 0
        }

    }else if(map[3]==1){
        if(map[2]==1){
            if(map[0]==8) return 0
            if(map[1]==8) return 1
            if(map[6]==8) return 6
        }else if(map[8]==1){
            if(map[6]==8) return 6
            if(map[7]==8) return 7
            if(map[0]==8) return 0
        }

    }else if(map[5]==1){
        if(map[0]==1){
            if(map[2]==8) return 2
            if(map[1]==8) return 1
            if(map[8]==8) return 8
        }else if(map[6]==1){
            if(map[7]==8) return 7
            if(map[8]==8) return 8
            if(map[2]==8) return 2
        }

    }else if(map[7]==1){
        if(map[0]==1){
            if(map[6]==8) return 6
            if(map[3]==8) return 3
            if(map[8]==8) return 8
        }else if(map[2]==1){
            if(map[8]==8) return 8
            if(map[5]==8) return 5
            if(map[6]==8) return 6
        }
    }

    // defense corners
    if(map[4]==1){
        if(map[0]==8) return 0
        if(map[2]==8) return 2
        if(map[6]==8) return 6
        if(map[8]==8) return 8
    }

    if(map[0]==1 && map[8]==1){
        if(map[1]==8) return 1
        if(map[3]==8) return 3
    }
    if(map[2]==1 && map[6]==1){
        if(map[1]==8) return 1
        if(map[5]==8) return 5
    }

    do{
        var pos = Math.floor(Math.random() * 8)
    }while(map[pos]!=8)
    return pos;
}


