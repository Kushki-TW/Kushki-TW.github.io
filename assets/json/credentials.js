function credentials() {
    var credentials = {
        CLP: 'a264ff9e4d854ec98a52d8282af3de92',
        COP: 'd6b3e17702e64d85b812c089e24a1ca1',
        PEN: '1000000633845053099215659713079',
        MXN: 'd4ccbbdf19f64f3f9e0780b0a58c776d',
        USD: '81c01578b6924d27ab4dd5bb907d758d'
    }
    const currency = localStorage.getItem('currency') ?? 'CLP';
    return currency ? credentials[currency] : '';
}

function documentType() {
    var documentType = {
        CLP: 'RUT',
        COP: 'CC',
        PEN: 'DNI',
        MXN: 'CURP',
        USD: 'CI'
    }
    const currency = localStorage.getItem('currency') ?? 'CLP';
    return currency ? documentType[currency] : '';
}
