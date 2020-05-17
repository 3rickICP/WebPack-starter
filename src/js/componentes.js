import '../css/componentes.css';

export const saludar = (nombre) => {

    console.log('Creando el Encabezado en el body');
    const miH1 = document.createElement('h1');

    miH1.innerText = `Hola ${nombre} que ubas`;

    document.body.append(miH1);
}