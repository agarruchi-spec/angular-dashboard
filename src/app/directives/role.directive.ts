import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appHasRole]',
  standalone: true
})
export class HasRoleDirective {
  private vcr = inject(ViewContainerRef);
  private tpl = inject(TemplateRef<any>);
  private _userRole: string = 'all';

  @Input('appHasRole') set hasRole(roles: string | string[]) {
    const list = Array.isArray(roles) ? roles : [roles];
    if (list.includes(this._userRole) || list.includes('all')) {
      this.vcr.clear();
      this.vcr.createEmbeddedView(this.tpl);
    } else {
      this.vcr.clear();
    }
  }

  @Input() set appHasRoleUser(role: string) {
    this._userRole = role;
  }
}
