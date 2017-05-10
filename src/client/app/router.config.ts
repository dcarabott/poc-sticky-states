import { UIRouter } from '@uirouter/angular';
import { StickyStatesPlugin } from 'sn-ui-router-sticky-states';

export function uiRouterConfigFn(router: UIRouter) {
    router.plugin(StickyStatesPlugin);
}

