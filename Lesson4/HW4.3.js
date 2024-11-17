let birthday = prompt("Ваш рік народження?",'');
if (birthday) {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let age;
    let dob = new Date(birthday);

    age = today.getFullYear() - dob.getFullYear();
    let city = prompt("В якому місті ти живеш ?", "");
    if(city){
        let ageMessage = `Ваш вік - ${age}`;
        let cityMessage;
        switch(city){
    case "Київ":
        cityMessage = `Ти живеш в столиці України`;
        break;
    case "Вашингтон":
        cityMessage =`Ти живеш в столиці США`;
        break;
    case "Лондон":
        cityMessage = `Ти живеш в столиці Сполученого Королівства`;
        break;
    default:
        cityMessage = `Ти живеш в місті ${city}`;
        break;
}

        let sport = prompt("Твій улюбленний вид спорту ?" , "");
        if (sport){
            let sportMessage ;
            let soccer = "Андрій Шевченко";
            let formula  = "Фернандо Алонсо";
            let golf = "Тайгер Вудз";
                switch(sport){
            case "Футбол":
                sportMessage = `Круто! Хочеш стати ${soccer}?`;
                break;
            case "Формула":
                sportMessage = `Круто! Хочеш стати ${formula}?`;
                break;
            case "Гольф":
                sportMessage = `Круто! Хочеш стати ${golf}?`;
                break;
            default:
                sportMessage = "Ти найкращий у всьому ! "
                break;
            }
            alert(`${ageMessage} \n${cityMessage} \n${sportMessage}`);
        }else{
            alert(`Шкода, що Ви не захотіли ввести свій(ю) вид спорту `)
        }
    }else{
        alert(`Шкода, що Ви не захотіли ввести свій(ю) місто`)
    }
}else{
    alert(`Шкода, що Ви не захотіли ввести свій(ю) день народження`)
}











//
//
//
//

//


// alert(`Ваш вік -${age}\n${city}\n${sport}`)