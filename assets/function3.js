

const createMidwest = () => {

let teamsToPlay = [];
let round2Winner = [];
let round3Winner = [];





 // creates all elements in HTML to be populated later //




    let midwestDiv = document.createElement('div');
    midwestDiv.classList.add('division');
    bracketContainer.appendChild(midwestDiv);

    for(let i = 0; i < 4; i++){
        let round = document.createElement('div');
        round.classList.add('round');
        midwestDiv.appendChild(round);
    }

    for(let i = 0; i < 8; i++){
        let game = document.createElement('div');
        game.classList.add('game');
        round[8].appendChild(game);
    }
 
    for(let i = 0; i < 4; i++){
        let game = document.createElement('div');
        game.classList.add('game');
        round[9].appendChild(game);
    }

    for(let i = 0; i < 2; i++){
         let game = document.createElement('div');
        game.classList.add('game');
        round[10].appendChild(game);
    }

 
    let game = document.createElement('div');
    game.classList.add('game');
    round[11].appendChild(game);

   


     for(let i = 30; i < 45; i++){
         let team1 = document.createElement('p');
         team1.classList.add('team','team-top');
         team2 = document.createElement('p');
         team2.classList.add('team','team-bottom');
         games[i].appendChild(team1);
         let teamSpacer=document.createElement('li')
         teamSpacer.classList.add('team-spacer')
         games[i].appendChild(teamSpacer)
         games[i].appendChild(team2);
         let gameSpacer =document.createElement('li')
         gameSpacer.classList.add('game-spacer')
         games[i].appendChild(gameSpacer)
     }





     // functions called to decied winner //




   
    const simulateRound2 = (team1, team2) => {
    

        let randomNum = Math.floor(Math.random() * 100);
        let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
    
        if(team1.seed < team2.seed){
            if(randomNum <= oddsOfLoosing){
                round2Winner.push(team2);
                return team2.team;
            } else {
                round2Winner.push(team1);
                return team1.team;
            }
        } else {
            oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
    
            if(randomNum <= oddsOfLoosing){
                round2Winner.push(team1);
                return team1.team;
            } else {
                round2Winner.push(team2);
                return team2.team;
            }
    }
    }
    
    
    const simulateRound3 = (team1, team2) => {
        
        let randomNum = Math.floor(Math.random() * 100);
        let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
    
        if(team1.seed < team2.seed){
            if(randomNum <= oddsOfLoosing){
                round3Winner.push(team2);
                return team2.team;
            } else {
                round3Winner.push(team1);
                return team1.team;
            }
        } else {
            oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
    
            if(randomNum <= oddsOfLoosing){
                round3Winner.push(team1);
                return team1.team;
            } else {
                round3Winner.push(team2);
                return team2.team;
            }
    }
    }
    
    const simulateRound4 = (team1, team2) => {
        
      
    
        let randomNum = Math.floor(Math.random() * 100);
        let oddsOfLoosing = (team1.seed/(team1.seed + team2.seed)) * 100;
    
      
        if(team1.seed < team2.seed){
            if(randomNum <= oddsOfLoosing){
                round4Winner.push(team2);
                return team2.team;
            } else {
                round4Winner.push(team1);
                return team1.team;
            }
        } else {
            oddsOfLoosing = (team2.seed/(team2.seed + team1.seed)) * 100;
    
            if(randomNum <= oddsOfLoosing){
                round4Winner.push(team1);
                return team1.team;
            } else {
                round4Winner.push(team2);
                return team2.team;
            }
    }
    }



// loops through teams and games to populate with winner //


// populate round 1 with all the teams //

        let q = 60;
        for(let i = 0; i < 16; i++){
            teams[q].innerHTML = midwestTeams[i].team;
            q++
        }
        
        
        // simulate round 2 //

        let t = 76;
        for(let i = 0; i < 16; i++){
            
            teamsToPlay.push(midwestTeams[i]);
            if(teamsToPlay.length === 2){
                let winner = simulateRound2(teamsToPlay[0], teamsToPlay[1]);
                teams[t].innerHTML = winner;
                t++;
                teamsToPlay = [];
            }
            
        }

        // simulate round 3 //

        let j = 84;
        for(let i = 0; i < 8; i++){
            
            teamsToPlay.push(round2Winner[i]);
            
            if(teamsToPlay.length === 2){
                let winner = simulateRound3(teamsToPlay[0], teamsToPlay[1]);
                teams[j].innerHTML = winner;
                j++;
                teamsToPlay = [];
                
            }
        }

        // simulate round 4 //

        let x = 88;
        for(let i = 0; i < 4; i++){
            
            teamsToPlay.push(round3Winner[i]);
            
            if(teamsToPlay.length === 2){
                let winner = simulateRound4(teamsToPlay[0], teamsToPlay[1]);
                teams[x].innerHTML = winner;
                x++;
                teamsToPlay = [];
            }
        }
        console.log(round);
         
}




generate.addEventListener('click', createMidwest);
