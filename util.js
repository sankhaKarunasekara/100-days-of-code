function getExtentionFromFileName(fileName) {
    //getThe file type from fileName
    var re = /(?:\.([^.]+))?$/;

    //unknown type
    var fileFormat = "undefined";
    fileFormat = re.exec(fileName)[1];

    if (fileFormat === undefined) {
        return "";
    } else {
        return fileFormat.toLowerCase();
    }
}

function getImportDateFormat(arr) {

    let filteredArr = arr.filter(item => item != null);
    let javaSimpleDateFormat = "";
   
    try {

        const possibleFormats = getPossibleDateFormats(filteredArr);
        const numberOfPossibleDateFormats = possibleFormats.length;
        const mostPossibleFormat = possibleFormats.pop();

        if (numberOfPossibleDateFormats == 1) {
            javaSimpleDateFormat = moment().toJDFString(mostPossibleFormat);
        } else {
            javaSimpleDateFormat = "";
        }

    } catch (e) {
        javaSimpleDateFormat = "";
    }

    return javaSimpleDateFormat;
}

function getPossibleDateFormats(arr, preferredOrder) {

    const formats = arr
        .map(elem => moment.parseFormat(elem)).sort((a, b) =>
            arr.filter(v => v === a).length -
            arr.filter(v => v === b).length
        );

    const filteredFormats = Array.from(new Set(formats));

    return filteredFormats;
}