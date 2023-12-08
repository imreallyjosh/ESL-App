console.log('js loaded')

let labelIdglobal;
let itemIdglobal;

function labelIdEntryFct(labelId) {
    labelId = document.getElementById('labelIdEntry').value;
    console.log('**Click for Label ID**');
    console.log('Label ID read is ' + labelId);
    labelIdglobal = labelId;
    return labelId;

}

let itemId;

function itemEntryFct(item) {
    let itemId = document.getElementById('itemEntry').value;
    console.log('**Click for Item Entry**')
    console.log('Item ID read is ' + itemId);
    itemIdglobal = itemId;
    return itemId;
}
