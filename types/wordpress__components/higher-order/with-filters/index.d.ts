import { ComponentType } from 'react';

// prettier-ignore
declare function withFilters(hookName: string): <T>(wrapped: T) =>
    T extends ComponentType<infer U> ? ComponentType<U> : never;

declare function withFilters<P>(hookName: string): (wrapped: ComponentType<any>) => ComponentType<P>; // eslint-disable-line @definitelytyped/no-unnecessary-generics

export default withFilters;
