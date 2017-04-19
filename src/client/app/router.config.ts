import { UIRouter } from 'sn-ui-router-core';
import { StickyStatesPlugin } from 'sn-ui-router-sticky-states';

export function uiRouterConfigFn(router: UIRouter) {
    router.plugin(StickyStatesPlugin);
}

