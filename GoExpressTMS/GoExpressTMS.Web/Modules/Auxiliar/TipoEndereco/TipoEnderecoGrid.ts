
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class TipoEnderecoGrid extends Serenity.EntityGrid<TipoEnderecoRow, any> {
        protected getColumnsKey() { return 'Auxiliar.TipoEndereco'; }
        protected getDialogType() { return TipoEnderecoDialog; }
        protected getIdProperty() { return TipoEnderecoRow.idProperty; }
        protected getLocalTextPrefix() { return TipoEnderecoRow.localTextPrefix; }
        protected getService() { return TipoEnderecoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}