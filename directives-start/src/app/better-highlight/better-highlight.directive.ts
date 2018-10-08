import { Directive, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective{

  constructor(private renderer: Renderer2) { }

}
