/* let promise = new Promise(function (resolve, reject) { // needs a callback //  with twot callbacks //one for success // one for failure
    let randomNum = Math.floor(Math.random() * 50 )+ 1
    if (randomNum < 35) {
        resolve(`worked ${randomNum}`);
    } else {
        reject('Error');
    }
});

promise.then(function (result) { //also needs two callbacks // one for success // one for failure
    console.log(result);
}, function (err) {
    console.log(err);
}); */

/* function get(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true)
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject('reject')
            }
        }
        xhr.onerror = function () {
            reject('error');
        }
        xhr.send()
    })
}

get('https://api.myjson.com/bins/11uh1e').then(function (result) {
    let data =(JSON.parse(result));
    data.shift();
    console.log(data)
    return data
}, function (err) {
    console.log(err);
});
 */


function gettemp(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true)
        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject('reject')
            }
        }
        xhr.onerror = function () {
            reject('error');
        }
        xhr.send()
    })
}

gettemp('https://api.myjson.com/bins/xuvaa').then(function (result) {
    let data = (JSON.parse(result));
   
    console.log(data)
    //return data
}, function (err) {
    console.log(err);
});