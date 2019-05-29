
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    @Serenity.Decorators.filterable()
    export class PaisGrid extends Serenity.EntityGrid<PaisRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Pais'; }
        protected getDialogType() { return PaisDialog; }
        protected getIdProperty() { return PaisRow.idProperty; }
        protected getLocalTextPrefix() { return PaisRow.localTextPrefix; }
        protected getService() { return PaisService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}