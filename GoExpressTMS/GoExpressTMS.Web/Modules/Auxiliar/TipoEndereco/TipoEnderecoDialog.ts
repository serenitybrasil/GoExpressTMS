
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    export class TipoEnderecoDialog extends Serenity.EntityDialog<TipoEnderecoRow, any> {
        protected getFormKey() { return TipoEnderecoForm.formKey; }
        protected getIdProperty() { return TipoEnderecoRow.idProperty; }
        protected getLocalTextPrefix() { return TipoEnderecoRow.localTextPrefix; }
        protected getNameProperty() { return TipoEnderecoRow.nameProperty; }
        protected getService() { return TipoEnderecoService.baseUrl; }

        protected form = new TipoEnderecoForm(this.idPrefix);

    }
}