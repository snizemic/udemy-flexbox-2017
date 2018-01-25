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

let foo = {
  1: 'Steinberg',
  2: 'Ableton',
  3: 'M-Audio'
}

console.log(Object.keys(foo));

let src = 'http://dealer.disk.cz/prodejci?field_vyrobci_prodejce_tid_entityreference_filter=12&_ga=2.26721917.1534467111.1496004265-740443567.1458997491';

let regex = /filter=(.*)&/;
console.log(src.match(regex));


let num = 1;

for (let key in foo) {
  if (key === num.toString()) {
    console.log(foo[key]);
  }
}