const a = 10
const b = 7
const c = 1
if (a==0) {
    if (b==0) {
        if (c==0) {
            console.log("Not possible")
        }
    }
}
if (a+b>c) {
    if (a+c>b) {
        if (b+c>a) {
            console.log("Possible Triangle")
        } else {
            console.log("Not Triangle")
        }
    }
}