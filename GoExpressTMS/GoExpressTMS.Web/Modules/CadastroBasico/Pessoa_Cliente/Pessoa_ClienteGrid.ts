
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class Pessoa_ClienteGrid extends Serenity.EntityGrid<Pessoa_ClienteRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Pessoa_Cliente'; }
        protected getDialogType() { return Pessoa_ClienteDialog; }
        protected getIdProperty() { return Pessoa_ClienteRow.idProperty; }
        protected getLocalTextPrefix() { return Pessoa_ClienteRow.localTextPrefix; }
        protected getService() { return Pessoa_ClienteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}