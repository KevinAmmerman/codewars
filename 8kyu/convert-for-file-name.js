function convertForFileName(string) {
    const fileName = string.split(' ').join('-').toLowerCase();
    console.log(fileName);
}

convertForFileName('Apply Transform Over Each Element in Array');
