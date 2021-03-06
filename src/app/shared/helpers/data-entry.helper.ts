import * as _ from 'lodash';

function getSanitizedValue(value, type) {
  switch (type) {
    case 'TRUE_ONLY':
      return convertToBoolean(value);
    default:
      return value;
  }
}

function convertToBoolean(stringValue) {
  return stringValue === 'true'
    ? Boolean(true)
    : 'false'
    ? Boolean(false)
    : stringValue;
}

function getSelectInput(id, value, options) {
  let select =
    '<select id="' +
    id +
    '" class="entryselect"><option value="" disabled selected>Select option</option>';

  options.forEach(function(option) {
    if (option.code === value) {
      select +=
        '<option value="' +
        option.code +
        '" selected>' +
        option.name +
        '</option>';
    } else {
      select +=
        '<option value="' + option.code + '">' + option.name + '</option>';
    }
  });
  select += '</select>';
  return select;
}

function updateFormFieldColor(elementId, statusColor) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.backgroundColor = statusColor;
  }
}

export function onFormReady(
  formType,
  dataElements,
  dataValues,
  entryFormStatusColors,
  isDataEntryLevel,
  scriptsContentsArray,
  formReady
) {
  // Find table elements and set bootstrap classes
  const tableElements = document.getElementsByTagName('TABLE');
  _.each(tableElements, (tableElement: any) => {
    tableElement.setAttribute('class', 'table table-bordered table-sm');
  });

  // Find input items and set required properties to them
  const inputElements = document.getElementsByTagName('INPUT');
  _.each(inputElements, (inputElement: any) => {
    // Get attribute from the element
    const elementId = inputElement.getAttribute('id');
    const attributeId = inputElement.getAttribute('attributeid');

    // Get splitted ID to get data element and category combo ids
    const splitedId =
      formType === 'aggregate' || formType === 'event'
        ? elementId
          ? elementId.split('-')
          : []
        : attributeId
        ? attributeId.split('-')
        : [];

    const dataElementId = formType === 'event' ? splitedId[1] : splitedId[0];
    const optionComboId =
      formType === 'event'
        ? 'dataElement'
        : formType === 'tracker'
        ? 'trackedEntityAttribute'
        : splitedId[1];

    // Get data element details
    const dataElementDetails = _.find(dataElements, ['id', dataElementId]);

    // Get dataElement type
    const dataElementType = dataElementDetails
      ? dataElementDetails.valueType
      : null;

    // Get element value
    const dataValueObject: any = _.find(dataValues, {
      dataElement: dataElementId,
      categoryOptionCombo: optionComboId
    });
    const dataElementValue = getSanitizedValue(
      dataValueObject ? dataValueObject.value : '',
      dataElementType
    );

    // Update DOM based on data element type
    if (dataElementType) {
      inputElement.disabled = !isDataEntryLevel;
      if (dataElementDetails.optionSet) {
        inputElement.replaceWith(
          getSelectInput(
            elementId,
            dataElementValue,
            dataElementDetails.optionSet.options
          )
        );
      } else {
        if (
          dataElementType === 'NUMBER' ||
          dataElementType.indexOf('INTEGER') > -1
        ) {
          inputElement.setAttribute('type', 'number');
          inputElement.setAttribute('class', 'entryfield form-control');

          if (dataElementType === 'INTEGER_POSITIVE') {
            inputElement.setAttribute('min', 1);
          } else if (dataElementType === 'INTEGER_NEGATIVE') {
            inputElement.setAttribute('max', -1);
          } else if (dataElementType === 'INTEGER_ZERO_OR_POSITIVE') {
            inputElement.setAttribute('min', 0);
          }
          inputElement.value = dataElementValue;
        } else {
          inputElement.setAttribute('class', 'entryfield form-control');
          inputElement.value = dataElementValue;
        }
      }
    } else {
      inputElement.setAttribute('class', 'form-control');
    }
  });

  formReady(formType, entryFormStatusColors, scriptsContentsArray);
}

export function onDataValueChange(
  element: any,
  entryFormType: string,
  entryFormColors: any
) {
  // Get attribute from the element
  const elementId = element.getAttribute('id');

  // Get splitted ID to get data element and category combo ids
  const splitedId = elementId ? elementId.split('-') : [];

  const dataElementId = entryFormType === 'event' ? splitedId[1] : splitedId[0];
  const optionComboId =
    entryFormType === 'event'
      ? 'dataElement'
      : entryFormType === 'tracker'
      ? 'trackedEntityAttribute'
      : splitedId[1];

  // find element value
  const elementValue = element.value;

  // Update item color
  updateFormFieldColor(elementId, entryFormColors['WAIT']);

  // create custom event for saving data values
  const dataValueEvent = new CustomEvent('dataValueUpdate', {
    detail: {
      dataElement: dataElementId,
      categoryOptionCombo: optionComboId,
      value: elementValue,
      domElementId: elementId
    }
  });
  document.body.dispatchEvent(dataValueEvent);
}
