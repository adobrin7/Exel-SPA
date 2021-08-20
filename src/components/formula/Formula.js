import {ExelComponent} from '@/core/ExelComponent';

export class Formula extends ExelComponent {
  static className = 'exel__formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
    });
  }

  toHTML() {
    return `
      <div class="exel__formula-info">fx</div>
      <div class="exel__formula-input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    console.log('Formula onInput', event);
  }
}
