const operations = {
    "TAKE": 1,
    "ADD": 2,
    "SUB": 3,
    "SAVE": 4,
    "JMP": 5,
    "TST": 6,
    "INC": 7,
    "DEC": 8,
    "NULL": 9,
    "HLT": 10
}

const generateJhonnyCode = (plainText, fileName) => {
    return new Promise((resolve, reject) => {
        const codeSlicedRow = plainText.split("\n")
        const codeSlicedRowFormated =
            codeSlicedRow
                .map(line => {
                    return line.replace(":", "")
                        .split(" ")
                })
                .sort((a, b) => {
                    return parseInt(a[0]) - parseInt(b[0])
                })
                .map(line => {
                    if (!line[1]) return reject({ error: { message: "Please enter a valid command!", line } })
                    if (!operations[line[1]]) return reject({ error: { message: "Command " + line[1] + " not found.", line } })
                    if (line[1] !== "HLT" && !line[2]) return reject({ error: { message: "missing line reference on command: " + line[1], line } })
                    if (line[1] === "HLT") {
                        return `10000`
                    } else {
                        if (!parseInt(line[2])) return reject({ error: { message: "argument is not a number: " + line[2], line } })
                        var argument = parseInt(line[2]).toString()
                        while(argument.length < 2){
                            argument = "0" + argument
                        }
                        return `${operations[line[1]]}${argument}`
                    }

                })

        var finalArray = Array.from({ length: 1000 }, (_, i) => { if (codeSlicedRowFormated[i]) { return codeSlicedRowFormated[i]; } else { return '000'; } })
        return resolve(finalArray.join("\n"))
    })
}

module.exports = generateJhonnyCode