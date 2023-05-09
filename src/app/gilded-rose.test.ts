import { describe, expect, test } from '@jest/globals';
import { Item, GildedRose } from './gilded-rose';

describe('Gilded Rose', () => {
  test('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });
});
