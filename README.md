# Raychat widget installer for Angular

![raychat][logo]

#### The new online chat experience begins here!

Get closer to your leads and customers with a website chat widget. Adding a chat widget to your website will make your customer service experience even more exceptional.

- [Install](#install)
- [Use](#use)
- [Props](#props)
- [License](#license)
- [Author](#author)

## Install

```bash
npm i @raychat/widget-angular
```

## Use

**1. Import in the AppComponent**
_Wrote to app.component.ts:_

```js
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { RaychatWidgetComponent } from "raychat-widget";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, RaychatWidgetComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "test-angular1";
}
```

<br>

**2. Use in the app.component.html**

> Get `token` and `type` from [raychat.io][raychat-landing]

```html
<style>
  <!-- style related -->
</style>

<main>
  <!-- other elements -->
  <lib-raychat-widget token="6d5b4ba5-xxxx-xxxx-xxxx-48498f3fc2a2" type="normal" />
</main>
```

## Props

| props | required | defaultValue | description                                           |
| ----- | -------- | ------------ | ----------------------------------------------------- |
| token | true     | undefined    | Get `token` from [raychat.io][raychat-get-token]      |
| type  | false    | normal       | The type of script: [normal, fast-laod, seo-friendly] |

### License

MIT

### Author

Mahdi Vajdi<br>
Github: [@mahdi-vajdi][author-github]<br>
Email: [mahdivajdii@gmail.com][author-email]<br>

[logo]: https://raychat.io/_next/static/media/raychat-logo-english.486d7b96.svg
[raychat-landing]: https://raychat.io/signup
[raychat-get-token]: https://raychat.io/dashboard/widget-installation
[author-github]: https://github.com/mahdi-vajdi
[author-email]: mailto:mahdivajdii@gmail.com
