/*
 * Copyright 2022 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// tslint:disable object-literal-sort-keys
/* eslint-disable no-template-curly-in-string */

import { TSESLint } from "@typescript-eslint/utils";
import dedent from "dedent";

import { noDeprecatedSelectComponentsRule } from "../src/rules/no-deprecated-components";

const ruleTester = new TSESLint.RuleTester({
    parser: require.resolve("@typescript-eslint/parser"),
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: "module",
    },
});

ruleTester.run("no-deprecated-core-components", noDeprecatedSelectComponentsRule, {
    // N.B. most other deprecated components are tested by no-deprecated-components.test.ts, this suite just tests
    // for more specific violations which involve certain syntax
    invalid: [
        {
            code: dedent`
                import { MultiSelect } from "@blueprintjs/select";

                const MyMultiSelect = MultiSelect.ofType<any>();
            `,
            errors: [
                {
                    messageId: "migration",
                    data: {
                        deprecatedComponentName: "MultiSelect",
                        newComponentName: "MultiSelect2",
                    },
                },
            ],
        },
    ],
    valid: [],
});
