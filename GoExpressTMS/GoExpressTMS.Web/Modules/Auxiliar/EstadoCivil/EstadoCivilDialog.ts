
namespace GoExpressTMS.Auxiliar {

    @Serenity.Decorators.registerClass()
    export class EstadoCivilDialog extends Serenity.EntityDialog<EstadoCivilRow, any> {
        protected getFormKey() { return EstadoCivilForm.formKey; }
        protected getIdProperty() { return EstadoCivilRow.idProperty; }
        protected getLocalTextPrefix() { return EstadoCivilRow.localTextPrefix; }
        protected getNameProperty() { return EstadoCivilRow.nameProperty; }
        protected getService() { return EstadoCivilService.baseUrl; }

        protected form = new EstadoCivilForm(this.idPrefix);

    }
}