
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class BairroDialog extends Serenity.EntityDialog<BairroRow, any> {
        protected getFormKey() { return BairroForm.formKey; }
        protected getIdProperty() { return BairroRow.idProperty; }
        protected getLocalTextPrefix() { return BairroRow.localTextPrefix; }
        protected getNameProperty() { return BairroRow.nameProperty; }
        protected getService() { return BairroService.baseUrl; }

        protected form = new BairroForm(this.idPrefix);

    }
}