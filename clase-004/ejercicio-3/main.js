exports.calculoPeso = function(munnecas, payaso) {
    const pesoMunneca = 75;
    const pesoPayaso = 112;
    const calculoPayaso = payaso * pesoPayaso;
    const calculoMunneca = munnecas * pesoMunneca;
    return calculoPayaso + calculoMunneca
}