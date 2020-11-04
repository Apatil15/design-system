/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import * as NDS from '@wwnds/react';
// import { PropsTable } from '../../components';

// Add react-live imports you need here
const ReactLiveScope = {
	React,
	...NDS,
	...React,
};

// eslint-disable-next-line import/no-default-export
export default ReactLiveScope;