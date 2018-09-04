function date (date){
    let data = new Date(date);
    let day = data.getDay();
    let Month = data.getMonth();
    if(day < 10 ){
        day = `0${day}`;
    }
    if(Month < 10){
        Month = `0${Month}`; 
    }
    data = `${day}:${Month}:${data.getFullYear()}`;  
    return data;
}



module.exports = {
    date:date
}

 