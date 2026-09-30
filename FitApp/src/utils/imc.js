export function calcularIMC(peso, altura){
    const pesoNum  = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum){
    return null;
    }

    const resultado = pesoNum / (alturaNum * alturaNum);
    return resultado.toFixed(1);
}

export function obtenerMensaje(valor){
    if (valor < 18.5) return 'Estás por debajo de tu peso ideal';
    if (valor < 25) return '¡Estás en un rango ecxelente, sigue así!';
    if (valor < 30) return 'Tienes sobrepeso, cuidate un poco más';
    return 'Estas en un rango de riesgo, consulta a un especialista';
}
