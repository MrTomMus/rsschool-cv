let name = document.querySelector('.codewars-name');
let rank = document.querySelector('.codewars-rank');
let honor = document.querySelector('.codewars-honor');
let tasks = document.querySelector('.codewars-completed-tasks');


async function getStatsCodewars(){
    const url = 'https://www.codewars.com/api/v1/users/MrTomMus';
    const response = await fetch(url)
    const data =  await response.json()

    name.textContent = data.username;
    rank.textContent = data.ranks.overall.name;
    honor.textContent = data.honor;
    tasks.textContent = data.codeChallenges.totalCompleted;

}

getStatsCodewars()


