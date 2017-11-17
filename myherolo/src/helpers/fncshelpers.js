export const isValidDateStr = (str) => {
    var dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
    return str.match(dateReg);
};

export const TitleTransform = (title) => {
    var deleteSpecial = title.replace(/(?!\w|\s)./g, '')
    .replace(/\s+/g, ' ')
    .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
    deleteSpecial = deleteSpecial.split(" ");
    var finished = '';
    for(let i=0;i<deleteSpecial.length;i++){
        if(i !== deleteSpecial.length -1){
        finished+= deleteSpecial[i].charAt(0).toUpperCase() + deleteSpecial[i].slice(1) + " ";
        }
        else{
            finished+= deleteSpecial[i].charAt(0).toUpperCase() + deleteSpecial[i].slice(1);
        }
    }
    return finished;
}

export const CheckForDupTitles = (title,Books) => {
    var dup = false;
    for(let i=0;i<Books.length;i++){
        if(Books[i].Title.toUpperCase() === title.toUpperCase())
            return true;
    }
    return dup;
}