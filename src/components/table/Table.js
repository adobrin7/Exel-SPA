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
    const sideProp = type === 'col' ? 'bottom' : 'right';
    let value = undefined;

    $resizer.css({
      opacity: 1,
      zIndex: 1000,
      [sideProp]: '-5000px',
    });

    document.onmousemove = e => {
      if (type === 'col') {
        const delta = e.pageX - coords.right;
        value = coords.width + delta;
        $resizer.css({right: -delta - 4 + 'px'});
      } else {
        const delta = e.pageY - coords.bottom;
        value = coords.height + delta;
        $resizer.css({bottom: -delta - 4 + 'px'});
      }
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;

      if (type === 'col') {
        $parent.css({width: value + 'px'});
        this.$root.findAll(`[data-col="${$parent.data.col}"]`)
            .forEach(cell => cell.style.width = value + 'px');
      } else {
        $parent.css({height: value + 'px'});
      }

      $resizer.css({
        opacity: 0,
        right: 0,
        bottom: 0,
      });
    };
  }
}
