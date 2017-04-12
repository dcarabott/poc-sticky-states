import { UIRouter } from 'sn-ui-router-ng2';
import { StickyStatesPlugin } from 'sn-ui-router-sticky-states';

export function uiRouterConfigFn(router: UIRouter) {
    router.plugin(StickyStatesPlugin);
}

