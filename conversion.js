const tasaDeCambio = 1400;

    function convertirMoneda() {
      const cantidad = parseFloat(document.getElementById('cantidad').value);

      if (isNaN(cantidad) || cantidad <= 0) {
        document.getElementById('resultado').textContent = 'Ingrese una cantidad';
        return;
      }

      console.log('Se presiono el botón "Convertir"'); 
      const cantidadConvertida = cantidad * tasaDeCambio;
      document.getElementById('resultado').textContent = `${cantidad} dolares = ${cantidadConvertida.toFixed(2)} pesos argentinos`;
    }

    document.getElementById('cantidad').addEventListener('input', () => {
      const cantidad = parseFloat(document.getElementById('cantidad').value);
      if (!isNaN(cantidad) && cantidad > 0) {
        const cantidadConvertida = cantidad * tasaDeCambio;
        document.getElementById('resultado').textContent = `${cantidad} dolares = ${cantidadConvertida.toFixed(2)} pesos argentinos`;
      } else {
        document.getElementById('resultado').textContent = '';
      }
    });