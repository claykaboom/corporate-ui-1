Polymer({
  is: name,
  properties: {
    text: String,
    variation: 0,
    fullbleed: {
      type: Boolean,
      value: true
    },
    copyright: {
      type: String,
      value: function() {
        var date = new Date();
        return "Copyright Scania " + date.getFullYear() + " All rights reserved."
      }
    },
    navItems: {
      type: Boolean,
      value: false
    },
    template: {
      type: String,
      observer: 'addTemplate'
    }
  },
  created: function() {
    var items = [].slice.call(this.children).filter(function(item) {
      return item.nodeName == 'NAV-ITEM';
    });
    this.properties.navItems.value = items.length;
  },
  attached: function() {
    this.style.display = 'block';
  },
  addTemplate: function() {
    Polymer.dom(this).innerHTML = '';
    var div = document.createElement('div')
    div.innerHTML = this.template;
    while (div.firstChild) {
      Polymer.dom(this).appendChild(div.firstChild);
    }
  }
});
