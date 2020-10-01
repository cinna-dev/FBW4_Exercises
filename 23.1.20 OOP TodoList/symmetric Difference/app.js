function sym(...args) {
    //console.log(args)
    let [temp, ...rest] = args
    //console.log(rest[0], temp)
    let result = []
   // console.log(result)
    rest.forEach(element => {
        element.forEach(item => {
            temp.forEach(item2 => {
                if (item !== item2) {
                    
                    result.push(item2)
                    console.log(item,item2,result)
                } else {
                    if (result.length) {
                        //console.log(result)
                        result.forEach((item3, i) => {
                            console.log(item2,item3)
                            if (item3 === item2) {
                                result.splice(i, 1)
                            }
                        })
                    }
                }
            })
        })
    });

    return result;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));