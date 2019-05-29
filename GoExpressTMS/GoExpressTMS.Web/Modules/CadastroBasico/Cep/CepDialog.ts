
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class CepDialog extends Serenity.EntityDialog<CepRow, any> {
        protected getFormKey() { return CepForm.formKey; }
        protected getIdProperty() { return CepRow.idProperty; }
        protected getLocalTextPrefix() { return CepRow.localTextPrefix; }
        protected getNameProperty() { return CepRow.nameProperty; }
        protected getService() { return CepService.baseUrl; }

        protected form = new CepForm(this.idPrefix);

    }
}