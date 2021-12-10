import {
  getAllWidgets,
  getWidget,
  createWidget,
  removeWidget,
  updateWidget,
} from './ApiService';
import { apiWidget } from '../../Mocks';

describe('api service', () => {
  beforeEach(async () => {
    const allWidgets = await getAllWidgets();
    const allIds = allWidgets.map((widget) => widget._id);

    for (const id of allIds) {
      await removeWidget(id);
    }
  });

  test('creates a widget in the database', async () => {
    await createWidget(apiWidget);
    const allWidgets = await getAllWidgets();
    expect(allWidgets.some((widget) => widget.name === apiWidget.name)).toBe(
      true
    );
  });

  test('updates a widget in the database', async () => {
    const created = await createWidget(apiWidget);
    await updateWidget(
      created._id,
      Object.assign(apiWidget, { name: 'another banana' })
    );
    const allWidgets = await getAllWidgets();
    expect(allWidgets.some((widget) => widget.name === 'another banana')).toBe(
      true
    );
  });
});
