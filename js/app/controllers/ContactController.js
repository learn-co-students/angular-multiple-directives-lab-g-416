function ContactController() {
  let vm = this;
  vm.currentContact = {};

  vm.contacts = [{
      name: 'Bob',
      phone: '0123458690'
  },{
      name: 'Tim',
      phone: '3934203242'
  },{
      name: 'Ross',
      phone: '0684059433'
  }];

  vm.addContact = function () {
    vm.contacts.push({
      name: vm.name,
      phone: vm.phone
    });

    vm.name = '';
    vm.phone = '';
  }

  vm.removeContact = function (index) {
    vm.contacts.splice(index, 1);
  }
}

angular
    .module('app')
    .controller('ContactController', ContactController);
