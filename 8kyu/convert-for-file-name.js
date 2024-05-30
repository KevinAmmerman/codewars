function convertForFileName(string) {
    const fileName = string.split(" ").join('-').toLowerCase();
    console.log(fileName)
}

convertForFileName('To Be Or Not To Be')
