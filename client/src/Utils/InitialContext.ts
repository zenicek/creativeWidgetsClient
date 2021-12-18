import { nanoid } from 'nanoid';
import { nextChar } from './Helpers';
import { Elements } from '../Types/Element';
import { Calculator } from '../Types/Widget';

export const InitialContext = (
  widget: Calculator,
  setWidget: React.Dispatch<React.SetStateAction<Calculator>>
) => {
  return {
    widget,
    setWidget,
    //add element metadata
    addElement: (meta: Elements) => {
      const element = {
        ...meta,
        id: nanoid(),
        letter: meta.type !== 'Text' ? nextChar(widget.lastLetter) : '',
      };
      setWidget({
        ...widget,
        elements: [...widget.elements, { ...element }],
        lastLetter: meta.type !== 'Text' ? element.letter : widget.lastLetter,
      });
    },
    //update specific element in the elements list
    updateElement: (id: string, element: Elements) => {
      if (element) {
        const updatedEls = widget.elements.map(el => {
          if (el._id === id || el.id === id) return { ...element };
          else return el;
        });
        setWidget({ ...widget, elements: [...updatedEls] });
      }
    },
    //function to rearrange elements on the dnd within the container
    arrangeElements: (elements: Elements[]) => {
      setWidget({ ...widget, elements: [...elements] });
    },
    //to find element in the array
    findElement: (id: string) => {
      return widget.elements.find(el =>
        el._id ? el._id === id : el.id === id
      );
    },
    //update formula
    updateFormula: (formula: string) => {
      setWidget({ ...widget, formula: formula });
    },
    //add result descriptions
    updateResultDesc: (resultDesc: string) => {
      setWidget({ ...widget, resultDescription: resultDesc });
    },
    updateResultValueDesc: (resultValDesc: string) => {
      setWidget({ ...widget, resultValueDesc: resultValDesc });
    },
  };
};