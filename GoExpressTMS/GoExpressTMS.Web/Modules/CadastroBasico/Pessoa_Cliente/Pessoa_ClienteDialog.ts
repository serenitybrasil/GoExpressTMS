
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class Pessoa_ClienteDialog extends Serenity.EntityDialog<Pessoa_ClienteRow, any> {
        protected getFormKey() { return Pessoa_ClienteForm.formKey; }
        protected getIdProperty() { return Pessoa_ClienteRow.idProperty; }
        protected getLocalTextPrefix() { return Pessoa_ClienteRow.localTextPrefix; }
        protected getNameProperty() { return Pessoa_ClienteRow.nameProperty; }
        protected getService() { return Pessoa_ClienteService.baseUrl; }

        protected form = new Pessoa_ClienteForm(this.idPrefix);

    }
}