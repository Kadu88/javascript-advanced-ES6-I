class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
                ${model.negociacoes.map((n) => `

                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>

                `).join('')}
            </tbody>
            
            <tfoot> 
               

                <tr>
                    <td colspan="3">Volume Total - IIEF</td>
                    <td>${
                        (function() {
                            let total = 0;
                            model.negociacoes.forEach(n => total += n.volume);
                            return total;
                        })() 
                    }
                    </td>
                </tr>
                <tr>
                    <td colspan="3">Volume Total - Arrow Full</td>
                    <td>${
                        model.negociacoes.reduce(function(total, n) {
                            return total+n.volume;
                        }, 0.0)
                }</td>
                </tr>

                <tr>
                    <td colspan="3">Volume Total - Arrow Short</td>
                    <td> ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}</td>
                </tr>

            </tfoot>
        </table>

        </p>

        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th colspan="3">Somatório dos valores da tabela acima</th>
                    <th>Total</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
            <tfoot>
                    <tr>
                        <td colspan="3">Quantidade</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colspan="3">Valor</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td colspan="3">Volume</td>
                        <td>-</td>
                    </tr>


            </tfoot>
        `;
    }

    update(model) {
        this._elemento.innerHTML = this._template(model);
    }

    somatorioFor() {

    }
}