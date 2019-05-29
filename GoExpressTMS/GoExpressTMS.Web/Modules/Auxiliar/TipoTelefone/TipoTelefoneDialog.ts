
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    export class TipoTelefoneDialog extends Serenity.EntityDialog<TipoTelefoneRow, any> {
        protected getFormKey() { return TipoTelefoneForm.formKey; }
        protected getIdProperty() { return TipoTelefoneRow.idProperty; }
        protected getLocalTextPrefix() { return TipoTelefoneRow.localTextPrefix; }
        protected getNameProperty() { return TipoTelefoneRow.nameProperty; }
        protected getService() { return TipoTelefoneService.baseUrl; }

        protected form = new TipoTelefoneForm(this.idPrefix);

    }
}