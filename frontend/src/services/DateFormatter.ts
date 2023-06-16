function FormatShort(date){
    return new Intl.DateTimeFormat('hu-HU',{dateStyle:"short"}).format(new Date(date))
}

function FormatMedium(date){
    return new Intl.DateTimeFormat('hu-HU',{dateStyle:"medium"}).format(new Date(date))
}

function FormatTime(date){
    return new Intl.DateTimeFormat('hu-HU',{timeStyle:"short"}).format(new Date(date)) 
}


export function ProgramTime(start:Date, end:Date){
   
    if (FormatShort(start)==FormatShort(end)) {
        return [FormatMedium(start),FormatTime(start),FormatTime(end)]
    }
    else{
        return[FormatMedium(start),FormatMedium(end)]
    }
}