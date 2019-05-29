
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class EstadoGrid extends Serenity.EntityGrid<EstadoRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Estado'; }
        protected getDialogType() { return EstadoDialog; }
        protected getIdProperty() { return EstadoRow.idProperty; }
        protected getLocalTextPrefix() { return EstadoRow.localTextPrefix; }
        protected getService() { return EstadoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}