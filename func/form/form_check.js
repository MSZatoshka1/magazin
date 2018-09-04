 // --- функции проверки
function check_null(value){
    if(value.length  == 0){
        return {null:true};
    }
}
function check_min(value,min){
    console.log(value);
    if(value.length  < min){
        return {min:true};
    }
}
function check_max(value,max){
    if(value.length  > max){
        return {max:true};
    }
}
function check_email(value){
    let email = /^.+@.+\..+$/igm;
     if(email.test(value)){
        return {email:true};
     }
}
function check_password_2(value1, value2){
     if(value1 != value2){
        return {rassword_2:true};
     }
} 
// --- функции проверки

 

module.exports = {
    form:{
        null:check_null,
        min:check_min,
        max:check_max,
        email:check_email,
        password:check_password_2
    }
}