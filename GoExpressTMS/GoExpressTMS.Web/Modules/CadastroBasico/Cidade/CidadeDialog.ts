
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    export class CidadeDialog extends Serenity.EntityDialog<CidadeRow, any> {
        protected getFormKey() { return CidadeForm.formKey; }
        protected getIdProperty() { return CidadeRow.idProperty; }
        protected getLocalTextPrefix() { return CidadeRow.localTextPrefix; }
        protected getNameProperty() { return CidadeRow.nameProperty; }
        protected getService() { return CidadeService.baseUrl; }

        protected form = new CidadeForm(this.idPrefix);

    }
}