import { DefineMap, Component } from 'can';
import view from './cs-modal-sample.stache!';
import state from '~/state';

export const ViewModel = DefineMap.extend({
    show: function() {
        $('#modal-sample').modal({ show: true });
    },
    primaryClick: function(){
        state.alerts.add({ message: 'Primary button clicked.', name: 'modal-click'});
    }
});

export default Component.extend({
    tag: 'cs-modal-sample',
    view,
    ViewModel
});