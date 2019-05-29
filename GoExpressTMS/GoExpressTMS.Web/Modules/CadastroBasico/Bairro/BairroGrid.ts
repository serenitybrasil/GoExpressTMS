
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class BairroGrid extends Serenity.EntityGrid<BairroRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Bairro'; }
        protected getDialogType() { return BairroDialog; }
        protected getIdProperty() { return BairroRow.idProperty; }
        protected getLocalTextPrefix() { return BairroRow.localTextPrefix; }
        protected getService() { return BairroService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}