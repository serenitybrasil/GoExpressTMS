
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class FabricanteGrid extends Serenity.EntityGrid<FabricanteRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Fabricante'; }
        protected getDialogType() { return FabricanteDialog; }
        protected getIdProperty() { return FabricanteRow.idProperty; }
        protected getLocalTextPrefix() { return FabricanteRow.localTextPrefix; }
        protected getService() { return FabricanteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}