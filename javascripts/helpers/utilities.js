const printToDOM = (divID, toPrint) => {
    document.getElementById(divID).innerHTML = toPrint;
}

export default { printToDOM };