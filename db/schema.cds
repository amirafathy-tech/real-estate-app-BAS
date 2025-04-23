namespace real.estate;

entity Building {
  key ID: UUID;
  name: String;
  location: String;
  units: Composition of many Unit on units.building = $self;
}

entity Unit {
  key ID: UUID;
  name: String;
  status: String; // "available" or "reserved"
 // price:Decimal;
  building: Association to Building;
}






























// namespace real.estate;

// using { cuid, managed } from '@sap/cds/common';

// type Status : String(20) enum {
//   Available;
//   Occupied;
//   Reserved;
// }

// entity Buildings : cuid, managed {
//   name        : String(100) @title: 'Building Name';
//   address     : String(200) @title: 'Address';
//   description : String(1000) @title: 'Description';
//   units       : Composition of many Units on units.building = $self;
//   images      : Composition of many Images on images.building = $self;
// }

// entity Units : cuid, managed {
//   building    : Association to Buildings;
//   unitNumber  : String(50) @title: 'Unit Number';
//   type        : String(50) @title: 'Type (e.g., Apartment, Office)';
//   status      : Status @title: 'Status' default 'Available';
//   price       : Decimal(10, 2) @title: 'Price';
// }

// entity Images : cuid, managed {
//   building    : Association to Buildings;
//   url         : String(500) @title: 'Image URL';
//   description : String(200) @title: 'Image Description';
// }












// // //namespace realestate;

// // entity Building {
// //   key ID: UUID;
// //   name: String;
// //   location: String;
// //   description: String;
// //   imageMapCoordinates: String; // Coordinates for click mapping
// //   units: Composition of many Unit on units.building = $self;
// // }

// // entity Unit {
// //   key ID: UUID;
// //   name: String;
// //   type: String;
// //   price: Decimal;
// //   available: Boolean;
// //   building: Association to Building;
// // }
