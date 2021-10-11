const form = $("form");
const submit = $(".submit");



submit.click(function(event){
    event.preventDefault();
    var formData = new FormData(form[0]);
   var moneyAll = parseInt(formData.get('moneyAll'));
   var numOfYear = parseInt(formData.get('numOfYear'));
   var perc = parseInt(formData.get('perc'));

   $(".totalProfit").text(calculating(moneyAll,numOfYear, perc));
   $(".totalAmount").text(calculating(moneyAll,numOfYear, perc) + moneyAll);
});

function calculating(money,years, percent){
return (money * (percent * 0.01)) * years;
} 