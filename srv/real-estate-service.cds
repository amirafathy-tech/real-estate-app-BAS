using real.estate as my from '../db/schema';

service RealEstateService {
  entity Buildings as projection on my.Building;
  entity Units as projection on my.Unit;
}