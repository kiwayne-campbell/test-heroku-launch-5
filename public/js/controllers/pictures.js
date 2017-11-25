angular.module('fitnessApp')
.controller('PicturesIndexController', PicturesIndexController)
.controller('PicturesNewController', PicturesNewController)
.controller('PicturesShowController', PicturesShowController)
.controller('PicturesEditController', PicturesEditController);


PicturesIndexController.$inject = ['Picture'];
function PicturesIndexController(Picture) {
  const picturesIndex = this;

  picturesIndex.all = Picture.query();
}
PicturesNewController.$inject = ['Picture', '$state'];
function PicturesNewController(Picture, $state) {
  const picturesNew = this;

  picturesNew.picture = {};

  function create() {
    Picture.save(picturesNew.picture, () => {
      $state.go('picturesIndex');
    });
  }
  picturesNew.create = create;
}

PicturesShowController.$inject = ['Picture', '$state'];
function PicturesShowController(Picture, $state) {
  const picturesShow = this;

  picturesShow.picture = Picture.get($state.params);

  function deletePicture() {
    picturesShow.picture.$remove(() => {
      $state.go('picturesIndex');
    });
  }
  this.delete = deletePicture;

}

PicturesEditController.$inject = ['Picture', '$state'];
function PicturesEditController(Picture, $state) {
  const picturesEdit = this;


  picturesEdit.picture=Picture.get($state.params);

  function update() {
    picturesEdit.picture.$update(() => {
      $state.go('picturesShow',$state.params);
    });
  }
  this.update= update;
}
