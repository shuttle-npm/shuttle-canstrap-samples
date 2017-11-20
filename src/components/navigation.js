import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/';
import Component from 'can-component';
import view from './navigation.stache!';
import each from 'can-util/js/each/';
import {DropdownItemList, DropdownItem} from 'shuttle-canstrap/nav-dropdown/';
import route from 'can-route/';

var ViewModel = DefineMap.extend({
  resources: { 
    get: function(value) {
      var result = new DropdownItemList();
      
      var dropdown = new DropdownItem({
        text: 'cs-nav-dropdown',
        items: new DropdownItemList()
      });
      
      each(value, function(resource) {
        dropdown.items.push({
          text: resource.name,
          href: route.url({resource: resource.name})
        });
      });
      
      result.push(dropdown);
      
      return result;
    }
  }
});

export default Component.extend({
    tag: 'resource-navigation',
    view,
    ViewModel
});