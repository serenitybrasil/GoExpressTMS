
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CepGrid extends Serenity.EntityGrid<CepRow, any> {
        protected getColumnsKey() { return 'CadastroBasico.Cep'; }
        protected getDialogType() { return CepDialog; }
        protected getIdProperty() { return CepRow.idProperty; }
        protected getLocalTextPrefix() { return CepRow.localTextPrefix; }
        protected getService() { return CepService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        
    }
}