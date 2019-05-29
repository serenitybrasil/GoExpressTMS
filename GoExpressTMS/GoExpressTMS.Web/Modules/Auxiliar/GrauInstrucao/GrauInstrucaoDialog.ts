
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    export class GrauInstrucaoDialog extends Serenity.EntityDialog<GrauInstrucaoRow, any> {
        protected getFormKey() { return GrauInstrucaoForm.formKey; }
        protected getIdProperty() { return GrauInstrucaoRow.idProperty; }
        protected getLocalTextPrefix() { return GrauInstrucaoRow.localTextPrefix; }
        protected getNameProperty() { return GrauInstrucaoRow.nameProperty; }
        protected getService() { return GrauInstrucaoService.baseUrl; }

        protected form = new GrauInstrucaoForm(this.idPrefix);

    }
}