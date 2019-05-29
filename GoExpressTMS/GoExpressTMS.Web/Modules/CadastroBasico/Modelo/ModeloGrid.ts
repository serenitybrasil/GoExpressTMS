
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class ModeloGrid extends Serenity.EntityGrid<ModeloRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Modelo'; }
        protected getDialogType() { return ModeloDialog; }
        protected getIdProperty() { return ModeloRow.idProperty; }
        protected getLocalTextPrefix() { return ModeloRow.localTextPrefix; }
        protected getService() { return ModeloService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}