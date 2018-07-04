class NegociacoesView extends View{
    
    constructor(elemento) {
        super(elemento);
    }

    _template(model) {

        let funcionarios = [
            {
                "nome": "Douglas",
                "endereco" : "Rua da esquina, 123",
                "salario" : "4500"
            },
            {
                "nome": "Felipe",
                "endereco" : "Rua da virada, 456",
                "salario" : "5000"
            },
            {
                "nome": "Silvio",
                "endereco" : "Rua da aresta, 789",
                "salario" : "6000"
            }
        ];
        
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
                    <td>
                        ${ //Example: reduce + arrow function
                            model.negociacoes.reduce(
                            (total, n) => total + n.volume, 0.0
                            //Total = valor anterior
                            //n = objeto da iteração atual
                            //0.0 = valor inicial pro total
                        ) 
                        }
                    </td>
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
                        <td>
                            ${model.negociacoes.reduce(function(total, num) { //Example, reduce + function
                                return total + num.quantidade;
                            }, 0)}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">Valor</td>
                        <td>
                            ${model.negociacoes.reduce(function(total, num) { //Example, reduce + function
                                return total + num.valor;
                            }, 0)}
                        </td>
                    </tr>
                    <tr>
                        <td colspan="3">Volume</td>
                        <td> 
                            ${model.negociacoes.reduce(function(total, num) { //Example, reduce + function
                                return total + num.volume;
                            }, 0)}
                        </td>
                    </tr>


            </tfoot>
        </table>

        <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th colspan="3">Testes de métodos de tratamento</th>
                <th>Total</th>
            </tr>
        </thead>
        
        <tbody>
        </tbody>
        <tfoot>
                <tr>
                    <td colspan="3">Reduce com Arrow Funtion (produtório) da quantidade</td>
                    <td>
                        ${model.negociacoes.reduce((produtorio, elemento) => produtorio * elemento.quantidade, 1)}
                    </td>
                </tr>
                <tr>
                    <td colspan="3">Valor</td>
                    <td>
                    -
                    </td>
                </tr>
                <tr>
                    <td colspan="3">Volume</td>
                    <td> 
                    -
                    </td>
                </tr>


        </tfoot>
    </table>




    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th colspan="3">Funcionários</th>
            </tr>
            <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Salário</th>
            </tr>
        </thead>
        
        <tbody>
            ${funcionarios.map((f) => `
            
                <tr>
                    <td>${f.nome}</td>
                    <td>${f.endereco}</td>
                    <td>${f.salario}</td>
                </tr>
            `).join('')}
        </tbody>
        <tfoot>
        </tfoot>
    </table>
        `;
    }
    _somatorioFor(model) {
        return 360;

    }
}