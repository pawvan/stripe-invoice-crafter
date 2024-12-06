/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {formatDate} =require('../src/utils/dateFormatter')
test('should format the date correctly',()=>{
    const formattedDate = formatDate('2024-12-01');
  expect(formattedDate).toBe('December 1, 2024');
}) 