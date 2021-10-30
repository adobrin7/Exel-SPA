import {ExelComponent} from '@/core/ExelComponent';

export class Formula extends ExelComponent {
  static className = 'exel__formula';

  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
      ...options,
    });
  }

  toHTML() {
    return `
      <div class="exel__formula-info">fx</div>
      <div class="exel__formula-input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    const text = event.target.textContent.trim();
    this.emitter.emit('twerk', text);
  }
}
