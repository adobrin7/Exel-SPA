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
    const type = $resizer.data.resize;
    const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`);

    document.onmousemove = e => {
      if (type === 'col') {
        const delta = e.pageX - coords.right;
        const width = coords.width + delta;
        $parent.$el.style.width = width + 'px';
        cells.forEach(cell => cell.style.width = width + 'px');
      } else {
        const delta = e.pageY - coords.bottom;
        const value = coords.height + delta;
        $parent.$el.style.height = value + 'px';
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
    };
  }
}
