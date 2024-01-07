import { AfterViewInit, Component, Input, SimpleChanges } from '@angular/core';
import { RaychatWidgetService } from './raychat-widget.service';

@Component({
  selector: 'lib-raychat-widget',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
})
export class RaychatWidgetComponent implements AfterViewInit {
  @Input() token: string;
  @Input() type: string = 'NORMAL';

  constructor(private raychatService: RaychatWidgetService) {
    this.token = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['token']) {
      const tokenValid = this.validateToken(changes['token'].currentValue);
      if (!tokenValid) return;
    }

    if (changes['type']) {
      this.type = this.validateType(changes['type'].currentValue);
    }
  }

  ngAfterViewInit(): void {
    this.raychatService.install(this.token, this.type);
  }

  private validateToken(token: string): boolean {
    if (!token || token.trim() === '') {
      console.error('Invalid Raychat token: ', token);
      return false;
    }
    return true;
  }

  private validateType(type: string): string {
    const validTypes = ['NORMAL', 'SEO_FRIENDLY', 'FAST_LOAD'];

    if (!type) return 'NORMAL:';
    if (!validTypes.includes(type.toUpperCase())) {
      console.warn(
        `Passed type for raychat widget: (${type}) is not valid. using type 'NORMAL' instead.`
      );
      return 'NORMAL';
    }

    return type;
  }
}
