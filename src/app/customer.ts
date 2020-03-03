export interface RawCustomer {
  theCustId: string;
  fullname: string;
  customernumber: string;
  invThreeLineAddress: string;
  sitename: string;
  invTwoLineAddress: string;
  invFourLineAddress: string;
  invFiveLineAddress: string;
  invSixLineAddress: string;
  invSevenLineAddress: string;
  theMainAddress: string;
  icountry: string;
  firstcontact: string;
  paymentType: string;
  cusPayID: string;
  phone: string;
  email: string;
  theStatus: string;
  unitlist: string;
  isactive: string;
  inccustu: string;
  inccustt: string;
  inccustk: string;
  theSiteId: string;
  startupDate: string;
  custcolourNum: string;
  taxLabel: string;
  checkBacs: string;
  theApsName: string;
  runBacs: string;
  bacsAsk: string;
  custVatRate: string;
  custVatCode: string;
  custVatName: string;
  CustColour: string;
  $$hashKey: string;
}

export interface Customer {
  fullname: string;
  customernumber: number;
  sitename: string;
  unitlist: string;
  theMainAddress: string;
  firstcontact: Date;
  paymentType: string;
  phone: string;
  theStatus: string;
}
