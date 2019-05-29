
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    @Serenity.Decorators.filterable()
    export class CidadeGrid extends Serenity.EntityGrid<CidadeRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Cidade'; }
        protected getDialogType() { return CidadeDialog; }
        protected getIdProperty() { return CidadeRow.idProperty; }
        protected getLocalTextPrefix() { return CidadeRow.localTextPrefix; }
        protected getService() { return CidadeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}