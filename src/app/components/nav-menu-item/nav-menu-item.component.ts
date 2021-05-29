import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'nav-menu-item' },
})
export class NavMenuItemComponent {
  @Input() title: string;

  hasChildren = false;

  navItemLevel = 1;

  navItemPaddingLeft: number;

  @ContentChild(NavMenuItemComponent) subMenuItem: NavMenuItemComponent;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngAfterContentInit() {
    if (!this.elRef.nativeElement.parentNode && this.subMenuItem) {
      this.hasChildren = true;
      this.setSubMenusLevels(this.subMenuItem, this.navItemLevel);
    }
  }

  setSubMenusLevels(menuItem: NavMenuItemComponent, level: number): void {
    const currentLevel = level + 1;

    menuItem.navItemLevel = currentLevel;

    if (menuItem.subMenuItem) {
      this.setSubMenusLevels(menuItem.subMenuItem, currentLevel);
    }
  }
}
