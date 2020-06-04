'use strict';
(function () {
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var setupPopup = document.querySelector('.setup');
  setupPopup.classList.remove('hidden');

  class Wizard {
    name;
    coatColor;
    eyesColor;
  }

  var wizards = [];

  var generateRandomData = function (wizard) {
    wizard.name = WIZARD_FIRST_NAMES[Math.trunc(Math.random() * 7)] + ' ' + WIZARD_LAST_NAMES[Math.trunc(Math.random() * 7)];
    wizard.coatColor = WIZARD_COAT_COLORS[Math.trunc(Math.random() * 5)];
    wizard.eyesColor = WIZARD_EYES_COLORS[Math.trunc(Math.random() * 4)];
  };

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var createWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fillSetupSimilarBlock = function () {

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      var wizard = new Wizard();
      wizards.push(wizard);
      generateRandomData(wizards[i]);
      fragment.appendChild(createWizardElement(wizards[i]));
    }

    var similarListElement = setupPopup.querySelector('.setup-similar-list');

    similarListElement.appendChild(fragment);
  };

  fillSetupSimilarBlock();

  setupPopup.querySelector('.setup-similar').classList.remove('hidden');
})();
