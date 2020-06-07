'use strict';
(function () {
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARDS_QUANTITY = 4;

  var setupPopup = document.querySelector('.setup');
  setupPopup.classList.remove('hidden');

  var wizards = [];

  var generateRandomData = function (wizard) {
    wizard.name = WIZARD_FIRST_NAMES[Math.round(Math.random() * WIZARD_FIRST_NAMES.length - 1)] + ' ' + WIZARD_LAST_NAMES[Math.round(Math.random() * WIZARD_LAST_NAMES.length - 1)];
    wizard.coatColor = WIZARD_COAT_COLORS[Math.round(Math.random() * WIZARD_COAT_COLORS.length - 1)];
    wizard.eyesColor = WIZARD_EYES_COLORS[Math.round(Math.random() * WIZARD_EYES_COLORS.length - 1)];
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

    for (var i = 0; i < WIZARDS_QUANTITY; i++) {
      var wizard = {
        name: '',
        coatColor: '',
        eyesColor: ''
      };

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
