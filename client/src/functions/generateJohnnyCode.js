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

const generateJhonnyCode = (plainText) => {
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
                    if (line[1] === "HLT") {
                        return `10000`
                    } else {
                        var argument = parseInt(line[2]).toString()
                        if (isNaN(parseInt(line[1]))) {
                            if (isNaN(parseInt(line[2]))) return reject({ error: { message: "argument is not a number: " + line[2], line } })
                            if (line[1] !== "HLT" && !line[2]) return reject({ error: { message: "missing line reference on command: " + line[1], line } })
                            if (!operations[line[1]]) return reject({ error: { message: "Command " + line[1] + " not found.", line } })
                            while (argument.length < 3) {
                                argument = "0" + argument
                            }
                            return `${operations[line[1]]}${argument}`
                        } else {
                            var number = parseInt(line[1]).toString()
                            while (argument.length < 3) {
                                number = "0" + number
                            }
                            return number;
                        }
                    }

                })

        var finalArray = Array.from({ length: 1000 }, (_, i) => { if (codeSlicedRowFormated[i]) { return codeSlicedRowFormated[i]; } else { return '000'; } })
        return resolve(finalArray.join("\n"))
    })
}

module.exports = generateJhonnyCode
