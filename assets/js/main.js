function imcCalculation() {
    let inputHeightNumber = parseFloat(document.querySelector("#heightNumber").value)
    let inputWeightNumber = parseFloat(document.querySelector("#weightNumber").value)
    let resultIMCContainer = document.querySelector("#imcresult")
    let resultIMCResultContainer = document.querySelector("#imcresultResume")

    if (inputHeightNumber < 0 || inputWeightNumber < 0) {
        resultIMCContainer.innerHTML = "Merci d'entrer des valeurs positives";
        resultIMCResultContainer.innerHTML = "Calcul impossible";
    } else {
        let resultat = (inputWeightNumber / ((inputHeightNumber * inputHeightNumber) / 10000)).toFixed(2);
        if (isNaN(resultat)) { // changer message NaN sur page Web
            resultIMCContainer.innerHTML = "Calcul non valide";
            resultIMCResultContainer.innerHTML = "Calcul impossible";
        } else {
            resultIMCContainer.innerHTML = resultat;
            switch (true) {
                case resultat < 16.5:
                    resultIMCResultContainer.innerHTML = "Vous êtes en état de dénutrition";
                    resultIMCResultContainer.style.color = "red";
                    break;
                case resultat >= 16.5 && resultat < 18.5:
                    resultIMCResultContainer.innerHTML = "Vous êtes maigre";
                    resultIMCResultContainer.style.color = "orange";
                    break;
                case resultat >= 18.5 && resultat < 25:
                    resultIMCResultContainer.innerHTML = "Votre poids est correct";
                    resultIMCResultContainer.style.color = "green";
                    break;
                case resultat >= 25 && resultat < 30:
                    resultIMCResultContainer.innerHTML = "Vous êtes en surpoids";
                    resultIMCResultContainer.style.color = "orange";
                    break;
                case resultat >= 30:
                    resultIMCResultContainer.innerHTML = "Vous êtes obèse";
                    resultIMCResultContainer.style.color = "red";
                    break;
            }
        }
    }
}


document.getElementsByTagName('h1')[0].style.display = 'none'