
namespace GoExpressTMS.CadastroBasico {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class EstadoDialog extends Serenity.EntityDialog<EstadoRow, any> {
        protected getFormKey() { return EstadoForm.formKey; }
        protected getIdProperty() { return EstadoRow.idProperty; }
        protected getLocalTextPrefix() { return EstadoRow.localTextPrefix; }
        protected getNameProperty() { return EstadoRow.nameProperty; }
        protected getService() { return EstadoService.baseUrl; }

        protected form = new EstadoForm(this.idPrefix);

    }
}