var isMoMHappy = true;

var willGetNewPhone = new Promise(function (resolve, reject) {
  if (isMoMHappy) {
    var phone = {
      brand: 'Samsung',
      color: 'black'
    };
    resolve(phone);
  } else {
    var reason = new Error('Mom is not happy');
    reject(reason);
  }
});

var askMom = function () {
  willGetNewPhone.then(function (fulfilled) {
    console.log(fulfilled);
  }).catch(function (error) {
    console.log(error.message);
  });
};

askMom();