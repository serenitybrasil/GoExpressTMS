
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class Pessoa_MotoristaGrid extends Serenity.EntityGrid<Pessoa_MotoristaRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Pessoa_Motorista'; }
        protected getDialogType() { return Pessoa_MotoristaDialog; }
        protected getIdProperty() { return Pessoa_MotoristaRow.idProperty; }
        protected getLocalTextPrefix() { return Pessoa_MotoristaRow.localTextPrefix; }
        protected getService() { return Pessoa_MotoristaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}