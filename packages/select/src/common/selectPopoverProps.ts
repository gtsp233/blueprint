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

import type { Popover, PopoverProps } from "@blueprintjs/core";

/**
 * Reusable collection of props for components in this package which render a `Popover`
 * and need to provide some degree of customization for that popover.
 */
export interface SelectPopoverProps {
    /** Props to spread to `Popover` content wrapper eleemnt. */
    popoverContentProps?: React.HTMLAttributes<HTMLDivElement>;

    /**
     * Props to spread to the popover.
     * Note that `content` cannot be changed aside from utilizing `popoverContentProps`.
     */
    popoverProps?: Partial<
        Omit<PopoverProps, "content" | "defaultIsOpen" | "disabled" | "fill" | "renderTarget" | "targetTagName">
    >;

    /**
     * Optional ref for the Popover component instance.
     * This is sometimes useful to reposition the popover.
     */
    popoverRef?: React.RefObject<Popover<React.HTMLProps<HTMLDivElement>>>;
}
