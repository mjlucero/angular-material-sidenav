import { Directive, ElementRef, Input } from '@angular/core';

const componentsDb = [
  {
    id: '1',
    child: 'Button csm',
  },
  {
    id: '2',
    label: 'Input label',
    placeholder: 'Input placeholder cms',
  },
  {
    id: '3',
    children: ['list item 1', 'list item 2', 'list item 3'],
  },
];

@Directive({
  selector: '[contentModifier]',
  exportAs: 'contentModifier',
})
export class ContentModifierDirective {
  @Input() contentModifier: string;
  @Input() single = true;

  attr: Record<string, any>;

  constructor(public el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    setTimeout(() => {
      this.attr = componentsDb.find(
        (component) => component.id === this.contentModifier
      );
    }, 1000);
  }
}
