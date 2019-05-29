
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class TipoTelefoneGrid extends Serenity.EntityGrid<TipoTelefoneRow, any> {
        protected getColumnsKey() { return 'Auxiliar.TipoTelefone'; }
        protected getDialogType() { return TipoTelefoneDialog; }
        protected getIdProperty() { return TipoTelefoneRow.idProperty; }
        protected getLocalTextPrefix() { return TipoTelefoneRow.localTextPrefix; }
        protected getService() { return TipoTelefoneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}