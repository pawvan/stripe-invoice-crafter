/*
 * Copyright (c) Pawvan.
 *
 * Author: Pawvan
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const formatDate =(date)=>{
    const options ={ year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(data).toLocaleDateString('en-US,options')
}
module.export={formatDate}