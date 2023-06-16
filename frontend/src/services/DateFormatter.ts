
export function Format(date){
    return new Intl.DateTimeFormat('hu-HU').format(new Date(date))
}