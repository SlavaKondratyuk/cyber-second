export default interface Denunciation {
  userInformation:{
    firstName: string,
    lastName: string,
    middleName: string,
    phone: string,
    email: string,
  },
  event: {
    typeEvent: string,
    textEvent: string,
    imageEvent?: string[],
  },
  crimePersonEvent: CrimePersonEvent[] | [],
  }

interface CrimePersonEvent {
  secondName_crimePersonEvent?: string,
  firstName_crimePersonEvent?: string,
  middleName_crimePersonEvent?: string,
  additionalData_crimePersonEvent?: AdditionalData[] | [],
};

interface AdditionalData {
  dataType: string,
  data: string,
};
