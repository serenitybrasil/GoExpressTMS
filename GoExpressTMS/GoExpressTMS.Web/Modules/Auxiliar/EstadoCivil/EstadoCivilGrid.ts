
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class EstadoCivilGrid extends Serenity.EntityGrid<EstadoCivilRow, any> {
        protected getColumnsKey() { return 'Auxiliar.EstadoCivil'; }
        protected getDialogType() { return EstadoCivilDialog; }
        protected getIdProperty() { return EstadoCivilRow.idProperty; }
        protected getLocalTextPrefix() { return EstadoCivilRow.localTextPrefix; }
        protected getService() { return EstadoCivilService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}