/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const { formatCurrency } = require('../src/utils/currencyFormatter');
test('should format the currency correctly', () => {
  const formattedCurrency = formatCurrency(500);
  expect(formattedCurrency).toBe('$5.00');
});
