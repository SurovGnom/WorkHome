let currentCurrency = prompt("Яку Валюту вам потрібно? ");
let currency = {"usd": 41.4,"euro":43.8,"pound":52.4 ,"uah" : 1};
for (let i = 10; i <= 100; i+=10) {
    switch (currentCurrency) {
        case "usd":
            let dollar_currency = i * currency["usd"];
            console.log(`${i}$` + " = " + `${dollar_currency}₴`);
            break;
        case "euro":
            let euro_currency = i * currency["euro"];
            console.log(`${i}€` + " = " + `${euro_currency}₴`);
            break;
        case "pound":
            let pound_currency = i * currency["pound"];
            console.log(`${i}£` + " = " + `${pound_currency}₴`);
            break;
        case "uah":
            let uah_currency = i * currency["uah"];
            console.log(`${i}₴` + " = " +`${uah_currency}₴`);
    }
}
