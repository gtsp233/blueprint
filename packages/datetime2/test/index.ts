/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 */

// tslint:disable no-submodule-imports
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
// tslint:enable no-submodule-imports

import "../lib/css/blueprint-datetime2.css";
import "./test-debugging-styles.scss";

import "@blueprintjs/test-commons/bootstrap";

import "./common/dateUtilsTests";
import "./common/timezoneUtilsTest";
import "./common/timezoneMetadataTests";

import "./components/dateInput2Tests";
import "./components/dateInput2MigrationUtilsTests";
import "./components/dateRangeInput2Tests";
import "./components/timezoneSelectTests";
