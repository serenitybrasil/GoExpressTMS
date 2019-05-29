
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class Pessoa_MotoristaDialog extends Serenity.EntityDialog<Pessoa_MotoristaRow, any> {
        protected getFormKey() { return Pessoa_MotoristaForm.formKey; }
        protected getIdProperty() { return Pessoa_MotoristaRow.idProperty; }
        protected getLocalTextPrefix() { return Pessoa_MotoristaRow.localTextPrefix; }
        protected getNameProperty() { return Pessoa_MotoristaRow.nameProperty; }
        protected getService() { return Pessoa_MotoristaService.baseUrl; }

        protected form = new Pessoa_MotoristaForm(this.idPrefix);

    }
}