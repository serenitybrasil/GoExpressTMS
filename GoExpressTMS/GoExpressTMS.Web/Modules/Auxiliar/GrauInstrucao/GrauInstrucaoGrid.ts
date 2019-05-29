
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class GrauInstrucaoGrid extends Serenity.EntityGrid<GrauInstrucaoRow, any> {
        protected getColumnsKey() { return 'Auxiliar.GrauInstrucao'; }
        protected getDialogType() { return GrauInstrucaoDialog; }
        protected getIdProperty() { return GrauInstrucaoRow.idProperty; }
        protected getLocalTextPrefix() { return GrauInstrucaoRow.localTextPrefix; }
        protected getService() { return GrauInstrucaoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}