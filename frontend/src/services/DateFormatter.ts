
function FormatMedium(date){
    console.log(new Date(date).toUTCString());
    return new Intl.DateTimeFormat('hu-HU',{dateStyle:"medium", timeZone:"UTC"}).format(new Date(date))
    
}

function FormatTime(date){
    return new Intl.DateTimeFormat('hu-HU',{timeStyle:"short", timeZone:"UTC"}).format(new Date(date))
}


export function ProgramTime(start:Date, end:Date){
   
    if(start==end)
    {
        return [FormatMedium(start)]
    } 
    else if (FormatMedium(start)==FormatMedium(end)) {
        return [FormatMedium(start),FormatTime(start),FormatTime(end)]
    }
    else{
        return[FormatMedium(start),FormatMedium(end)]
    }
}