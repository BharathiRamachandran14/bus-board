const readline=require('readline-sync');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const apiRequest = 'https://api.tfl.gov.uk/StopPoint/490008660N/Arrivals/?app_key=869a70f244e241d7b966ad1f20b8c30a';

async function getBusStopData(api) {
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);

    console.log('Enter the bus stop code: ');
    let stopCode=readline.prompt();

    var nextBus = [];
    
    for (i = 0; i < 5; i++) {
        nextBus[i]={};
        
        nextBus[i]['Bus name']=data[i].lineName
        nextBus[i]['Wait Time']=data[i].timeToStation
        nextBus[i]['Destination']=data[i].destionationName
        nextBus[i]['Route']=data[i].towards
        
    }
    
    console.log(nextBus);



}
getBusStopData(apiRequest);