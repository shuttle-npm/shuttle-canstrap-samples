import FormViewModel from '../form-view-model';
import Component from 'can-component';
import view from './cs-form-textarea-sample.stache!';

var ViewModel = FormViewModel.extend({
    value: {
        type: 'string',
        default: ''
    }
});

export default Component.extend({
    tag: 'cs-form-textarea-sample',
    view,
    ViewModel
});