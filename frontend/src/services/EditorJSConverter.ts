function ConvertParagraph(block): string{
    let id = block.id;
    let textvariant = block.tunes.textVariant;
    let content = block.data.text;

    return `<p id='${id}' class='${textvariant}'>${content}</p>`;
}


function ConvertWarning(block){
    return `<div id="${block.id}" class="alert alert-dismissible fade show alert-warning ${block.tunes.textVariant}" role="alert">
    <h4 class="alert-heading"><i class="bi bi-exclamation-triangle"></i> ${block.data.title}</h4>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <hr/>
    <div>${block.data.message}</div>
  </div>`
}
function ConvertQuote(block){
    let id = block.id;
    let textvariant = block.tunes.textVariant
    let alignment = 'text-' + block.data.alignment == 'left' ? 'start' : block.data.alignment == 'right' ? 'end' : 'center';
    return `
    <blockquote id='${id}' class='${alignment + ' ' + textvariant} fst-italic text-wrap'>
    ${block.data.text}
    </blockquote>
    <p class="quoter">${block.data.caption}</p>
    `;
}
//TableShit
function ConvertToTable(block){
    let id = block.id;
    let textvariant = block.tunes.textVariant;
    let rows = block.data.content;
    let tableHeadHtml = "";
    let TableBodyHtml = [];

    if (block.data.withHeadings && rows[0]){
        tableHeadHtml = tableCellConverter(rows[0], true);
        rows = rows.splice(0, 1);
    }
    TableBodyHtml = rows.map(e=>tableCellConverter(e, false));

    return `<div id="${id}" class="table-responsive ${textvariant}">
            <table class="table">${tableHeadHtml}<tbody>${TableBodyHtml.join('')}</tbody></table>
            </div>`
}
function tableCellConverter(element, isHeading: boolean){
    if (isHeading){
        return `<thead><tr>${element.map(g=>`<th>${g}</th>`).join("")}</tr></thead>`
    }
    else{
        return `<tr>${element.map(g=>`<td>${g}</td>`).join("")}</tr>`
    }
}
//Everything Else
function ConvertToList(block){
    let mainTag = block.data.style == 'ordered' ? 'ol' : 'ul';
    let sub = block.data.items.map(t=>ConvertSubItem(t));
    let variant = block.tunes.textVariant;
    let id = block.id;
    


    return `<${mainTag} id='${id}' class='${variant}'>${sub.join('')}</${mainTag}>`
}
function ConvertSubItem(text){
    return `<li>${text}</li>`
}
function ConvertHeader(block){
    let id = block.id;
    let textvariant = block.tunes.textVariant;
    let content = block.data.text;
    let level = block.data.level

    return `<h${level} id='${id}' class='${textvariant}'>${content}</h${level}>`
}
function Delimiter(id){
    return `<hr id='${id}' />`
}




export function Converter(block){
    switch (block.type){
        case 'paragraph':
            return ConvertParagraph(block);
        case 'header':
            return ConvertHeader(block);
        case 'delimiter':
            return Delimiter(block.id);
        case 'list':
            return ConvertToList(block);
        case 'table': 
            return ConvertToTable(block);
        case 'quote':
            return ConvertQuote(block);
        case 'warning':
            return ConvertWarning(block);
        default: return "";
    }
}