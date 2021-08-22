import {ExelComponent} from '@/core/ExelComponent';
import {createTable} from './table.template';
import {$} from '@/core/dom';

export class Table extends ExelComponent {
  static className = 'exel__table';

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable(15);
  }

  onMousedown(event) {
    if (!event.target.dataset.resize) {
      return;
    }
    const $resizer = $(event.target);
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();
    const cells = document.querySelectorAll(`[data-col="${$parent.data.col}"]`);

    document.onmousemove = e => {
      const delta = e.pageX - coords.right;
      const width = coords.width + delta;
      $parent.$el.style.width = width + 'px';
      cells.forEach(cell => cell.style.width = width + 'px');
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }
}
