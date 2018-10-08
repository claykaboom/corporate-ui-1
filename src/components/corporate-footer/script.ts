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
    }
  },
  attached: function() {
    var items = [].slice.call(this.querySelectorAll('.dropdown-menu nav-item')).filter(function(item) {
      return item.nodeName == 'NAV-ITEM';
    });

    this.navItems = !!items.length;
    this.style.display = 'block';
  }
});