using RealEstateService from '../../srv/real-estate-service';

annotate RealEstateService.Buildings with @(
  UI.LineItem: [
    { $Type: 'UI.DataField', Value: name, ![@UI.Importance]: #High },
    { $Type: 'UI.DataField', Value: address },
    {
      $Type: 'UI.DataFieldForAction',
      Label: 'Upload Image',
      Action: 'RealEstateService.uploadImage',
      Inline: true
    }
  ],
  UI.HeaderInfo: {
    TypeName: 'Building',
    TypeNamePlural: 'Buildings',
    Title: { $Type: 'UI.DataField', Value: name },
    Description: { $Type: 'UI.DataField', Value: description }
  },
  UI.Facets: [
    {
      $Type: 'UI.CollectionFacet',
      Label: 'Images',
      Facets: [
        {
          $Type: 'UI.ReferenceFacet',
          Target: 'images/@UI.LineItem',
          Label: 'Building Images'
        }
      ]
    },
    {
      $Type: 'UI.ReferenceFacet',
      Target: 'units/@UI.LineItem',
      Label: 'Available Units'
    }
  ]
);

annotate RealEstateService.Units with @(
  UI.LineItem: [
    { $Type: 'UI.DataField', Value: unitNumber, ![@UI.Importance]: #High },
    { $Type: 'UI.DataField', Value: type },
    { $Type: 'UI.DataField', Value: status, ![@UI.Criticality]: status },
    { $Type: 'UI.DataField', Value: price }
  ],
  UI.HeaderInfo: {
    TypeName: 'Unit',
    TypeNamePlural: 'Units',
    Title: { $Type: 'UI.DataField', Value: unitNumber }
  }
);

annotate RealEstateService.Images with @(
  UI.LineItem: [
    { $Type: 'UI.DataField', Value: url, ![@UI.Importance]: #High },
    { $Type: 'UI.DataField', Value: description }
  ]
);

annotate RealEstateService.Units with {
  status @Common: {
    Text: status,
    TextArrangement: #TextOnly,
    ValueList: {
      $Type: 'Common.ValueListType',
      CollectionPath: 'Units',
      Parameters: [
        { $Type: 'Common.ValueListParameterInOut', LocalDataProperty: status, ValueListProperty: 'status' }
      ]
    }
  };
}