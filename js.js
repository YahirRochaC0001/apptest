window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};

var createAlertDialog = function() {
    var dialog = document.getElementById('my-alert-dialog');
  
    if (dialog) {
      dialog.show();
    } else {
      ons.createElement('alert-dialog.html', { append: true })
        .then(function(dialog) {
          dialog.show();
        });
    }
  };
  
  var hideAlertDialog = function() {
    document
      .getElementById('my-alert-dialog')
      .hide();
  };
  
  var notify = function() {
    ons.notification.alert('Creado como una notifiacion .ons');
  };