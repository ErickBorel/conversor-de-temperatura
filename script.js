function convertertemp() {

    let grausC = parseFloat(document.querySelector('#valor-celsius').value)
        if (grausC >= 0) {
            let grausf = grausC * 1.8 + 32
            document.querySelector('#resultado-faren').innerHTML = grausf.toFixed(1)
        } else {
            document.querySelector('#resultado-faren').innerHTML = 'Adicone um valor !'
    }
}