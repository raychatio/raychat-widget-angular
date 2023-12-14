import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import { RaychatWidgetService } from './raychat-widget.service';

@Component({
  selector: 'lib-raychat-widget',
  standalone: true,
  imports: [],
  template: ` <p>raychat-widget works!</p> `,
  styles: ``,
})
export class RaychatWidgetComponent implements AfterViewInit {
  @Input() token: string;
  @Input() type: string = 'normal';

  constructor(private raychatService: RaychatWidgetService) {
    this.token = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['token']) {
      const tokenValid = this.validateToken(changes['token'].currentValue);
      if (!tokenValid) return;
    }

    if (changes['type']) {
      this.validateType(changes['type'].currentValue);
    }
  }

  ngAfterViewInit(): void {
    console.log('were in the component');
    this.raychatService.install(this.token, this.type);
  }

  private validateToken(token: string): boolean {
    if (!token || token.trim() === '') {
      console.error('Invalid Raychat token: ', token);
      return false;
    }
    return true;
  }

  private validateType(type: string): void {
    if (!type) return;

    if (type || type !== 'normal') {
      console.warn(
        `Passed type for raychat type (${type}) is not valid. using type normal instead.`
      );
    }
  }
}
