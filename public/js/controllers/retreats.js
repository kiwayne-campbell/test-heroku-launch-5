angular.module('fitnessApp')
.controller('RetreatsIndexController', RetreatsIndexController)
.controller('RetreatsNewController', RetreatsNewController)
.controller('RetreatsShowController', RetreatsShowController)
.controller('RetreatsEditController', RetreatsEditController);

RetreatsIndexController.$inject = ['Retreat'];
function RetreatsIndexController(Retreat) {
  const retreatsIndex = this;

  retreatsIndex.all = Retreat.query();
}

RetreatsNewController.$inject = ['Retreat', '$state'];
function RetreatsNewController(Retreat, $state) {
  const retreatsNew = this;

  retreatsNew.retreat = {};

  function create() {
    Retreat.save(retreatsNew.retreat, () => {
      $state.go('retreatsIndex');
    });
  }
  retreatsNew.create = create;
}

RetreatsShowController.$inject = ['Retreat', '$state'];
function RetreatsShowController(Retreat, $state) {
  const retreatsShow = this;

  retreatsShow.retreat = Retreat.get($state.params);

  function deleteRetreat() {
    retreatsShow.retreat.$remove(() => {
      $state.go('retreatsIndex');
    });
  }
  this.delete = deleteRetreat;

}

RetreatsEditController.$inject = ['Retreat', '$state'];
function RetreatsEditController(Retreat, $state) {
  const retreatsEdit = this;

  retreatsEdit.retreat=Retreat.get($state.params);

  function update() {
    retreatsEdit.retreat.$update(() => {
      $state.go('retreatsShow',$state.params);
    });
  }
  this.update= update;
}
