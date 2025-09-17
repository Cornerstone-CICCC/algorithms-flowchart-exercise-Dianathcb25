const a = 10
const b = 7
const c = 5

if (a+b>c) {
    if (a+c>b) {
        if (b+c>a) {
            console.log("Possible Triangle")
        } else {
            console.log("Not Triangle")
            if (a===0) {
                if (b===0) {
                    if (c===0) {
                        console.log("Not possible")
                    }
                }
            }
        }
    }
}