export enum WidgetActions {
  ALL_WIDGETS = 'ALL_WIDGETS',
  REMOVE_WIDGET = 'REMOVE_WIDGET',
}

export type AllWidgets = {
  _id: string;
  type: 'Calculator' | 'Chart' | 'Survey' | 'Form' | 'Quizz';
  name: string;
};

interface SetWidget {
  type: WidgetActions.ALL_WIDGETS;
  payload: {
    widgets: AllWidgets[];
  };
}

interface RemoveWidget {
  type: WidgetActions.REMOVE_WIDGET;
  payload: {
    _id: string;
  };
}

export type WidgetReducers = SetWidget | RemoveWidget;
