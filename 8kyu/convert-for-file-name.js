function convertForFileName(string) {
    const fileName = string.split(' ').join('-').toLowerCase();
    console.log(fileName);
}

convertForFileName('Calculator with Method Chaining');
