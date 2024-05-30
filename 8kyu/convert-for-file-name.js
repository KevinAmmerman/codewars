function convertForFileName(string) {
    const fileName = string.split(" ").join('-').toLowerCase();
    console.log(fileName)
}

convertForFileName('Filter Elements from Array')
